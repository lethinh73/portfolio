import { Button } from '@/components/ui/button';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from '@/components/ui/navigation-menu';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import { Link } from '@inertiajs/react';
import ThinhLogo from '@/assets/logo.svg';

// Simple logo component for the navbar
const Logo = (props: React.SVGAttributes<SVGElement>) => {
    return (
        <svg
            width="32"
            height="32"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{backgroundColor: 'white'}}
            {...props}
        >
            <image
                href={ThinhLogo}
                width="100"
                height="100"
                className='fill-white'
            />
        </svg>
    );
};
// Hamburger icon component
const HamburgerIcon = ({
    className,
    ...props
}: React.SVGAttributes<SVGElement>) => (
    <svg
        className={cn('pointer-events-none', className)}
        width={16}
        height={16}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M4 12L20 12"
            className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
        />
        <path
            d="M4 12H20"
            className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
        />
        <path
            d="M4 12H20"
            className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
        />
    </svg>
);
// Types
export interface HomeNavNavLink {
    href: string;
    label: string;
    active?: boolean;
}
export interface HomeNavProps extends React.HTMLAttributes<HTMLElement> {
    logo?: React.ReactNode;
    logoHref?: string;
    navigationLinks?: HomeNavNavLink[];
    signInText?: string;
    // signInHref?: string;
    ctaText?: string;
    // ctaHref?: string;
    onSignInClick?: () => void;
    onCtaClick?: () => void;
}
// Default navigation links
const defaultNavigationLinks: HomeNavNavLink[] = [
    { href: '#', label: 'Home', active: true },
    { href: '#features', label: 'Features' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#about', label: 'About' },
];
export const HomeNav = React.forwardRef<HTMLElement, HomeNavProps>(
    (
        {
            className,
            logo = <Logo />,
            logoHref = '#',
            navigationLinks = defaultNavigationLinks,
            signInText = 'Sign In',
            // signInHref = '#signin',
            ctaText = 'Get Started',
            // ctaHref = '#get-started',
            onSignInClick,
            onCtaClick,
            ...props
        },
        ref,
    ) => {
        const [isMobile, setIsMobile] = useState(false);
        const containerRef = useRef<HTMLElement>(null);
        useEffect(() => {
            const checkWidth = () => {
                if (containerRef.current) {
                    const width = containerRef.current.offsetWidth;
                    setIsMobile(width < 768); // 768px is md breakpoint
                }
            };
            checkWidth();
            const resizeObserver = new ResizeObserver(checkWidth);
            if (containerRef.current) {
                resizeObserver.observe(containerRef.current);
            }
            return () => {
                resizeObserver.disconnect();
            };
        }, []);
        // Combine refs
        const combinedRef = React.useCallback(
            (node: HTMLElement | null) => {
                containerRef.current = node;
                if (typeof ref === 'function') {
                    ref(node);
                } else if (ref) {
                    ref.current = node;
                }
            },
            [ref],
        );
        return (
            <header
                ref={combinedRef}
                className={cn(
                    'sticky top-0 z-50 w-full border-b bg-background/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:px-6 [&_*]:no-underline',
                    className,
                )}
                {...props}
            >
                <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between gap-4">
                    {/* Left side */}
                    <div className="flex items-center gap-2">
                        {/* Mobile menu trigger */}
                        {isMobile && (
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button
                                        className="group h-9 w-9 hover:bg-accent hover:text-accent-foreground"
                                        variant="ghost"
                                        size="icon"
                                    >
                                        <HamburgerIcon />
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent
                                    align="start"
                                    className="w-48 p-2"
                                >
                                    <NavigationMenu className="max-w-none">
                                        <NavigationMenuList className="flex-col items-start gap-1">
                                            {navigationLinks.map(
                                                (link, index) => (
                                                    <NavigationMenuItem
                                                        key={index}
                                                        className="w-full"
                                                    >
                                                        <button
                                                            onClick={(e) =>
                                                                e.preventDefault()
                                                            }
                                                            className={cn(
                                                                'flex w-full cursor-pointer items-center rounded-md px-3 py-2 text-sm font-medium no-underline transition-colors hover:bg-accent hover:text-accent-foreground',
                                                                link.active
                                                                    ? 'bg-accent text-accent-foreground'
                                                                    : 'text-foreground/80',
                                                            )}
                                                        >
                                                            {link.label}
                                                        </button>
                                                    </NavigationMenuItem>
                                                ),
                                            )}
                                        </NavigationMenuList>
                                    </NavigationMenu>
                                </PopoverContent>
                            </Popover>
                        )}
                        {/* Main nav */}
                        <div className="flex items-center gap-6">
                            <Link
                                href={logoHref}
                                className="flex cursor-pointer items-center space-x-2 text-primary transition-colors hover:text-primary/90"
                            >
                                <div className="text-2xl">{logo}</div>
                                <span className="hidden text-xl font-bold sm:inline-block">
                                    Thinh Le
                                </span>
                            </Link>
                            {/* Navigation menu */}
                            {!isMobile && (
                                <NavigationMenu className="flex">
                                    <NavigationMenuList className="gap-1">
                                        {navigationLinks.map((link, index) => (
                                            <NavigationMenuItem key={index}>
                                                <button
                                                    onClick={(e) =>
                                                        e.preventDefault()
                                                    }
                                                    className={cn(
                                                        'group inline-flex h-9 w-max cursor-pointer items-center justify-center rounded-md px-4 py-2 text-sm font-medium no-underline transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50',
                                                        link.active
                                                            ? 'bg-accent text-accent-foreground'
                                                            : 'text-foreground/80 hover:text-foreground',
                                                    )}
                                                >
                                                    {link.label}
                                                </button>
                                            </NavigationMenuItem>
                                        ))}
                                    </NavigationMenuList>
                                </NavigationMenu>
                            )}
                        </div>
                    </div>
                    {/* Right side */}
                    <div className="flex items-center gap-3">
                        <Button
                            variant="ghost"
                            size="sm"
                            className="text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                            onClick={(e) => {
                                e.preventDefault();
                                if (onSignInClick) onSignInClick();
                            }}
                        >
                            {signInText}
                        </Button>
                        <Button
                            size="sm"
                            className="h-9 rounded-md px-4 text-sm font-medium shadow-sm"
                            onClick={(e) => {
                                e.preventDefault();
                                if (onCtaClick) onCtaClick();
                            }}
                        >
                            {ctaText}
                        </Button>
                    </div>
                </div>
            </header>
        );
    },
);

HomeNav.displayName = 'HomeNav';
export { HamburgerIcon, Logo };
