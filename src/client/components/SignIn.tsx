'use client';

export default function SignIn({ setIsSignedIn }: { setIsSignedIn: (isSignedIn: boolean) => void }) {
    return (
        <div className="flex flex-col items-center justify-center w-full h-screen">
            <div className="flex flex-col w-[45%] h-[70%] rounded-xl bg-signBackground">
                <div className="flex flex-col items-center justify-center w-full mt-4">
                    <p className="text-2xl font-medium text-[#8F8F8F] font-[family-name:var(--font-geist-mono)]">Welcome to</p>
                    <p className="text-6xl font-medium text-[#E1B230] font-[family-name:var(--font-geist-mono)] mt-4">LoL WarmUp</p>
                    <p className="text-sm font-medium text-[#8F8F8F] font-[family-name:var(--font-geist-mono)] text-center mt-4">LoL WarmUp is a practice tool designed to help you warming up your APMs before queuing into your ranked games.</p>
                </div>
                <div className="flex justify-between w-full">
                    
                </div>
            </div>
        </div>
    )
}