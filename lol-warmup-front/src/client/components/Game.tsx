'use client'

import { useEffect, useRef, useState } from "react"

interface IPosition {
    x: number,
    y: number
}

export default function Game({ size, setSize, warmUp, setWarmUp, score, setScore, time, setTime, qClick, gameMode, setGameMode, isGameModeSelected, setIsGameModeSelected, timer, setTimer }: { size: string, setSize: (size: string) => void, warmUp: boolean, setWarmUp: (warmUp: boolean) => void, score: number, setScore: (score: number) => void, time: number, setTime: (time: number) => void, qClick: boolean, gameMode: string, setGameMode: (gameMode: string) => void, isGameModeSelected: boolean, setIsGameModeSelected: (isGameModeSelected: boolean ) => void, timer: Boolean, setTimer: (timer: Boolean) => void }) {
    const [position, setPosition] = useState<IPosition>({x: window.screen.width / 2 - 50, y: window.screen.height / 2 - 50});
    const [qKey, setQKey] = useState<boolean>(false);

    useEffect(() => {
        if (!warmUp) return;

        function setObjPosition() {
            let xMax: number = window.screen.width - 40;
            let yMax: number = window.screen.height - 200;
            let pos: IPosition = {
                x: Math.floor(Math.random() * (xMax - 40 + 1) + 40),
                y: Math.floor(Math.random() * (yMax - 200 + 1) + 200)
            }

            setPosition(pos);
            let target = document.getElementById("target");
            target!.style!.position = "absolute";
            target!.style!.left = position.x+'px';
            target!.style!.top = position.y+'px';
        }

        setObjPosition();

        const handleKeyDown = (e: KeyboardEvent) => {
            setQKey(e.key === 'q' || e.key === 'a');
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        }
    }, [warmUp]);

    function handleTargetClick() {
        if (qClick && !qKey) {
            return;
        }

        let xMax: number = window.screen.width - 40;
        let yMax: number = window.screen.height - 250;
        let pos: IPosition = {
            x: Math.floor(Math.random() * (xMax - 40 + 1) + 40),
            y: Math.floor(Math.random() * (yMax - 250 + 1) + 250)
        }

        setPosition(pos);
        let target = document.getElementById("target");
        target!.style!.position = "absolute";
        target!.style!.left = position.x+'px';
        target!.style!.top = position.y+'px';

        setScore(score + 1);

        if (qKey) {
            setQKey(false);
        }
    }

    function formatTimeInSecondsAndMinutes(time: number) {
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    function handleGameModeSelection(mode: string) {
        setGameMode(mode);
        setIsGameModeSelected(false);
        setTime(parseInt(mode) + 3);
        setTimer(true);
    }

    useEffect(() => {
        const gameTimer = setInterval(() => {
            setTime(time - 1);
            if (time === 0) {
                setWarmUp(false);
                setGameMode('0');
            }
        }, 1000);
        return () => clearInterval(gameTimer);
    }, [time]);

    if (warmUp && gameMode !== '0' && !isGameModeSelected) {
        return <div className="min-w-full min-h-screen">
            <button id="target" 
                onClick={handleTargetClick} 
                className="absolute rounded-full z-10" 
                style={{
                    position: 'absolute',
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    width: qClick ? `calc(${size} + 64px)` : size,
                    height: qClick ? `calc(${size} + 64px)` : size,
                    border: qClick ? (qKey ? '2px solid lightgreen' : '2px solid lightblue') : 'none',
                }}>
                <div className="absolute rounded-full"
                    style={{
                        left: qClick ? '32px' : '0',
                        top: qClick ? '32px' : '0',
                        width: size,
                        height: size,
                        border: '5px solid red'
                    }}>
                </div>
            </button>
            {/* <button id="target" onClick={handleTargetClick} className="absolute rounded-full border-2 z-10" style={{left: `${position.x}px`, top: `${position.y}px`, border: '5px solid red', width: size, height: size}}>
            </button> */}
            <div className="absolute top-0 left-0 font-[family-name:var(--font-geist-mono)] w-full h-full flex items-center justify-center">
                <div className="opacity-60">
                    <h1>Hits: {score}</h1>
                    <h1>{formatTimeInSecondsAndMinutes(time)}</h1>
                </div>
            </div>
        </div>
    } else if (isGameModeSelected) {
        return (
            <div className="min-w-full min-h-screen flex items-center justify-center">
                <div className="flex flex-col items-center justify-center w-[40%] h-[60%] font-[family-name:var(--font-geist-mono)] bg-signBackground rounded-xl p-10">
                    <div className="flex flex-row items-center justify-center w-full">
                        <h1 className="text-2xl font-medium">Select your game mode</h1>
                    </div>
                    <div className="flex flex-row items-center justify-between w-[60%] mt-10">
                        <button onClick={() => handleGameModeSelection('30')} className="w-[100px] h-[100px] bg-[#E1B230] hover:bg-[#E1B230]/80 rounded-xl p-2 transition-all duration-200 ease">30s</button>
                        <button onClick={() => handleGameModeSelection('60')} className="w-[100px] h-[100px] bg-[#E1B230] hover:bg-[#E1B230]/80 rounded-xl p-2 transition-all duration-200 ease">60s</button>
                        <button onClick={() => handleGameModeSelection('120')} className="w-[100px] h-[100px] bg-[#E1B230] hover:bg-[#E1B230]/80 rounded-xl p-2 transition-all duration-200 ease">120s</button>
                    </div>
                    <div className="pt-10 cursor-pointer text-[#8F8F8F] hover:text-[white]/80 transition-all duration-200 ease" onClick={() => setIsGameModeSelected(false)}>Close</div>
                </div>
            </div>
        )
    }
}