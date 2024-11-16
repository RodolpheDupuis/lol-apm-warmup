'use client'

import { useEffect, useState } from "react";

export default function Timer({ warmUp, setWarmUp, timer, setTimer }: { warmUp: boolean, setWarmUp: (warmUp: boolean) => void, timer: Boolean, setTimer: (timer: Boolean) => void }) {

    const [count, setCount] = useState(3);

    useEffect(() => {
        const timer = count > 0 && setInterval(() => {
            setCount(count - 1);
        }, 1000);

        if (count === 0) {
            setTimer(false);
            setWarmUp(true);
        }

        return () => {
            if (timer) clearInterval(timer);
        };
    }, [count]);

    return (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <h1 className="text-9xl font-bold font-[family-name:var(--font-geist-mono)]">{count}</h1>
        </div>
    )
}