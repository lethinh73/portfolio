import Logo from '@/assets/logo.svg';
import { HomeNav } from '@/components/home-nav';
import LightRays from '@/components/light-rays';

export default function LandingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <div className="fixed h-full w-full">
                <LightRays
                    raysOrigin="top-center"
                    raysColor="white"
                    raysSpeed={0.1}
                    lightSpread={1.0}
                    rayLength={2.0}
                    followMouse={false}
                    noiseAmount={0}
                    distortion={0.2}
                />

                <HomeNav logo={Logo} />
            </div>

            <main>{children}</main>

            <footer className="w-full py-10 text-center text-sm text-white/50">
                <p>
                    © {new Date().getFullYear()} Thinh Le. All rights reserved.
                </p>
            </footer>
        </>
    );
}
