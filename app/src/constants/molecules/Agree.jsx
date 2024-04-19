import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Checkbox } from 'constants/atoms/Checkbox';

// Checkbox
const Agree =(props) => {

  return(
    <div className="agree">
      <h3 className="visuallyhidden">약관동의</h3>
      <ul className="agree_items">
        {props.ITEM_LIST.map((item, key) => (
          <li key={key} className={item.CheckLiClass}>
            <Checkbox 
                inputID={item.CheckID}
                htmlFor={item.CheckFor}
                name={item.CheckName}
            >
              {item.POLICY_TEXT.map((policy, index) => (
                <span key={index}>
                  <em className={`desc ${policy.classDesc}`}>{policy.desc}</em>
                  {policy.text}
                </span>
              ))}
            </Checkbox>
            {item.checkTo ? (
              <Link to={item.checkTo}>
              <i className="more"><span className="visuallyhidden">더보기</span></i>  
            </Link>
            ) : null }
          </li>
        ))}
      </ul>

    </div>
  )
}


export {Agree};