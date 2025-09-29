<?php

namespace App\Jobs;

use App\Mail\DailyContactReportMail;
use App\Models\Contact;
use Carbon\Carbon;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;

class SendDailyContactReportJob implements ShouldQueue
{
    use Queueable;

    /**
     * Create a new job instance.
     */
    public function __construct()
    {
        //
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        $yesterday = Carbon::yesterday();

        $contacts = Contact::query()
            ->whereDate('created_at', $yesterday)
            ->whereNull('reported_at')
            ->get();

        if ($contacts->isEmpty()) {
            return;
        }

        $csvContent = $this->generateCsvContent($contacts);
        $csvFilePath = 'reports/daily-contacts-'.$yesterday->format('Y-m-d').'.csv';

        Storage::put($csvFilePath, $csvContent);

        Mail::to('lethinh73@gmail.com')->send(
            new DailyContactReportMail($contacts, Storage::path($csvFilePath))
        );

        Contact::whereIn('id', $contacts->pluck('id'))
            ->update(['reported_at' => now()]);

        Storage::delete($csvFilePath);
    }

    private function generateCsvContent($contacts): string
    {
        $csvContent = "Name,Email,Message\n";

        foreach ($contacts as $contact) {
            $message = str_replace(['"', "\n", "\r"], ['""', ' ', ' '], $contact->message);
            $message = substr($message, 0, 250);

            $csvContent .= sprintf(
                '"%s","%s","%s"'."\n",
                str_replace('"', '""', $contact->name),
                str_replace('"', '""', $contact->email),
                $message
            );
        }

        return $csvContent;
    }
}
