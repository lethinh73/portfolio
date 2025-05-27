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
            Log::error('OpenWeatherMap API key not configured in .env for WeatherController.');
            return response()->json(['error' => 'Server API key missing.'], 500);
        }

        try {
            $weatherData = Cache::remember($cacheKey, $cacheDuration, function() use ($lat, $lon, $apiKey, $units) {
                Log::info("Fetching fresh weather data for Houston from OpenWeatherMap API (Cache miss/expired).");

                $response = Http::get("https://api.openweathermap.org/data/3.0/onecall", [
                    'lat' => $lat,
                    'lon' => $lon,
                    'units' => $units,
                    // We need 'daily' for multiple days, no longer excluding it
                    'exclude' => 'minutely,hourly,alerts', // Keep minutely, hourly, alerts out
                    'appid' => $apiKey,
                ]);

                if ($response->successful()) {
                    $data = $response->json();

                    $forecasts = [];
                    for ($i = 0; $i < 4; $i++) {
                        if (isset($data['daily'][$i])) {
                            $day = $data['daily'][$i];
                            $forecasts[] = [
                                'dt' => $day['dt'], // Unix timestamp for the day
                                'temp_min' => round($day['temp']['min']),
                                'temp_max' => round($day['temp']['max']),
                                'description' => ucfirst($day['weather'][0]['description']),
                                'icon' => $day['weather'][0]['icon'],
                            ];
                        }
                    }

                    // Also include current weather details if needed for "today" summary
                    $current = $data['current'];

                    return [
                        'city' => 'Houston',
                        'country' => 'US',
                        'current_temp' => round($current['temp']),
                        'current_feels_like' => round($current['feels_like']),
                        'current_description' => ucfirst($current['weather'][0]['description']),
                        'current_icon' => $current['weather'][0]['icon'],
                        'forecasts' => $forecasts,
                    ];
                } else {
                    $apiErrorMessage = 'OpenWeatherMap One Call API returned an error: ' . $response->status() . ' - ' . $response->body();
                    Log::error($apiErrorMessage);
                    throw new \Exception('Failed to fetch fresh weather data from OpenWeatherMap: ' . $response->status());
                }
            });

            if (is_null($weatherData)) {
                Log::warning("Weather data for Houston was null after cache attempt. API might have failed silently.");
                return response()->json(['error' => 'Weather data is temporarily unavailable.'], 503);
            }

            return response()->json($weatherData);

        } catch (\Exception $e) {
            Log::error('Error fetching or caching weather data for Houston: ' . $e->getMessage());
            $staleData = Cache::get($cacheKey);
            if ($staleData) {
                Log::warning("Returning stale weather data for Houston due to fresh fetch failure.");
                return response()->json($staleData);
            }

            return response()->json(['error' => 'Could not retrieve weather data at this time.'], 500);
        }
    }
}