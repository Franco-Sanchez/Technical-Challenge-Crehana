import React from 'react';
import '../../css/Button.css';

function Button( {text}: any ) {
  return (
    <button className="button">{text}</button>
  )
}

export default Button;