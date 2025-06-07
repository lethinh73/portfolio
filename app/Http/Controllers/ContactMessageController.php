<?php

namespace App\Http\Controllers;

use App\Models\ContactMessage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use ReCaptcha\ReCaptcha;

class ContactMessageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|min:3',
            'email' => 'required|email',
            'message' => 'required|min:5',
        ]);

        $recaptcha = new Recaptcha(config('services.recaptcha.secret'));
        $resp = $recaptcha->setScoreThreshold(0.5)
                  ->verify($request['g-recaptcha-response']);

        if (!$resp->toArray()['success']) {
            $notification = [
                'type' => 'danger',
                'title' => 'reCAPTCHA Error!',
                'content' => 'The reCAPTCHA verification failed. Please try again.'
            ];

            return redirect('/#contact')->with('notification', $notification);
        }

        ContactMessage::create($validated);

        $notification = [
            'type' => 'success',
            'title' => 'Thank you!',
            'content' => 'Your message has been received and will be processed shortly.',
        ];

        return redirect('/#contact')->with('notification', $notification);
    }

    /**
     * Display the specified resource.
     */
    public function show(ContactMessage $contactMessage)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(ContactMessage $contactMessage)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, ContactMessage $contactMessage)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ContactMessage $contactMessage)
    {
        //
    }
}
