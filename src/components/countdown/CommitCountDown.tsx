import React, { useState, useEffect } from 'react';
import { GitBranch } from 'lucide-react';

export function CommitCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [commitMessage, setCommitMessage] = useState(
    'feat: 🚀 Starting 2025 with big goals!'
  );

  const [countdownFinished, setCountdownFinished] = useState(false);

  useEffect(() => {
    const targetDate = new Date('2025-12-31T23:59:59'); // Countdown to the end of 2025

    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      // Check if the countdown is over
      if (difference <= 0) {
        setCountdownFinished(true);
        clearInterval(timer); // Stop the countdown once it finishes
      }
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  const commitMessages = [
    'feat: 🚀 Starting 2025 with big goals!',
    'refactor: A new year, a cleaner codebase!',
    'docs: 📚 Documenting my 2025 journey',
    'style: ✨ New year, new code style'
  ];

  return (
    <div className="bg-gradient-to-r from-gray-900 to-purple-900 rounded-xl p-6 shadow-xl">
      <div className="flex items-center gap-3 mb-6">
        <GitBranch className="w-6 h-6 text-green-400" />
        <h2 className="text-xl font-semibold text-white">Commit to 2025 Goals</h2>
      </div>
      
      <div className="grid grid-cols-4 gap-4 mb-6">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="text-center">
            <div className="bg-black bg-opacity-50 rounded-lg p-3">
              <div className="text-3xl font-bold text-white">{value}</div>
              <div className="text-xs uppercase tracking-wider text-gray-400">{unit}</div>
            </div>
          </div>
        ))}
      </div>

      {/* If countdown finished, show a message */}
      {countdownFinished && (
        <div className="text-center mt-6 text-xl font-semibold text-white">
          <p>🎉 2025 is here! The journey has just begun. Time to achieve your goals! 🚀</p>
        </div>
      )}

      <div className="space-y-3 mt-6">
        <select
          value={commitMessage}
          onChange={(e) => setCommitMessage(e.target.value)}
          className="w-full px-4 py-2 rounded-lg bg-black bg-opacity-50 text-white border border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          {commitMessages.map((msg) => (
            <option key={msg} value={msg}>{msg}</option>
          ))}
        </select>
      </div>

      {/* Display the selected commit message */}
      <div className="text-center mt-6 text-lg text-white">
        <p>Selected Commit Message: <strong>{commitMessage}</strong></p>
      </div>
    </div>
  );
}
