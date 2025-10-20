import { HomeNav } from '@/components/home-nav';
import { Particles } from '@/components/particles';
import { Head, router } from '@inertiajs/react';

export default function Home() {
    return (
        <>
            <Head title="Home" />
            <HomeNav
                logoHref="/login"
                onSignInClick={() => router.visit('/login')}
                onCtaClick={() => {
                    router.visit('/register');
                }}
            />
            <Particles
                className="fixed inset-0 -z-10 h-full w-full"
            />
            <main>
                <h1>Welcome to the Home Page</h1>
                <p>This is the main content area.</p>
            </main>
            <footer className='text-center p-4'>
                <p>© {new Date().getFullYear()} Thinh Le. All rights reserved.</p>
            </footer>
        </>
    );
}
