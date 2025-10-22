import React from 'react';
import Input from '../ui/Input';
import clsx from 'clsx';

export interface FormFieldProps {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'tel' | 'password' | 'number' | 'textarea';
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  helperText?: string;
  required?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  helperText,
  required = false,
  disabled = false,
  icon,
  iconPosition = 'left',
  className
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };
  
  if (type === 'textarea') {
    return (
      <div className={className}>
        <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          disabled={disabled}
          rows={4}
          className={clsx(
            'w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-fh-red focus:border-transparent transition-all duration-200 resize-none',
            error && 'border-red-500 focus:ring-red-500 focus:border-red-500',
            disabled && 'bg-gray-50 cursor-not-allowed'
          )}
        />
        {error && (
          <p className="mt-1 text-sm text-red-600">{error}</p>
        )}
        {helperText && !error && (
          <p className="mt-1 text-sm text-gray-500">{helperText}</p>
        )}
      </div>
    );
  }
  
  return (
    <Input
      label={label}
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      error={error}
      helperText={helperText}
      required={required}
      disabled={disabled}
      icon={icon}
      iconPosition={iconPosition}
      className={className}
    />
  );
};

export default FormField;
