import LandingLayout from '@/layouts/landing-layout';
import { Head } from '@inertiajs/react';

export default function Home() {
    return (
        <LandingLayout>
            <Head title="Home" />
            <div className="flex flex-col items-center justify-center">
                <div className="mt-4">
                    <h1 className="text-4xl font-bold">
                        Welcome to the Home Page
                    </h1>
                </div>
                <div className="mb-4">
                    <p className="text-lg">This is the home page content.</p>
                </div>
                <div className="grid w-full max-w-4xl grid-cols-3 gap-4">
                    <div className="col-span-1 flex border-2 border-white">
                        Yo1
                    </div>
                    <div className="col-span-2 flex border-2 border-white">
                        Yo2
                    </div>
                </div>
            </div>
        </LandingLayout>
    );
}
