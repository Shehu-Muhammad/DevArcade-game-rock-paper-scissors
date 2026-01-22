'use client';
import Countdown from '@/components/Countdown';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [showCountdown, setShowCountdown] = useState(false);

  const startCountdown = () => {
    setShowCountdown(true);
  };

  const [runId, setRunId] = useState(0);

  const restartCountdown = () => {
    setRunId((prev) => prev + 1);
  };

  return (
    <div className='flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black'>
      <main className='flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start'>
        <h1 className='text-5xl font-bold text-zinc-900 dark:text-zinc-100 sm:text-6xl'>
          Rock Paper Scissors
        </h1>
        <div className='relative h-64 w-64 lg:ml-24 sm:h-96 sm:w-96 m-4 border-2 border-solid'>
          <Image
            src='/rock-paper-scissors-illustration.svg'
            alt='Rock Paper Scissors Illustration'
            fill
            style={{ objectFit: 'contain' }}
          />
        </div>
        <div className='text-center text-zinc-600 dark:text-zinc-400 sm:text-left'>
          <p className='mb-4 text-lg'>
            Welcome to the Rock Paper Scissors Game! Challenge yourself and see
            how many rounds you can win against the computer.
          </p>
          <p className='text-lg'>
            Click the button below to start playing and may the best hand win!
          </p>
        </div>
        <button
          className='mt-8 rounded bg-blue-600 px-6 py-3 text-white hover:bg-blue-700'
          onClick={() => {
            showCountdown ? restartCountdown() : startCountdown();
          }}
        >
          {showCountdown ? 'Play Again' : 'Start Game'}
        </button>

        {showCountdown && (
          <div className='mt-8 rounded p-4 text-center'>
            <Countdown key={runId} />
          </div>
        )}

        {showCountdown && (
          <button
            className='mt-8 rounded bg-blue-600 px-6 py-3 text-white hover:bg-blue-700'
            onClick={() => setShowCountdown(false)}
          >
            Hide Countdown
          </button>
        )}

        <div className='text-center text-zinc-600 dark:text-zinc-400 sm:text-left m-4'>
          <p className='mb-4 text-lg'>
            Instructions: Use the buttons to select Rock, Paper, or Scissors.
            The computer will randomly choose its hand. The winner is determined
            by the classic rules: Rock crushes Scissors, Scissors cuts Paper,
            and Paper covers Rock. Good luck!
          </p>
        </div>
      </main>
    </div>
  );
}
