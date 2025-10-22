import { Card, CardContent, CardHeader } from '@/components/ui/card';
import LandingLayout from '@/layouts/landing-layout';
import { Head } from '@inertiajs/react';

export default function Work() {
    return (
        <LandingLayout>
            <Head title="Work" />
            <div className="flex flex-col items-center justify-center">
                <div className="mt-4">
                    <h1 className="text-4xl font-bold">
                        Welcome to the Work Page
                    </h1>
                </div>
                <div className="mb-4">
                    <p className="text-lg">This is the work page content.</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <Card>
                        <CardHeader>
                            <h2 className="text-2xl font-semibold">
                                Card Title
                            </h2>
                        </CardHeader>
                        <CardContent>
                            <p>This is some content inside the card.</p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <h2 className="text-2xl font-semibold">
                                Card Title
                            </h2>
                        </CardHeader>
                        <CardContent>
                            <p>This is some content inside the card.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </LandingLayout>
    );
}
