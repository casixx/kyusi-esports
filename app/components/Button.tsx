import React from 'react';
// 1. Define the "Shape" of the props
type ButtonProps = {
  label: string;                   // The text inside the button
  onClick?: () => void;            // Function to run when clicked (optional)
  type?: 'button' | 'submit';      // Is it a form submit button?
  variant?: 'primary' | 'secondary' | 'outline'; // Style options
  className?: string;              // Allow adding extra styles if needed
  disabled?: boolean;              // Is the button disabled?
};

const Button = ({ 
  label, 
  onClick, 
  type = 'button', 
  variant = 'primary', 
  className = '',
  disabled = false
}: ButtonProps) => {

  // 2. Define styles based on the variant
  const baseStyles = "px-7 py-4 rounded font-bold transition duration-200 ease-in-out font-press-start text-sm cursor-pointer";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-red-700 border-2 border-primary ",
    secondary: "bg-secondary text-white hover:bg-pink-600 border-2 border-secondary",
    outline: "bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-white"
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;