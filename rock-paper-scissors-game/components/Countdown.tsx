import { useEffect, useState } from 'react';

type RPSCountdownProps = {
  onFinish?: () => void; // called when countdown reaches the end
  keyId?: number; // change keyId to restart countdown
};

export default function RPSCountdown({ onFinish, keyId }: RPSCountdownProps) {
  const words = ['Rock', 'Paper', 'Scissors', 'Shoot!'];
  const [index, setIndex] = useState(0);

  // Reset countdown if keyId changes (e.g., when restarting)
  useEffect(() => {
    setIndex(0);
  }, [keyId]);

  useEffect(() => {
    if (index >= words.length) {
      onFinish?.(); // notify parent when countdown ends
      return;
    }

    const timeout = setTimeout(() => {
      setIndex(index + 1);
    }, 700);

    return () => clearTimeout(timeout);
  }, [index, onFinish]);

  if (index >= words.length) return null; // hide after countdown ends

  return (
    <div
      style={{ fontSize: '4rem', fontWeight: 'bold', textAlign: 'center' }}
      key={words[index]}
    >
      {words[index]}
    </div>
  );
}
