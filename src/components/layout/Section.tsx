import React from 'react';
import clsx from 'clsx';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  background?: 'white' | 'gray' | 'charcoal' | 'cream' | 'transparent';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  fullHeight?: boolean;
}

const Section: React.FC<SectionProps> = ({
  children,
  background = 'white',
  padding = 'lg',
  fullHeight = false,
  className,
  ...props
}) => {
  const backgroundClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    charcoal: 'bg-fh-charcoal text-white',
    cream: 'bg-fh-cream',
    transparent: 'bg-transparent'
  };
  
  const paddingClasses = {
    none: '',
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16',
    xl: 'py-24'
  };
  
  const classes = clsx(
    backgroundClasses[background],
    paddingClasses[padding],
    fullHeight && 'min-h-screen',
    className
  );
  
  return (
    <section className={classes} {...props}>
      {children}
    </section>
  );
};

export default Section;
