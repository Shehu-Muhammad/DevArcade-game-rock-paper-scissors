import { useEffect, useState } from 'react';

export default function RPSCountdown() {
  const words = ['Rock', 'Paper', 'Scissors', 'Shoot!'];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index === words.length - 1) return;

    const timeout = setTimeout(() => {
      setIndex(index + 1);
    }, 700);

    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <div style={{ fontSize: '4rem', fontWeight: 'bold' }} key={words[index]}>
      {words[index]}
    </div>
  );
}
