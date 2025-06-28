import React from 'react';
import './Button.css';

const Button = ({ children, variant = 'primary', disabled = false, fullWidth = false, ...props }) => {
  const className = `btn ${variant} ${disabled ? 'disabled' : ''} ${fullWidth ? 'full-width' : ''}`;

  return (
    <button className={className} disabled={disabled} {...props}>
      {children}
    </button>
  );
};

export default Button;