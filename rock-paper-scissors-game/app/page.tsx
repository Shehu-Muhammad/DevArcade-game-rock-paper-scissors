'use client';

import Choices, { options, RPS } from '@/components/Choices';
import CPUChoice from '@/components/CpuChoice';
import Countdown from '@/components/Countdown';
import Image from 'next/image';
import { useState, useCallback } from 'react';
import { on } from 'events';

export default function Home() {
  // State
  const [canChoose, setCanChoose] = useState(false);
  const [playerChoice, setPlayerChoice] = useState<RPS | null>(null);
  const [cpuChoice, setCpuChoice] = useState<RPS | null>(null);
  const [showCountdown, setShowCountdown] = useState(false);
  const [runId, setRunId] = useState(0);
  const [submitted, setSubmitted] = useState(false);

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
    if (!cpuChoice) generateCPU();
    setSubmitted(true);
  };

  const onPlayClick = useCallback(() => {
    submitted ? restartCountdown() : setShowCountdown(true);
  }, [submitted]);

  // Handle submitting the player's choice
  const submitChoice = () => {
    if (!playerChoice || !cpuChoice) return;
    // winner calculation could go here
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

        <div className='flex flex-col items-center w-full mt-8 gap-10'>
          {/* TOP: Play / Play Again button */}
          <button
            className='rounded-lg bg-blue-600 px-8 py-3 text-white hover:bg-blue-700'
            onClick={() => onPlayClick()}
          >
            {submitted ? 'Play Again' : 'Start Game'}
          </button>

          {/* MAIN GAME AREA */}
          <div className='flex w-full gap-12 lg:max-w-4xl'>
            {/* LEFT: Player choices + Submit */}
            <div className='flex flex-col items-start gap-4 flex-1'>
              <Choices
                options={options}
                value={playerChoice}
                setValue={setPlayerChoice}
                disabled={!canChoose || submitted}
              />

              <button
                className='rounded-lg bg-green-600 px-6 py-3 text-white hover:bg-green-700 disabled:opacity-50'
                disabled={!canChoose || !playerChoice || submitted}
                onClick={handleSubmit}
              >
                Submit Choice
              </button>
            </div>

            {/* RIGHT: Countdown / CPU choice + Result */}
            <div className='flex flex-col justify-center gap-6 flex-1 h-full'>
              {showCountdown && !submitted ? (
                <Countdown key={runId} onFinish={() => setCanChoose(true)} />
              ) : (
                <>
                  <CPUChoice cpuChoice={cpuChoice} submitted={submitted} />
                  <p className='text-3xl font-bold text-center'>
                    {submitted && submitChoice()}
                  </p>
                </>
              )}
            </div>
          </div>
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
