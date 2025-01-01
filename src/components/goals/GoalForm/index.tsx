import React from 'react';
// import { CodeGoal } from '../../../types';
import { FormInput } from './FormInput';
import { FormTextarea } from './FormTextarea';
import { useGoalForm } from './useGoalForm';
import { SubmitButton } from './SubmitButton';
import { CodeGoal } from '../../../types';
// import { SubmitButton } from './SubmitButton';
// import { useGoalForm } from './useGoalForm';

interface GoalFormProps {
  onSubmit: (goal: CodeGoal) => void;
}

export function GoalForm({ onSubmit }: GoalFormProps) {
  const { formData, handleSubmit, handleInputChange } = useGoalForm(onSubmit);

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <FormInput
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        placeholder="Your name"
      />
      <FormTextarea
        name="goal"
        value={formData.goal}
        onChange={handleInputChange}
        placeholder="Share your coding goals for 2025..."
      />
      <SubmitButton />
    </form>
  );
}