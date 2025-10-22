import React from 'react';
import { motion, MotionProps } from 'framer-motion';
import clsx from 'clsx';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'outlined' | 'flat';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  hover?: boolean;
  animate?: boolean;
  motionProps?: MotionProps;
}

const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  padding = 'md',
  hover = false,
  animate = false,
  motionProps,
  className,
  ...props
}) => {
  const baseClasses = 'bg-white rounded-xl overflow-hidden transition-all duration-200';
  
  const variantClasses = {
    default: 'shadow-lg',
    elevated: 'shadow-xl hover:shadow-2xl',
    outlined: 'border border-gray-200 shadow-none',
    flat: 'shadow-none'
  };
  
  const paddingClasses = {
    none: '',
    sm: 'p-3',
    md: 'p-4',
    lg: 'p-6'
  };
  
  const hoverClasses = hover ? 'hover:shadow-xl hover:-translate-y-1' : '';
  
  const classes = clsx(
    baseClasses,
    variantClasses[variant],
    paddingClasses[padding],
    hoverClasses,
    className
  );
  
  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={hover ? { y: -5 } : undefined}
        transition={{ duration: 0.3 }}
        className={classes}
        {...motionProps}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
  
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Card;
