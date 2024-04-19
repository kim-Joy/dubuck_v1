import React from 'react';


// input
const Input =(props) => {
  return(
    <>
      <label
        className={props.classLabel}
        htmlFor={props.htmlFor}>
        {props.text}
      </label>
      <input 
        id={props.id}
        name={props.name}
        defaultValue={props.value}
        className={props.classInput}
        type={props.type}
        placeholder={props.placeholder}
        required = {props.required}
        disabled = {props.disabled}
        onChange = {props.onChange}
        title={props.title}
        defaultChecked={true}
      />
    </>
    
  )
}

export {Input};