import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

//array for styles of buttons
const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];
//array for sizes of buttons
const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  //first checks for button style. If no style is dictated, style will default to first index of style array above
  //second checks size, does same

  return (
    <Link to={onClick} className='btn-mobile'>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};