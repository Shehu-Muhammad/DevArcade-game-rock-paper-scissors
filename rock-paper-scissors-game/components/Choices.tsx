import { GiRock, GiPaper, GiScissors } from 'react-icons/gi';
import type { ComponentType } from 'react';

export type RPS = 'rock' | 'paper' | 'scissors';

export type Option = {
  value: RPS;
  label: string;
  Icon: ComponentType<{ size?: number }>;
};

export const options: Option[] = [
  { value: 'rock', label: 'Rock', Icon: GiRock },
  { value: 'paper', label: 'Paper', Icon: GiPaper },
  { value: 'scissors', label: 'Scissors', Icon: GiScissors },
];

type ChoicesProps = {
  options: Option[];
  value: RPS | null;
  setValue: (value: RPS) => void;
  disabled?: boolean;
};
const Choices = ({
  options,
  value,
  setValue,
  disabled = false,
}: ChoicesProps) => {
  return (
    <div className='flex flex-col gap-2'>
      {options.map(({ value: optionValue, label, Icon }) => {
        const isSelected = value === optionValue;

        return (
          <label
            key={optionValue}
            className={`flex items-center gap-2 cursor-pointer p-2 rounded border ${
              isSelected ? 'border-black bg-gray-100' : 'border-gray-300'
            }`}
          >
            <input
              type='radio'
              name='rps'
              checked={isSelected}
              onChange={() => setValue(optionValue)}
              disabled={disabled}
            />
            <Icon size={32} />
            <span>{label}</span>
          </label>
        );
      })}
    </div>
  );
};

export default Choices;
