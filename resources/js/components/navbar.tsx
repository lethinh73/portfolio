import { ModeToggle } from '@/components/mode-toggle';
import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';
import AppLogoIcon from './app-logo-icon';

export function Navbar() {
    return (
        <div className="fixed top-6 right-0 left-0 z-50 px-4">
            <nav className="mx-auto flex max-w-lg items-center justify-between rounded-full border p-2 px-6">
                <div className="flex items-center gap-6">
                    <Link
                        href="/"
                        className="flex items-center gap-2 font-semibold"
                    >
                        <AppLogoIcon className="size-8 p-1 rounded-full bg-white text-black dark:text-white" />
                    </Link>

                    <div className="flex items-center gap-4">
                        <Button variant="ghost" asChild>
                            <Link href="/">Dashboard</Link>
                        </Button>
                        <Button variant="ghost" asChild>
                            <Link href="/projects">Projects</Link>
                        </Button>
                        <Button variant="ghost" asChild>
                            <Link href="/about">About</Link>
                        </Button>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <ModeToggle />
                </div>
            </nav>
        </div>
    );
}
