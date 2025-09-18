<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    /**
     * Handle the incoming contact request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(ContactRequest $request): RedirectResponse
    {
        $data = $request->validated();

        // For now, just email myself
        Mail::raw("Name: {$data['name']}\nEmail: {$data['email']}\nMessage: {$data['message']}", function ($message) use ($data) {
            $message->to("lethinh73@gmail.com") // Hardcoded to myself for now
                ->subject('New contact form submission from '.$data['name'])
                ->replyTo($data['email']);
        });

        return to_route('home');
    }
}
