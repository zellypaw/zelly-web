import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function Button({ 
  children, 
  onClick, 
  variant = 'primary',
  size = 'lg',
  className = '' 
}: ButtonProps) {
  const baseStyles = 'font-semibold rounded-full transition-all duration-300 cursor-pointer inline-block text-center';
  
  const variantStyles = {
    primary: 'bg-gradient-cta text-white hover:scale-105 hover:shadow-2xl shadow-lg',
    secondary: 'bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white',
  };
  
  const sizeStyles = {
    sm: 'px-6 py-2 text-sm',
    md: 'px-8 py-3 text-base',
    lg: 'px-10 py-4 text-lg',
  };
  
  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </button>
  );
}
