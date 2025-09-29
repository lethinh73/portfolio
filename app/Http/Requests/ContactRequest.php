<?php

namespace App\Http\Requests;

use App\Rules\RecaptchaRule;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class ContactRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'min:3', 'max:255'],
            'email' => [
                'required',
                'string',
                'lowercase',
                'email',
                'min:3',
                'max:255',
            ],
            'message' => ['required', 'string', 'min:3', 'max:2000'],
            'recaptcha_token' => ['required', 'string', new RecaptchaRule],
        ];
    }
}
