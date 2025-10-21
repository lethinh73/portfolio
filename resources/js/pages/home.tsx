import { HomeNav } from '@/components/home-nav';
import { Particles } from '@/components/particles';
import { Head, router } from '@inertiajs/react';

export default function Home() {
    return (
        <>
            <Head title="Home" />
            <div className="flex min-h-screen flex-col">
                <HomeNav
                    logoHref="/login"
                    onSignInClick={() => router.visit('/login')}
                    onCtaClick={() => {
                        router.visit('/register');
                    }}
                />

                <Particles className="fixed inset-0 h-full w-full" />

                <main className="flex-1">
                    <div className="grid min-h-[80vh] place-items-center px-4 text-center border-2 border-white">
                        
                    </div>
                </main>

                <footer className="p-4 text-center">
                    <p>
                        © {new Date().getFullYear()} Thinh Le. All rights
                        reserved.
                    </p>
                </footer>
            </div>
        </>
    );
}
