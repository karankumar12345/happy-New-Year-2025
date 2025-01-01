// import React from 'react';
import { Code2 } from 'lucide-react';

interface Goal {
  id: string;
  name: string;
  goal: string;
  timestamp: number;
}

interface GoalListProps {
  goals: Goal[];
}

export function GoalList({ goals }: GoalListProps) {
  return (
    <div className="space-y-4">
      {goals.map((goal) => (
        <div
          key={goal.id}
          className="bg-white bg-opacity-5 rounded-lg p-4 backdrop-blur-sm border border-purple-300 border-opacity-20"
        >
          <div className="flex items-center gap-2 mb-2">
            <Code2 className="w-5 h-5 text-purple-400" />
            <span className="text-purple-200 font-medium">{goal.name}</span>
          </div>
          <p className="text-white">{goal.goal}</p>
        </div>
      ))}
    </div>
  );
}