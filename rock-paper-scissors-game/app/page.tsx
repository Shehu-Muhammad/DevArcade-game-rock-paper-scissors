'use client';

import Choices, { options, RPS } from '@/components/Choices';
import CPUChoice from '@/components/CpuChoice';
import Countdown from '@/components/Countdown';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  // State
  const [canChoose, setCanChoose] = useState(false);
  const [playerChoice, setPlayerChoice] = useState<RPS | null>(null);
  const [cpuChoice, setCpuChoice] = useState<RPS | null>(null);
  const [showCountdown, setShowCountdown] = useState(false);
  const [runId, setRunId] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  // Reset everything for a new round
  const reset = () => {
    setPlayerChoice(null);
    setCpuChoice(null);
    setCanChoose(false);
    setSubmitted(false);
  };

  // Restart countdown and reset state
  const restartCountdown = () => {
    setRunId((prev) => prev + 1);
    reset();
    setShowCountdown(true);
  };

  // Generate CPU choice
  const generateCPU = () => {
    const randomIndex = Math.floor(Math.random() * options.length);
    setCpuChoice(options[randomIndex].value);
  };

  const handleSubmit = () => {
    if (!playerChoice) return;
    generateCPU(); // now CPU picks only when player presses submit
    setSubmitted(true); // disables radio buttons and submit button
  };

  // Handle submitting the player's choice
  const submitChoice = () => {
    if (!playerChoice || !cpuChoice) return;
    // winner calculation could go here
    // For now we just leave cpuChoice and playerChoice in state
    if (playerChoice === cpuChoice) return "It's a tie!";
    if (
      (playerChoice === 'rock' && cpuChoice === 'scissors') ||
      (playerChoice === 'paper' && cpuChoice === 'rock') ||
      (playerChoice === 'scissors' && cpuChoice === 'paper')
    ) {
      return 'You win!';
    }
    return 'CPU wins!';
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
            submitted ? restartCountdown() : setShowCountdown(true);
          }}
        >
          {submitted ? 'Play Again' : 'Start Game'}
        </button>

        {showCountdown && (
          <div className='mt-8 rounded p-4 text-center'>
            <Countdown
              key={runId}
              onFinish={() => {
                setCanChoose(true);
                setShowCountdown(false);
              }}
            />
          </div>
        )}

        <div className='mt-8'>
          <Choices
            options={options}
            value={playerChoice}
            setValue={setPlayerChoice}
            disabled={!canChoose || submitted} // disable until countdown ends or after submit
          />

          <button
            className='mt-4 rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700 disabled:opacity-50'
            disabled={!canChoose || !playerChoice || submitted}
            onClick={handleSubmit}
          >
            Submit Choice
          </button>

          <CPUChoice cpuChoice={cpuChoice} submitted={submitted} />
          <p className='mt-4 text-xl font-bold'>
            {submitted && submitChoice()}
          </p>
        </div>

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
