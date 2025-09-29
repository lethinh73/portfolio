import ContactController from '@/actions/App/Http/Controllers/ContactController';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Toaster } from '@/components/ui/sonner';
import { Textarea } from '@/components/ui/textarea';
import { Form } from '@inertiajs/react';
import { useState, useEffect } from 'react';
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

  useEffect(() => {
    // Check if reCaptcha script is already loaded
    if (window.grecaptcha) {
      setRecaptchaLoaded(true);
      return;
    }

    // Check if script tag already exists
    const existingScript = document.querySelector(`script[src*="recaptcha/api.js"]`);
    if (existingScript) {
      // Script already exists, wait for it to load
      const checkLoaded = () => {
        if (window.grecaptcha) {
          setRecaptchaLoaded(true);
        } else {
          setTimeout(checkLoaded, 100);
        }
      };
      checkLoaded();
      return;
    }

    // Create and load new script
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${recaptchaSiteKey}`;
    script.async = true;
    script.onload = () => setRecaptchaLoaded(true);
    script.onerror = () => {
      toast.error('Failed to load reCaptcha. Please refresh the page.');
    };
    document.head.appendChild(script);
  }, [recaptchaSiteKey]);

  const executeRecaptcha = async (): Promise<string> => {
    if (!recaptchaLoaded || !window.grecaptcha) {
      throw new Error('reCaptcha not loaded');
    }

    return new Promise((resolve, reject) => {
      try {
        window.grecaptcha.ready(() => {
          window.grecaptcha.execute(recaptchaSiteKey, { action: 'contact_form' })
            .then((token: string) => {
              if (!token) {
                reject(new Error('Failed to generate reCaptcha token'));
                return;
              }
              resolve(token);
            })
            .catch((error) => {
              reject(new Error(`reCaptcha execution failed: ${error.message}`));
            });
        });
      } catch (error) {
        reject(new Error(`reCaptcha error: ${error}`));
      }
    });
  };

  return (
    <>
      {!submitted ? (
        <Form
          {...ContactController.store.form()}
          options={{
            preserveScroll: true,
            onBefore: async (visit) => {
              try {
                const token = await executeRecaptcha();
                if (visit.data && typeof visit.data === 'object') {
                  (visit.data as Record<string, unknown>).recaptcha_token = token;
                }
              } catch (error) {
                console.error('reCaptcha error:', error);
                toast.error(`reCaptcha verification failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
                return false;
              }
            },
          }}
          className="w-full max-w-md space-y-6"
          onSuccess={() => {
            setSubmitted(true);
            toast.success('Submitted successfully!');
          }}
          onError={() => {
            setSubmitted(false);
            toast.error('Something went wrong. Please try again.');
          }}
        >
          {({ processing, errors }) => {
            return (
              <>
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" className="mt-1 block w-full" name="name" required autoComplete="name" placeholder="Full name" />
                  <InputError className="mt-2" message={errors.name} />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email address</Label>
                  <Input
                    id="email"
                    type="email"
                    className="mt-1 block w-full"
                    name="email"
                    required
                    autoComplete="username"
                    placeholder="Email address"
                  />
                  <InputError className="mt-2" message={errors.email} />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" className="mt-1 block w-full" name="message" required placeholder="Your message" />
                  <InputError className="mt-2" message={errors.message} />
                </div>
                <div className="flex justify-center gap-4">
                  <Button disabled={processing || !recaptchaLoaded} data-test="update-profile-button">
                    {!recaptchaLoaded ? 'Loading...' : processing ? 'Submitting...' : 'Submit'}
                  </Button>
                </div>
              </>
            );
          }}
        </Form>
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
