import AcmeLogo from '@/app/ui/acme-logo';
import LoginForm from '@/app/ui/login-form';

export default function LoginPage() {
    return (
        <main className="flex items-center justify-center md:h-screen">
            <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
                <div className="flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36">
                    <div className="w-32 text-white md:w-36">
                        <AcmeLogo />
                    </div>
                </div>

                <div className="flex h-20 w-full items-end rounded-lg p-3 md:h-36">
                    <div>
                        <div className="text-md">Hi, I did this course from the {' '}
                            <a href="https://nextjs.org/learn/dashboard-app" className="text-blue-600" target="_blank" rel="noopener noreferrer">Next.Js website</a>
                        </div>
                        <label className="text-md mt-4">Please use this test user:</label>
                        <div className="text-md">Email:
                            <span className="text-blue-600">user@nextmail.com</span>
                        </div>
                        <div className="text-md">Password:
                            <span className="text-blue-600">123456</span>
                        </div>
                    </div>
                </div>

                <LoginForm />
            </div>
        </main>
    );
}