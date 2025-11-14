import { ModeToggle } from '@/components/mode-toggle';
import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';
import { Package2 } from 'lucide-react';

export function Navbar() {
    return (
        <div className="fixed top-6 right-0 left-0 z-50 px-4">
            <nav className="mx-auto flex max-w-screen-lg items-center justify-between rounded-lg border bg-background/90 p-4 px-6 backdrop-blur-sm">
                <div className="flex items-center gap-6">
                    <Link
                        href="/"
                        className="flex items-center gap-2 font-semibold"
                    >
                        <Package2 className="h-6 w-6" />
                        <span>MyProject</span>
                    </Link>

                    <div className="hidden items-center gap-4 md:flex">
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
