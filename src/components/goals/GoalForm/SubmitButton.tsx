import React from 'react';
import { Send } from 'lucide-react';

export function SubmitButton() {
  return (
    <button
      type="submit"
      className="w-full px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center gap-2 text-white font-medium"
    >
      <span>Share Goal</span>
      <Send className="w-4 h-4" />
    </button>
  );
}