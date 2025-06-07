<?php

use App\Http\Controllers\ContactMessageController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\WeatherController;

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::resource('contactmessage', ContactMessageController::class);
Route::get('/api/weather', [WeatherController::class, 'getCurrentWeather']);