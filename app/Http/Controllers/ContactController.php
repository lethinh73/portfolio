<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactRequest;
use Illuminate\Http\RedirectResponse;
use App\Models\Contact;

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

        Contact::create($data);

        return to_route('home');
    }
}
