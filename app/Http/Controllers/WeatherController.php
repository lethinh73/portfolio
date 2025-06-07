<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Cache;

class WeatherController extends Controller
{
    private const HOUSTON_LAT = '29.7603761';
    private const HOUSTON_LON = '-95.3698054';
    private const UNITS = 'imperial';

    public function getCurrentWeather(Request $request)
    {
        $apiKey = config('services.openweathermap.api_key');
        $lat = self::HOUSTON_LAT;
        $lon = self::HOUSTON_LON;
        $units = self::UNITS;

        $cacheKey = "weather_data_houston_" . $units;
        $cacheDuration = 60 * 15; // 15 minutes

        if (!$apiKey) {
            return response()->json(['error' => 'Server API key missing.'], 500);
        }

        try {
            $weatherData = Cache::remember($cacheKey, $cacheDuration, function() use ($lat, $lon, $apiKey, $units) {
                $response = Http::get("https://api.openweathermap.org/data/3.0/onecall", [
                    'lat' => $lat,
                    'lon' => $lon,
                    'units' => $units,
                    'exclude' => 'minutely,hourly,alerts', // Keep minutely, hourly, alerts out
                    'appid' => $apiKey,
                ]);

                if ($response->successful()) {
                    $data = $response->json();

                    $forecasts = [];
                    for ($i = 0; $i < 4; $i++) {
                        if (isset($data['daily'][$i])) {
                            $forecasts[] = $data['daily'][$i];
                        }
                    }

                    // Also include current weather details if needed for "today" summary
                    $current = $data['current'];

                    return [
                        'city' => 'Houston',
                        'country' => 'US',
                        'current' => $current,
                        'forecasts' => $forecasts,
                    ];
                } else {
                    $apiErrorMessage = 'OpenWeatherMap One Call API returned an error: ' . $response->status() . ' - ' . $response->body();
                    throw new \Exception('Failed to fetch fresh weather data from OpenWeatherMap: ' . $response->status());
                }
            });

            if (is_null($weatherData)) {
                return response()->json(['error' => 'Weather data is temporarily unavailable.'], 503);
            }

            return response()->json($weatherData);

        } catch (\Exception $e) {
            $staleData = Cache::get($cacheKey);
            if ($staleData) {
                return response()->json($staleData);
            }

            return response()->json(['error' => 'Could not retrieve weather data at this time.'], 500);
        }
    }
}