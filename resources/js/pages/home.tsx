import BentoGrid from '@/components/bento-grid';
import { TextLoop } from '@/components/ui/text-loop';
import PublicLayout from '@/layouts/public-layout';
import { Head } from '@inertiajs/react';

export default function Home() {
    return (
        <PublicLayout>
            <Head title="Home" />

            <div className="mt-2 flex flex-row items-center justify-between">
                <div className="flex flex-col items-start">
                    <h1 className="text-3xl font-bold">Thinh Le</h1>
                    <h3 className="mt-4 text-xl text-gray-400">
                        A&nbsp;
                        <TextLoop
                            className="overflow-y-clip"
                            transition={{
                                type: 'spring',
                                stiffness: 900,
                                damping: 80,
                                mass: 10,
                            }}
                            variants={{
                                initial: {
                                    y: 20,
                                    rotateX: 90,
                                    opacity: 0,
                                    filter: 'blur(4px)',
                                },
                                animate: {
                                    y: 0,
                                    rotateX: 0,
                                    opacity: 1,
                                    filter: 'blur(0px)',
                                },
                                exit: {
                                    y: -20,
                                    rotateX: -90,
                                    opacity: 0,
                                    filter: 'blur(4px)',
                                },
                            }}
                        >
                            <span>Full Stack Developer</span>
                            <span>Turn-Based Game Lover </span>
                            <span>Lifelong Learner</span>
                        </TextLoop>
                    </h3>
                </div>

                <div className=''>
                    
                </div>
            </div>

            <div className="mt-5">
                <BentoGrid />
            </div>
        </PublicLayout>
    );
}
