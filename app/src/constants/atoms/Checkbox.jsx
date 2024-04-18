import React, { useState } from 'react';


// Checkbox
const Checkbox =(props) => {
  let [IsChecked, setIsChecked] = useState(false);

  //체크박스 선택 ,해제
  function check(e) {
    console.log(e.target)
    e.target = setIsChecked(true);
    if(IsChecked === true) {
      e.target = setIsChecked(false);
    } else {
      e.target = setIsChecked(true);
    }
  }

  return(
    <div className="checkbox">
      <input 
        id={props.inputID} 
        type="checkbox"
        className="check-input"
        checked={IsChecked}
        defaultValue={props.value}
      />
      <label
        name={props.name}
        className="check-label"
        htmlFor={props.htmlFor}
        onClick={check}
      >
        {props.children}
      </label>
    </div>
  )
}



export {Checkbox};