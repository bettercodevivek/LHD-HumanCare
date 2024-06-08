import React, { useState, useEffect } from 'react';

const Counter = ({ targetNumber, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(targetNumber, 10);
    if (start === end) return;

    const totalDuration = parseInt(duration, 10);
    const incrementTime = (totalDuration / end) * 1000;

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [targetNumber, duration]);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-5xl font-bold text-blue-500">{count}</div>
    </div>
  );
};

export default Counter;
