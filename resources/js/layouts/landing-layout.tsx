import DotGrid from '@/components/dot-grid';
import GooeyNav from '@/components/gooey-nav';

export default function LandingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen flex-col pt-5">
            <div className="flex w-full justify-center">
                <GooeyNav
                    items={[
                        { href: '#', label: 'Home' },
                        { href: '#', label: 'Work' },
                        { href: '#', label: 'Contact' },
                    ]}
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
