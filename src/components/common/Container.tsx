import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  clean?: boolean; // If true, remove default horizontal padding
}

export default function Container({ 
  children, 
  className = '', 
  clean = false 
}: ContainerProps) {
  return (
    <div className={`
      max-w-7xl 
      mx-auto 
      ${clean ? '' : 'px-4 sm:px-6 lg:px-8'}
      ${className}
    `}>
      {children}
    </div>
  );
}
