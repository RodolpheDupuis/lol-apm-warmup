'use client'

import { useEffect, useRef, useState } from "react"

interface IPosition {
    x: number,
    y: number
}

export default function Game({ size, setSize }: { size: string, setSize: (size: string) => void }) {
    const [position, setPosition] = useState<IPosition>({x: window.screen.width / 2 - 50, y: window.screen.height / 2 - 50});

    useEffect(() => {
        function setObjPosition() {
            let xMax: number = window.screen.width - 40;
            let yMax: number = window.screen.height - 200;
            let pos: IPosition = {
                x: Math.floor(Math.random() * (xMax - 40 + 1) + 40),
                y: Math.floor(Math.random() * (yMax - 200 + 1) + 200)
            }

            setPosition(pos);
            let target = document.getElementById("target");
            target!.style.position = "absolute";
            target!.style.left = position.x+'px';
            target!.style.top = position.y+'px';
        }

        setObjPosition();
    }, []);

    function handleTargetClick() {
        let xMax: number = window.screen.width - 40;
        let yMax: number = window.screen.height - 250;
        let pos: IPosition = {
            x: Math.floor(Math.random() * (xMax - 40 + 1) + 40),
            y: Math.floor(Math.random() * (yMax - 250 + 1) + 250)
        }

        setPosition(pos);
        let target = document.getElementById("target");
        target!.style.position = "absolute";
        target!.style.left = position.x+'px';
        target!.style.top = position.y+'px';
    }

    return (
        <div className="min-w-full min-h-screen">
            <button id="target" onClick={handleTargetClick} className="absolute rounded-full border-2" style={{left: `${position.x}px`, top: `${position.y}px`, border: '5px solid red', width: size, height: size}}>
            </button>
        </div>
    )
}