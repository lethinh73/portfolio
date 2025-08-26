<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

Route::get('/ping', function () {
    return response()->json(['message' => 'Pong']);
});

Route::post('/login', function (Request $request) {
    $credentials = $request->validate([
        'email' => ['required','email'],
        'password' => ['required'],
    ]);

    if (!Auth::attempt($credentials, remember: true)) {
        return response()->json(['message' => 'Invalid credentials'], 403);
    }

    if ($request->hasSession()) {
        $request->session()->regenerate();
    }

    return response()->json(['user' => Auth::user()]);
});

Route::post('/logout', function (Request $request) {
    Auth::guard('web')->logout();

    if ($request->hasSession()) {
        $request->session()->invalidate();
        $request->session()->regenerateToken();
    }

    return response()->json(['message' => 'Logged out']);
});

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');