import DotGrid from '@/components/dot-grid';
import GooeyNav from '@/components/gooey-nav';

const navItems: { href: string; label: string }[] = [
    { href: '/', label: 'Home' },
    { href: '/work', label: 'Work' },
    { href: '/contact', label: 'Contact' },
];

function handleCurrentPathIndex(paths: string[]) {
    if (typeof window === 'undefined') {
        return 0;
    }

    const currentPath = window.location.pathname;
    const index = paths.indexOf(currentPath);
    return index !== -1 ? index : 0;
}

export default function LandingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen flex-col pt-5">
            <div className="flex w-full justify-center">
                <GooeyNav
                    items={navItems}
                    initialActiveIndex={handleCurrentPathIndex(
                        navItems.map((item) => item.href),
                    )}
                />
            </div>

            <DotGrid className="fixed inset-0 h-full w-full" />

            <main className="flex-1">{children}</main>

            <footer className="p-4 text-center">
                <p>
                    © {new Date().getFullYear()} Thinh Le. All rights reserved.
                </p>
            </footer>
        </div>
    );
}
