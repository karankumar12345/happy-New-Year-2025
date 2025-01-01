import { ChangeEvent } from 'react';

export interface InputProps {
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder: string;
}

export interface FormData {
  name: string;
  goal: string;
}