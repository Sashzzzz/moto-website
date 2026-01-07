import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'dark';
  className?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  className = '',
  children,
  ...props
}) => {
  const baseStyles = "px-8 py-3 font-heading font-bold text-sm uppercase tracking-wider transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center";

  const variants = {
    // Primary: Yellow background, Black text
    primary: "bg-primary text-black border-2 border-primary hover:bg-black hover:text-primary hover:border-primary",
    // Outline: Transparent with Yellow border
    outline: "bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-black",
    // Dark: Black background, White text
    dark: "bg-black text-white border-2 border-black hover:bg-primary hover:text-black hover:border-black"
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
