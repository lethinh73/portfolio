import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Toaster } from '@/components/ui/sonner';
import { Textarea } from '@/components/ui/textarea';
import { useForm, router } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

interface ContactFormProps {
  recaptchaSiteKey: string;
}

declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

export function ContactForm({ recaptchaSiteKey }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);

  const { data, setData, processing, errors, clearErrors, setError } = useForm({
    name: '',
    email: '',
    message: '',
    recaptcha_token: '',
  });

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${recaptchaSiteKey}`;
    script.async = true;
    script.defer = true;
    script.onload = () => {
      window.grecaptcha.ready(() => {
        setRecaptchaLoaded(true);
      });
    };
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector(`script[src*="google.com/recaptcha"]`);
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, [recaptchaSiteKey]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!recaptchaLoaded) {
      toast.error('reCAPTCHA is not loaded yet. Please try again.');
      return;
    }

    try {
      // Execute reCAPTCHA and get token
      const token = await window.grecaptcha.execute(recaptchaSiteKey, { action: 'contact_form' });

      // Submit form data with recaptcha token using router
      const formDataWithToken = {
        ...data,
        recaptcha_token: token,
      };

      router.post('/contact', formDataWithToken, {
        preserveScroll: true,
        onSuccess: () => {
          setSubmitted(true);
          clearErrors();
          toast.success('Submitted successfully!');
        },
        onError: (errors) => {
          setSubmitted(false);
          clearErrors();
          // Set the validation errors from the server response
          if (errors && typeof errors === 'object') {
            const validKeys = ['name', 'email', 'message', 'recaptcha_token'] as const;
            Object.keys(errors).forEach(key => {
              if (validKeys.includes(key as typeof validKeys[number])) {
                setError(key as keyof typeof data, errors[key]);
              }
            });
          }
          toast.error('Something went wrong. Please try again.');
        },
      });
    } catch (error) {
      console.error('reCAPTCHA error:', error);
      toast.error('reCAPTCHA verification failed. Please try again.');
    }
  }

  return (
    <>
      {!submitted ? (
        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              className="mt-1 block w-full"
              value={data.name}
              onChange={e => setData('name', e.target.value)}
              required
              autoComplete="name"
              placeholder="Full name"
            />
            <InputError className="mt-2" message={errors.name} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email address</Label>
            <Input
              id="email"
              type="email"
              className="mt-1 block w-full"
              value={data.email}
              onChange={e => setData('email', e.target.value)}
              required
              autoComplete="username"
              placeholder="Email address"
            />
            <InputError className="mt-2" message={errors.email} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              className="mt-1 block w-full"
              value={data.message}
              onChange={e => setData('message', e.target.value)}
              required
              placeholder="Your message"
            />
            <InputError className="mt-2" message={errors.message} />
          </div>
          <div className="flex justify-center gap-4">
            <Button disabled={processing || !recaptchaLoaded} data-test="update-profile-button">
              {processing ? 'Submitting...' : !recaptchaLoaded ? 'Loading...' : 'Submit'}
            </Button>
          </div>
          <InputError className="mt-2" message={errors.recaptcha_token} />
        </form>
      ) : (
        <div className="w-full max-w-md space-y-6">
          <div className="rounded-md border p-6 text-center">
            <h3 className="text-lg font-semibold">Thank you for reaching out!</h3>
            <p className="mt-2">I appreciate you taking the time to contact me. I'll get back to you as soon as possible.</p>
          </div>
        </div>
      )}
      <Toaster position="bottom-right" richColors={true} />
    </>
  );
}
