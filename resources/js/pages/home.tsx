import PublicLayout from '@/layouts/public-layout';
import { Head } from '@inertiajs/react';

export default function Home() {
    return (
        <PublicLayout>
            <Head title="Home" />

            <div className="mb-6">
                <h1 className="text-3xl font-bold">Thinh Le</h1>
                <h3 className="mt-2 text-xl text-gray-400">
                    Full-Stack Developer
                </h3>
            </div>

            <p className="max-w-2xl text-center text-gray-600">
                Welcome to my portfolio! I am passionate about building web
                applications that solve real-world problems. Explore my projects
                and get in touch!
            </p>
        </PublicLayout>
    );
}
