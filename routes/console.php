<?php

use App\Mail\MessagesDailyReport;
use App\Models\ContactMessage;
use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Schedule;

Artisan::command('inspire', function () {
    $this->comment(Inspiring::quote());
})->purpose('Display an inspiring quote');

Schedule::call(function () {
    $newMessages = ContactMessage::whereDate('created_at', Carbon::yesterday())->get();

    Log::debug($newMessages);

    if ($newMessages->isNotEmpty()) {
        Mail::to('lethinh73@gmail.com')->send(new MessagesDailyReport($newMessages));
    }
})->dailyAt('07:00');