import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface Goal {
  id: string;
  name: string;
  goal: string;
  timestamp: number;
}

interface GoalFormProps {
  onSubmit: (goal: Goal) => void;
}

export function GoalForm({ onSubmit }: GoalFormProps) {
  const [name, setName] = useState('');
  const [goal, setGoal] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !goal.trim()) return;

    const newGoal: Goal = {
      id: crypto.randomUUID(),
      name: name.trim(),
      goal: goal.trim(),
      timestamp: Date.now(),
    };

    onSubmit(newGoal);
    setName('');
    setGoal('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-10 border border-purple-300 border-opacity-20 text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        />
      </div>
      <div className="flex">
        <input
          type="text"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          placeholder="Your 2025 coding goal..."
          className="flex-1 px-4 py-2 rounded-l-lg bg-white bg-opacity-10 border border-purple-300 border-opacity-20 text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-purple-600 rounded-r-lg hover:bg-purple-700 transition-colors"
        >
          <Send className="w-5 h-5 text-white" />
        </button>
      </div>
    </form>
  );
}