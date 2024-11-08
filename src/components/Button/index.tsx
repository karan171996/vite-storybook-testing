import React from 'react';
import './button.css';

interface ComponentProps extends React.ComponentProps<'button'>{
    primary?: boolean
    size?: 'small' | 'medium' | 'large'
    label: string,
    backgroundColor?: string
}

export function Button({primary=false, size='medium', label, backgroundColor, ...props}: ComponentProps){
    const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label ? label : 'Button'}
    </button>
  );
}