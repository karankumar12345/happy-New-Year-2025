import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Star } from 'lucide-react';
import { CodeGoal } from '../../types';

interface GoalWallProps {
  goals: CodeGoal[];
  setGoals: React.Dispatch<React.SetStateAction<CodeGoal[]>>;
}

export function GoalWall({ goals, setGoals }: GoalWallProps) {
  const handleComplete = (id: string) => {
    // Remove the goal with the specified ID from the list
    const updatedGoals = goals.filter((goal) => goal.id !== id);

    // Update the state with the new list
    setGoals(updatedGoals);

    // Update localStorage to reflect the changes
    localStorage.setItem('goals', JSON.stringify(updatedGoals));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {goals.map((goal, index) => (
        <motion.div
          key={goal.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition-opacity" />
          <div className="relative bg-black bg-opacity-50 rounded-lg p-6 backdrop-blur-lg border border-purple-300 border-opacity-20">
            <div className="flex items-center gap-2 mb-3">
              <Code2 className="w-5 h-5 text-purple-400" />
              <span className="text-purple-200 font-medium">{goal.name}</span>
              <Star className="w-4 h-4 text-yellow-400 ml-auto" />
            </div>
            <p className="text-white text-lg">{goal.goal}</p>

            {/* "Complete" button */}
            <button
              onClick={() => handleComplete(goal.id)}
              className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
            >
              Complete
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
