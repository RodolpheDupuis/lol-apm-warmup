'use client';

import { LockKeyhole, MoveLeft, User } from "lucide-react";
import RippleButton from "./ui/RippleButton";
import { useState } from "react";

export default function SignIn({ setIsSignedIn }: { setIsSignedIn: (isSignedIn: boolean) => void }) {
    const [isSignIn, setIsSignIn] = useState<boolean>(true);

    return (
        <div className="flex flex-col items-center justify-center w-full h-screen">
            <div id="sign-in-container" className={`flex flex-col ${isSignIn ? 'w-[45%] h-[70%]' : 'w-[30%] h-[55%]'} rounded-xl bg-signBackground shadow-sign transition-all duration-300 ease-in-out`}>
                {isSignIn && <>
                    <div className="flex flex-col items-center justify-center w-full mt-4">
                        <p className="text-2xl font-medium text-[#8F8F8F] font-[family-name:var(--font-geist-mono)]">Welcome to</p>
                        <p className="text-6xl font-medium text-[#E1B230] font-[family-name:var(--font-geist-mono)] mt-4">LoL WarmUp</p>
                        <p className="text-sm font-medium text-[#8F8F8F] font-[family-name:var(--font-geist-mono)] text-center mt-4">LoL WarmUp is a practice tool designed to help you warming up your APMs before queuing into your ranked games.</p>
                    </div>
                    <div className="flex justify-between w-full h-full mt-10 p-4">
                        <div className="flex flex-col h-full w-[45%] p-2 items-center">
                            <div className="text-base font-medium text-[#8F8F8F] font-[family-name:var(--font-geist-mono)]">Log in and join the ladder</div>
                            <div className="flex flex-col w-full mt-6">
                                <div className="flex w-full bg-[#171B21] rounded-md p-2 justify-center items-center">
                                    <User className="w-6 h-6 text-[#8F8F8F] ml-4" />
                                    <input type="text" id="username" placeholder="Username"
                                        className="w-full pl-6 py-2 bg-transparent text-[#8F8F8F] focus:outline-none placeholder:text-[#8F8F8F] font-[family-name:var(--font-geist-mono)]"
                                    />
                                </div>
                                <div className="flex w-full bg-[#171B21] rounded-md p-2 mt-4 justify-center items-center">
                                    <LockKeyhole className="w-6 h-6 text-[#8F8F8F] ml-4" />
                                    <input type="password" id="password" placeholder="Password"
                                        className="w-full pl-6 py-2 bg-transparent text-[#8F8F8F] focus:outline-none placeholder:text-[#8F8F8F] font-[family-name:var(--font-geist-mono)]"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col w-full justify-center mt-4">
                                <RippleButton onClick={() => setIsSignedIn(true)} className="w-full h-20 bg-[#E1B230] text-white rounded-md p-2 text-2xl font-medium font-[family-name:var(--font-geist-mono)] hover:bg-[#E1B230]/80 transition-all duration-300 ease">
                                    Enter
                                </RippleButton>
                                <div className="flex w-full justify-between mt-1">
                                    <button className="text-xs font-medium text-[#8F8F8F] font-[family-name:var(--font-geist-mono)] hover:text-white">Forgot password?</button>
                                    <button onClick={() => setIsSignIn(false)} className="text-xs font-medium text-[#8F8F8F] font-[family-name:var(--font-geist-mono)] hover:text-white">Register</button>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col w-[5%] h-[90%] p-2 items-center">
                            <div className="text-base font-medium text-[#8F8F8F] font-[family-name:var(--font-geist-mono)]">or</div>
                            <div className="border-2 border-[#12304F] rounded-md h-full w-1 mt-4"></div>
                        </div>
                        <div className="flex flex-col w-[45%] p-2 items-center">
                            <div className="text-base font-medium text-[#8F8F8F] font-[family-name:var(--font-geist-mono)]">Continue as a guest</div>
                            <RippleButton onClick={() => setIsSignedIn(true)} className=" mt-6 w-full h-20 bg-[#E1B230] text-white rounded-md p-2 text-2xl font-medium font-[family-name:var(--font-geist-mono)] border-none hover:bg-[#E1B230]/80 transition-all duration-300 ease">
                                Break your own records
                            </RippleButton>
                        </div>
                    </div>
                </>}
                {!isSignIn && <>
                    <div className="flex flex-col items-center justify-center w-full mt-4">
                        <p className="text-2xl font-medium text-[#8F8F8F] font-[family-name:var(--font-geist-mono)]">Welcome to</p>
                        <p className="text-6xl font-medium text-[#E1B230] font-[family-name:var(--font-geist-mono)] mt-4">LoL WarmUp</p>
                        <p className="text-sm font-medium text-[#8F8F8F] font-[family-name:var(--font-geist-mono)] text-center mt-4 p-4">LoL WarmUp is a practice tool designed to help you warming up your APMs before queuing into your ranked games.</p>
                    </div>
                    <div className="flex justify-center w-full h-full p-4">
                        <div className="flex flex-col h-full w-[45%] p-2 items-center">
                            <div className="flex flex-col w-full">
                                <div className="flex w-full bg-[#171B21] rounded-md p-2 justify-center items-center">
                                    <User className="w-6 h-6 text-[#8F8F8F] ml-4" />
                                    <input type="text" id="username" placeholder="Username"
                                        className="w-full pl-6 py-2 bg-transparent text-[#8F8F8F] focus:outline-none placeholder:text-[#8F8F8F] font-[family-name:var(--font-geist-mono)]"
                                    />
                                </div>
                                <div className="flex w-full bg-[#171B21] rounded-md p-2 mt-4 justify-center items-center">
                                    <LockKeyhole className="w-6 h-6 text-[#8F8F8F] ml-4" />
                                    <input type="password" id="password" placeholder="Password"
                                        className="w-full pl-6 py-2 bg-transparent text-[#8F8F8F] focus:outline-none placeholder:text-[#8F8F8F] font-[family-name:var(--font-geist-mono)]"
                                    />
                                </div>
                                <RippleButton className="w-full h-16 mt-4 bg-[#E1B230] text-white rounded-md p-2 text-2xl font-medium font-[family-name:var(--font-geist-mono)]">
                                    Sign up
                                </RippleButton>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-start w-full mb-4">
                        <MoveLeft id="back-button-icon" className="w-6 h-6 text-[#8F8F8F] ml-4" />
                        <button onClick={() => setIsSignIn(true)} className="text-xs font-medium text-[#8F8F8F] font-[family-name:var(--font-geist-mono)] hover:text-white ml-2">Go back</button>
                    </div>
                </>}
            </div>
        </div>
    )
}