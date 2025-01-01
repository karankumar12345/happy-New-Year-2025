import { useState, FormEvent, ChangeEvent } from 'react';
// import { CodeGoal } from '../../types';
import { FormData } from './types';
import { CodeGoal } from '../../../types';

export function useGoalForm(onSubmit: (goal: CodeGoal) => void) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    goal: ''
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    const newGoal: CodeGoal = {
      id: crypto.randomUUID(),
      name: formData.name.trim(),
      goal: formData.goal.trim(),
      timestamp: Date.now()
    };

    onSubmit(newGoal);
    setFormData({ name: '', goal: '' });
  };

  return {
    formData,
    handleSubmit,
    handleInputChange
  };
}