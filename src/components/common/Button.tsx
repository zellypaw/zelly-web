import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function Button({ 
  children, 
  onClick, 
  disabled = false,
  variant = 'primary',
  size = 'lg',
  className = '' 
}: ButtonProps) {
  const baseStyles = 'font-semibold rounded-full transition-all duration-300 inline-block text-center disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantStyles = {
    primary: 'bg-primary text-white hover:scale-105 hover:shadow-2xl shadow-lg enabled:cursor-pointer',
    secondary: 'bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white enabled:cursor-pointer',
  };
  
  const sizeStyles = {
    sm: 'px-6 py-2 text-sm',
    md: 'px-8 py-3 text-base',
    lg: 'px-10 py-4 text-lg',
  };
  
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </button>
  );
}
