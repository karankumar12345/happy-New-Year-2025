
import { InputProps } from './types';
// import { InputProps } from './types';

export function FormInput({ name, value, onChange, placeholder }: InputProps) {
  return (
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required
      className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-10 border border-purple-300 border-opacity-20 text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
    />
  );
}