export interface CodeGoal {
    id: string;
    name: string;
    goal: string;
    timestamp: number;
  }
  
  export interface Achievement {
    id: string;
    name: string;
    githubContributions?: number;
    certifications?: string[];
    projects?: string[];
    timestamp: number;
  }
  
  export interface DailyChallenge {
    day: number;
    title: string;
    description: string;
    difficulty: 'easy' | 'medium' | 'hard';
    type: 'dsa' | 'bug-hunt' | 'creative';
    completed: boolean;
  }