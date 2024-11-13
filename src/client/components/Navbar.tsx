'use client'

import { RotateCcw, Settings, User } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

export default function Navbar(
    { size, setSize, warmUp, setWarmUp, timer, setTimer, score, setScore, time, setTime, qClick, setQClick, setIsSignedIn }: 
    { 
        size: string,
        setSize: (size: string) => void,
        warmUp: boolean,
        setWarmUp: (warmUp: boolean) => void,
        timer: Boolean,
        setTimer: (timer: Boolean) => void,
        score: number,
        setScore: (score: number) => void,
        time: number,
        setTime: (time: number) => void,
        qClick: boolean,
        setQClick: (qClick: boolean) => void,
        setIsSignedIn: (isSignedIn: boolean) => void
    }) {
    const [visible, setVisible] = useState<Boolean>(false);
    const [isSettingsOpen, setIsSettingsOpen] = useState<Boolean>(false);
    const [isUserOpen, setIsUserOpen] = useState<Boolean>(false);

    function resetGame() {
        setScore(0);
        setTime(0);
        setWarmUp(false);
        setTimer(false);
    }

    return (
        <div className="p-3 min-w-full h-[100px] absolute flex z-20">
            <div className=" bg-[#041e36] h-full rounded-full flex justify-between items-center w-full p-3 hover:shadow-nav"
                style={{transition: 'box-shadow 300ms ease'}}
            >
                <div className=" ml-4 font-[family-name:var(--font-geist-mono)]">
                    <button onClick={() => setIsUserOpen(!isUserOpen)} className="flex bg-[#052847] rounded-full p-2">
                        <div className="flex">
                            <User />
                        </div>
                    </button>
                    {isUserOpen && (
                        <div className="absolute top-full w-48 bg-[#041e36] divide-gray-600 mt-[0rem] rounded-lg shadow-lg py-1 z-10 cursor-pointer">
                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                <li>
                                    <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#052847]  dark:hover:text-white">View profile</a>
                                </li>
                                <li>
                                    <a onClick={() => setIsSignedIn(false)} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#052847]  dark:hover:text-white">Sign out</a>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
                <div className="font-[family-name:var(--font-geist-mono)] text-xl flex items-center justify-center">
                    <button
                        onClick={() => setTimer(true)} disabled={timer === true || warmUp === true}
                        className="p-4 rounded-full bg-[#9e761c] disabled:opacity-50"
                        style={{transition: 'opacity 300ms ease'}}
                    >
                        WARM UP
                    </button>
                    <button onClick={resetGame} className="ml-4">
                        <RotateCcw size={30} />
                    </button>
                    <div className="ml-4 relative">
                        <button onClick={() => setIsSettingsOpen(!isSettingsOpen)}>
                            <Settings size={30} />
                        </button>
                        {isSettingsOpen && (
                            <div className="absolute top-full w-48 bg-[#041e36] divide-gray-600 mt-[2rem] rounded-lg shadow-lg py-1 z-10 ml-[-3rem]">
                                <div className="flex items-center px-4 py-2 text-sm hover:bg-[#052847] ">
                                    <input
                                        type="checkbox"
                                        className="mr-2"
                                        checked={qClick}
                                        onChange={(e) => {
                                            setQClick(!qClick);
                                        }}
                                    />
                                    <span>Q click mode</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="mr-4 font-[family-name:var(--font-geist-mono)]">
                    <button onClick={() => setVisible(!visible)} id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar">Target size</button>
                    {visible && <div id="dropdownNavbar" className="z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-[#041e36] dark:divide-gray-600 absolute mt-[3rem] right-0 mr-4 cursor-pointer">
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                        <li>
                            <a onClick={() => setSize('1rem')} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#052847]  dark:hover:text-white">Small</a>
                        </li>
                        <li>
                            <a onClick={() => setSize('3rem')} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#052847]  dark:hover:text-white">Medium (default)</a>
                        </li>
                            <li>
                                <a onClick={() => setSize('5rem')} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#052847]  dark:hover:text-white">Large</a>
                            </li>
                        </ul>
                    </div>}
                </div>
            </div>
        </div>
    )
}