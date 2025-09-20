import ContactController from '@/actions/App/Http/Controllers/ContactController';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Form } from '@inertiajs/react';
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";

export function ContactForm() {

  return (
    <>
      <Form
        {...ContactController.store.form()}
        options={{
          preserveScroll: true,
        }}
        className="w-2/3 space-y-6 md:w-2/5"
        onSuccess={() => {
          toast.success("Thank you for your message!");
        }}
        onError={() => {
          toast.error("There was an error sending your message.");
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
      <Toaster position="bottom-right" richColors={true} />
    </>
  );
}