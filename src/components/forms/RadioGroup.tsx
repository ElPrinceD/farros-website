import React from 'react';
import clsx from 'clsx';

export interface RadioOption {
  value: string;
  label: string;
  description?: string;
  disabled?: boolean;
}

export interface RadioGroupProps {
  name: string;
  options: RadioOption[];
  value: string;
  onChange: (value: string) => void;
  label?: string;
  error?: string;
  helperText?: string;
  orientation?: 'horizontal' | 'vertical';
  className?: string;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  name,
  options,
  value,
  onChange,
  label,
  error,
  helperText,
  orientation = 'vertical',
  className
}) => {
  const handleChange = (optionValue: string) => {
    onChange(optionValue);
  };
  
  const containerClasses = clsx(
    'space-y-2',
    orientation === 'horizontal' && 'flex flex-wrap gap-4 space-y-0',
    className
  );
  
  return (
    <div>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-3">
          {label}
        </label>
      )}
      
      <div className={containerClasses}>
        {options.map((option) => (
          <label
            key={option.value}
            className={clsx(
              'flex items-start space-x-3 cursor-pointer',
              option.disabled && 'opacity-50 cursor-not-allowed',
              orientation === 'horizontal' && 'flex-1 min-w-0'
            )}
          >
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={() => handleChange(option.value)}
              disabled={option.disabled}
              className="mt-1 h-4 w-4 text-fh-red border-gray-300 focus:ring-fh-red"
            />
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-gray-900">
                {option.label}
              </div>
              {option.description && (
                <div className="text-sm text-gray-500">
                  {option.description}
                </div>
              )}
            </div>
          </label>
        ))}
      </div>
      
      {error && (
        <p className="mt-2 text-sm text-red-600">{error}</p>
      )}
      
      {helperText && !error && (
        <p className="mt-2 text-sm text-gray-500">{helperText}</p>
      )}
    </div>
  );
};

export default RadioGroup;
