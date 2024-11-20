'use client'

import Image from "next/image";
import Game from "@/client/components/Game";
import Navbar from "@/client/components/Navbar";
import Timer from "@/client/components/Timer";
import { useState } from "react";
import SignIn from "@/client/components/SignIn";

export default function Home() {
  const [size, setSize] = useState<string>('3rem');
  const [warmUp, setWarmUp] = useState<boolean>(false);
  const [timer, setTimer] = useState<Boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [time, setTime] = useState<number>(0);
  const [qClick, setQClick] = useState<boolean>(false);
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);
  const [gameMode, setGameMode] = useState<string>('0');
  const [isGameModeSelected, setIsGameModeSelected] = useState<boolean>(false);

  return (
    <div className="min-h-screen min-w-full">
      <main className="">
        {!isSignedIn && <SignIn setIsSignedIn={setIsSignedIn} />}
        {isSignedIn && <Navbar
          size={size}
          setSize={setSize}
          warmUp={warmUp}
          setWarmUp={setWarmUp}
          timer={timer}
          setTimer={setTimer}
          score={score}
          setScore={setScore}
          time={time}
          setTime={setTime}
          qClick={qClick}
          setQClick={setQClick}
          setIsSignedIn={setIsSignedIn}
          isGameModeSelected={isGameModeSelected}
          setIsGameModeSelected={setIsGameModeSelected}
        />}
        {isSignedIn && <Game
          size={size}
          setSize={setSize}
          warmUp={warmUp}
          setWarmUp={setWarmUp}
          score={score}
          setScore={setScore}
          time={time}
          setTime={setTime}
          qClick={qClick}
          gameMode={gameMode}
          setGameMode={setGameMode}
          isGameModeSelected={isGameModeSelected}
          setIsGameModeSelected={setIsGameModeSelected}
          timer={timer}
          setTimer={setTimer}
        />}
        {isSignedIn && timer && <Timer
          warmUp={warmUp}
          setWarmUp={setWarmUp}
          timer={timer}
          setTimer={setTimer}
        />}
        {/* <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              src/app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div> */}
      </main>
    </div>
  );
}
