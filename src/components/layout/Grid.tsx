import React from 'react';
import clsx from 'clsx';

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  cols?: 1 | 2 | 3 | 4 | 5 | 6;
  gap?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  responsive?: boolean;
  equalHeight?: boolean;
}

const Grid: React.FC<GridProps> = ({
  children,
  cols = 3,
  gap = 'md',
  responsive = true,
  equalHeight = false,
  className,
  ...props
}) => {
  const gapClasses = {
    none: '',
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-6',
    xl: 'gap-8'
  };
  
  const getGridCols = (cols: number) => {
    const gridCols = {
      1: 'grid-cols-1',
      2: 'grid-cols-1 md:grid-cols-2',
      3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
      4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
      5: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5',
      6: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6'
    };
    return gridCols[cols as keyof typeof gridCols];
  };
  
  const classes = clsx(
    'grid',
    responsive ? getGridCols(cols) : `grid-cols-${cols}`,
    gapClasses[gap],
    equalHeight && 'items-stretch',
    className
  );
  
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Grid;
