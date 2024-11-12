'use client'

import { useEffect, useRef, useState } from "react"

interface IPosition {
    x: number,
    y: number
}

export default function Game({ size, setSize, warmUp, score, setScore, time, setTime, qClick }: { size: string, setSize: (size: string) => void, warmUp: boolean, score: number, setScore: (score: number) => void, time: number, setTime: (time: number) => void, qClick: boolean }) {
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

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(time + 1);
        }, 1000);
        return () => clearInterval(timer);
    }, [time]);

    return (
        warmUp === true && <div className="min-w-full min-h-screen">
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
    )
}