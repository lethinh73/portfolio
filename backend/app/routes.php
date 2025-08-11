<?php

declare(strict_types=1);

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\App;

// Helper function to get the number of CPU cores.
function get_cpu_cores(): int {
    if (PHP_OS_FAMILY === 'Linux') {
        return intval(shell_exec('nproc'));
    }
    if (PHP_OS_FAMILY === 'Darwin') { // macOS
        return intval(shell_exec('sysctl -n hw.ncpu'));
    }
    return 1; // Default for Windows or other OS
}

// Helper function to format uptime from seconds.
function format_uptime(int $seconds): string {
    $days = floor($seconds / (3600*24));
    $hours = floor(($seconds % (3600*24)) / 3600);
    $minutes = floor(($seconds % 3600) / 60);
    return sprintf('%d days, %02d:%02d', $days, $hours, $minutes);
}


return function (App $app) {
    $app->get('/', function (Request $request, Response $response) {
        $response->getBody()->write(json_encode([
            'message' => 'ThinhSoft API',
            'status' => 'success'
        ]));
        return $response->withHeader('Content-Type', 'application/json');
    });

    $app->get('/system', function (Request $request, Response $response) {
        // --- CPU Usage ---
        $load = sys_getloadavg();
        $cores = get_cpu_cores();
        $cpu_percent = ($load[0] / $cores) * 100;
    
        // --- Memory Usage ---
        $memory_percent = 50.0; // Default placeholder
        if (PHP_OS_FAMILY === 'Linux' && is_readable('/proc/meminfo')) {
            $meminfo = file_get_contents('/proc/meminfo');
            preg_match('/MemTotal:\s+(\d+)/', $meminfo, $total_match);
            preg_match('/MemAvailable:\s+(\d+)/', $meminfo, $avail_match);
            if (isset($total_match[1], $avail_match[1])) {
                $mem_total = $total_match[1] * 1024;
                $mem_available = $avail_match[1] * 1024;
                $mem_used = $mem_total - $mem_available;
                $memory_percent = ($mem_used / $mem_total) * 100;
            }
        }
        
        // --- Disk Usage ---
        $disk_total = disk_total_space('/');
        $disk_free = disk_free_space('/');
        $disk_percent = (($disk_total - $disk_free) / $disk_total) * 100;
    
        // --- Process Count ---
        $process_count = 0;
        if (PHP_OS_FAMILY === 'Linux' || PHP_OS_FAMILY === 'Darwin') {
            $process_count = intval(shell_exec('ps -e | wc -l'));
        }
    
        // --- Uptime ---
        $uptime_seconds = floatval(shell_exec('cat /proc/uptime | cut -d\' \' -f1'));
        $uptime_formatted = format_uptime((int)$uptime_seconds);
    
        // --- Platform Info ---
        $platform_info = ['system' => php_uname('s'), 'machine' => php_uname('m')];
        
        // --- Network Stats (Linux specific example) ---
        $bytes_sent = $bytes_recv = $packets_sent = $packets_recv = 0;
        if (is_readable('/proc/net/dev')) {
            $net_dev = file('/proc/net/dev');
            for ($i = 2; $i < count($net_dev); $i++) {
                $parts = preg_split('/\s+/', trim($net_dev[$i]));
                if ($parts[0] !== 'lo:') { // Skip loopback
                    $bytes_recv += intval($parts[1]);
                    $packets_recv += intval($parts[2]);
                    $bytes_sent += intval($parts[9]);
                    $packets_sent += intval($parts[10]);
                }
            }
        }
    
        // Assemble the data payload
        $data = [
            'cpu_percent' => $cpu_percent,
            'memory_percent' => $memory_percent,
            'disk_percent' => $disk_percent,
            'process_count' => $process_count,
            'uptime' => $uptime_formatted,
            'platform_info' => $platform_info,
            'network_stats' => compact('bytes_sent', 'bytes_recv', 'packets_sent', 'packets_recv')
        ];
        
        $response->getBody()->write(json_encode($data));
        return $response->withHeader('Content-Type', 'application/json');
    });
};
