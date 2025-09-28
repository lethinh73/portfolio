import ContactController from '@/actions/App/Http/Controllers/ContactController';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Toaster } from '@/components/ui/sonner';
import { Textarea } from '@/components/ui/textarea';
import { Form } from '@inertiajs/react';
import { useState } from 'react';
import { toast } from 'sonner';

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <>
      {!submitted ? (
        <Form
          {...ContactController.store.form()}
          options={{
            preserveScroll: true,
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
                  <Button disabled={processing} data-test="update-profile-button">
                    Submit
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
