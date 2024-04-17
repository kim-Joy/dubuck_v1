import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Checkbox } from 'constants/atoms/Checkbox';

// Checkbox
const Agree =(props) => {
  
  return(
    <div className="agree">
      <h3 className="title">약관동의</h3>
      <ul className="agree_items">
        <li>
          <Checkbox 
            inputID={"all_check"}
            htmlFor={"all_check"}
            name={"all_check"}
            text={"전체 동의"}
          />
        </li>
        <li>
          <Checkbox 
              inputID={"agree01"}
              htmlFor={"agree01"}
              name={"agree01"}
              text={"이용약관 동의(필수)"}
          />
          <Link to="/Policy" >
            <i className="more"><span className="visuallyhidden">더보기</span></i>  
        </Link>
        </li>
        <li>
          <Checkbox 
              inputID={"agree02"}
              htmlFor={"agree02"}
              name={"agree02"}
              text={"마케팅약관 동의(선택)"}
          />
          <Link to="/Marketing" >
            <i className="more"><span className="visuallyhidden">더보기</span></i>  
          </Link>
        </li>
      </ul>
    </div>
  )
}


export {Agree};