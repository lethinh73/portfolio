import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import React from 'react';

export const HomeNav = ({ logo }: { logo: string }): React.JSX.Element => {
    return (
        <div className="absolute top-8 left-0 z-0 w-full">
            <nav className="mx-auto flex h-[60px] w-[90%] items-center justify-between rounded-[50px] border border-white/20 bg-white/5 px-6 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[10px] md:w-[60%]">
                <img
                    src={logo}
                    alt="Thinh Le Logo"
                    className="h-6 rounded-full"
                />

                <div className="flex items-center text-white md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <button aria-label="Open menu" className="p-1">
                                <Menu />
                            </button>
                        </SheetTrigger>
                        <SheetContent side="right">
                            {' '}
                            <SheetHeader>
                                <SheetTitle>Menu</SheetTitle>
                            </SheetHeader>
                            <div className="grid gap-4 py-4">
                                <a href="#" className="text-lg">
                                    Home
                                </a>
                                <a href="#" className="text-lg">
                                    Work
                                </a>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>

                <div className="hidden items-center gap-6 font-semibold md:flex">
                    <a
                        href="#"
                        className="flex items-center text-sm text-white transition-opacity hover:opacity-80"
                    >
                        Home
                    </a>
                    <a
                        href="#"
                        className="flex items-center text-sm text-white transition-opacity hover:opacity-80"
                    >
                        Work
                    </a>
                </div>
            </nav>
        </div>
    );
};
