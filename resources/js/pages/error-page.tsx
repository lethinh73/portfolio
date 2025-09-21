import { home } from '@/routes';
import { Link } from '@inertiajs/react';

export default function ErrorPage({ status }: { status: number }) {
  const title = {
    503: 'Service Unavailable',
    500: 'Server Error',
    404: 'Page Not Found',
    403: 'Forbidden',
  }[status];

  const description = {
    503: 'Sorry, we are doing some maintenance. Please check back soon.',
    500: 'Whoops, something went wrong on our servers.',
    404: 'Sorry, the page you are looking for could not be found.',
    403: 'Sorry, you are forbidden from accessing this page.',
  }[status];

  return (
    <>
      <main className="fixed isolate h-full w-full">
        <img alt="" src="/images/404.png" className="absolute inset-0 -z-10 size-full object-cover object-top" />
        <div className="mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8">
          <p className="text-base/8 font-semibold text-white">{status}</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">{title}</h1>
          <p className="mt-6 text-lg font-medium text-pretty text-white/70 sm:text-xl/8">{description}</p>
          <div className="mt-10 flex justify-center">
            <Link href={home()} className="text-sm/7 font-semibold text-white hover:text-white/90">
              <span aria-hidden="true">&larr;</span> Back to home
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
