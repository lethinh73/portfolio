import LandingLayout from '@/layouts/landing-layout';
import { Head } from '@inertiajs/react';

export default function Home() {
    return (
        <LandingLayout>
            <Head title="Home" />
            <div className="flex min-h-screen flex-col items-center pt-[150px]">
                <div className="mt-4">
                    <h1 className="text-4xl font-bold">Hello, I'm Thinh Le</h1>
                    <h2 className="mt-2 text-2xl">A Full-Stack Developer</h2>
                </div>
                <div className="mb-4">
                    <img
                        src="/images/profile.jpg"
                        alt="Profile Picture"
                        className="mt-4 h-48 w-48 rounded-full"
                    />
                </div>
                <div className="grid w-[80%] grid-cols-1 gap-4 sm:grid-cols-3">
                    <div className="col-span-1 flex w-full border-1 border-white">
                        Thinh
                    </div>
                    <div className="col-span-1 flex w-full border-1 border-white sm:col-span-2">
                        Yo2
                    </div>
                </div>
            </div>
        </LandingLayout>
    );
}
