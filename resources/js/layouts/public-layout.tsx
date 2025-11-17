import { Navbar } from '@/components/navbar';
import { type PropsWithChildren } from 'react';

interface PublicLayoutProps {
    name?: string;
}

export default function PublicLayout({
    children,
}: PropsWithChildren<PublicLayoutProps>) {
    return (
        <div className="mx-auto flex min-h-screen max-w-4xl flex-col justify-center px-8">
            <Navbar />
            <div className="mt-[100px] flex flex-1 flex-col">{children}</div>
        </div>
    );
}
