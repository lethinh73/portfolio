import LandingLayout from '@/layouts/landing-layout';
import { Head } from '@inertiajs/react';

export default function Home() {
    return (
        <LandingLayout>
            <Head title="Home" />
            <div className="flex flex-col items-center justify-center">
                <div className="mt-4">
                    <h1 className="text-4xl font-bold">
                        Hello, I'm Thinh Le
                    </h1>
                    <h2 className="text-2xl mt-2">
                        A Full-Stack Developer
                    </h2>
                </div>
                <div className="mb-4">
                    <img src="/images/profile.jpg" alt="Profile Picture" className="w-48 h-48 rounded-full mt-4" />
                </div>
                <div className="grid w-[80%] grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="col-span-1 flex border-2 border-white w-full">
                        
                    </div>
                    <div className="col-span-1 sm:col-span-2 flex border-2 border-white w-full">
                        Yo2
                    </div>
                </div>
            </div>
        </LandingLayout>
    );
}
