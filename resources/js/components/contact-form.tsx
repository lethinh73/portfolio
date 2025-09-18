import ContactController from '@/actions/App/Http/Controllers/ContactController';
import InputError from '@/components/input-error';
import SimpleNotification from '@/components/simple-notification';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Form } from '@inertiajs/react';
import { useState } from 'react';

export function ContactForm() {
  const [showSuccess, setShowSuccess] = useState<boolean>(false);

  return (
    <>
      <Form
        {...ContactController.store.form()}
        options={{
          preserveScroll: true,
        }}
        className="w-2/3 space-y-6 md:w-2/5"
      >
        {({ processing, recentlySuccessful, errors }) => {
          if (recentlySuccessful) {
            setShowSuccess(true);
            setTimeout(() => setShowSuccess(false), 3000);
          }

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

              <div className="flex items-center gap-4">
                <Button disabled={processing} data-test="update-profile-button">
                  Submit
                </Button>
              </div>
            </>
          );
        }}
      </Form>

      <SimpleNotification
        show={showSuccess}
        setShow={setShowSuccess}
        type="success"
        title="Success"
        message="Your message has been sent successfully!"
      />
    </>
  );
}
