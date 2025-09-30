<?php

namespace App\Jobs;

use App\Mail\DailyContactReportMail;
use App\Models\Contact;
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
        $contacts = Contact::query()
            ->whereNull('reported_at')
            ->limit(50)
            ->get();

        if ($contacts->isEmpty()) {
            new DailyContactReportMail(new \Illuminate\Support\Collection(), '');
            return;
        }

        $csvContent = $this->generateCsvContent($contacts);
        $csvFilePath = 'reports/daily-contacts-'.now()->format('Y-m-d').'.csv';

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
        $csvContent = "Name,Email,Message,Created At\n";

        foreach ($contacts as $contact) {
            $message = str_replace(['"', "\n", "\r"], ['""', ' ', ' '], $contact->message);
            $message = substr($message, 0, 250);

            $csvContent .= sprintf(
                '"%s","%s","%s","%s"'."\n",
                str_replace('"', '""', $contact->name),
                str_replace('"', '""', $contact->email),
                $message,
                $contact->created_at->format('Y-m-d H:i:s')
            );
        }

        return $csvContent;
    }
}
