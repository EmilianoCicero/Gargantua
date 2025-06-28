import React from 'react';
import './Button.css';

const Button = ({ children, variant = 'primary', disabled = false, ...props }) => {
  const className = `btn ${variant} ${disabled ? 'disabled' : ''}`;

  return (
    <button type="button" className={className} disabled={disabled} {...props}>
      {children}
    </button>
  );
};

export default Button;