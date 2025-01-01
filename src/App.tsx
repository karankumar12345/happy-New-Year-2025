import { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';
import { CodeGoal } from './types';
import { GoalForm } from './components/goals/GoalForm';
import { GoalWall } from './components/goals/GoalWall';
import { CodeFireworks } from './components/fireworks/CodeFireWorks';
import { CommitCountdown } from './components/countdown/CommitCountDown';

function App() {
  const [goals, setGoals] = useState<CodeGoal[]>([]);
  const [currentName, setCurrentName] = useState('');

  // Load goals from localStorage when the component mounts
  useEffect(() => {
    const storedGoals = localStorage.getItem('goals');
    if (storedGoals) {
      setGoals(JSON.parse(storedGoals));
    }
  }, []);

  // Handle goal submission
  const handleGoalSubmit = (goal: CodeGoal) => {
    // Add new goal to the state
    setGoals((prev) => [goal, ...prev]);

    // Update localStorage with the new goal list
    const updatedGoals = [goal, ...goals];
    localStorage.setItem('goals', JSON.stringify(updatedGoals));

    // Set the current name for fireworks display
    setCurrentName(goal.name);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-violet-900">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-8 h-8 text-yellow-400" />
            <h1 className="text-4xl font-bold text-white">Code Into 2025</h1>
            <Sparkles className="w-8 h-8 text-yellow-400" />
          </div>
          <CommitCountdown />
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          <div className="bg-black bg-opacity-30 rounded-xl p-8 backdrop-blur-lg">
            <h2 className="text-2xl font-semibold text-white mb-6">Share Your 2025 Code Goals</h2>
            <GoalForm onSubmit={handleGoalSubmit} />
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">Code Wall of Dreams</h2>
            <GoalWall goals={goals} setGoals={setGoals} />
          </div>
        </div>
      </div>

      <CodeFireworks name={currentName} />
    </div>
  );
}

export default App;
