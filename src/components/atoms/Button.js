import React from 'react';
import './button.css';

function Button(props) {
  const { view, onClick, text,disabled } = props;

  return (
    <button className={`button ${view}`} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
}

export default Button;
