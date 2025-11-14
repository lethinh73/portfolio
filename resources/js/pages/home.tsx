import { ModeToggle } from '@/components/mode-toggle';
import { Head } from '@inertiajs/react';

export default function Home() {
    return (
        <>
            <Head title="Home" />
            <div className="flex min-h-screen flex-col items-center p-6 lg:justify-center lg:p-8">
                test
                <ModeToggle />
            </div>
        </>
    );
}
