import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import Particles from '@/components/Particles';

export function Layout({ children }) {
  return (
    <>
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div style={{ width: '100%', height: '600px', position: 'relative' }}>
            <Particles
              particleColors={['#ffffff', '#000000']}
              particleCount={200}
              particleSpread={10}
              speed={0.2}
              particleBaseSize={100}
              moveParticlesOnHover={false}
              alphaParticles={true}
              disableRotation={true}
            />
          </div>
        </div>
      </div>
      <div className="relative flex w-full flex-col">
        <Header />
        <main className="flex-auto">{children}</main>
        <Footer />
      </div>
    </>
  );
}
