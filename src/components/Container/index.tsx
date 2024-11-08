import React from 'react';
import './container.css';

interface ComponentProps extends React.ComponentProps<'div'>{
    primary?: boolean
    size?: 'small' | 'medium' | 'large'
    label: string,
    backgroundColor?: string
}

export function Container({primary=false, size='medium', label, backgroundColor, ...props}: ComponentProps){
    const mode = primary ? 'storybook-cotainer--primary' : 'storybook-container--secondary';
  return (
    <div
      className={mode}
      style={{ backgroundColor }}
      {...props}
    >
      <p>{label ? label : 'Button'}</p>
    </div>
  );
}