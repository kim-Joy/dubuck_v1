import React, { useState } from 'react';

// button 
const Button = (props, {children}) => {
  
  return(
    <button 
      className={props.classButton}
      type="button"
      id={props.id}
      onClick={props.onClick}
      disabled = {props.disabled}
    >
      {props.classButton.includes('icon') && (
        <i className={props.classIcon}><span className="visuallyhidden">아이콘</span></i>
      )} 
      <span 
      className={props.classText}
      >{props.text}
      </span>
    </button>

  )

}



export {Button};
