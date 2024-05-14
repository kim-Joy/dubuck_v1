import React, { useState } from 'react';
import { Input } from 'constants/atoms/Input';


const Card =(props) => {

  // input state
  const [inputs, setinputs] = useState({
    write : ""

   });
   
   const {
    write
   } = inputs;
  const valueChange = (e) => {
    setinputs({
      ...inputs,
      [e.target.name]: e.target.value
    });
  }

  return (
    <div className="card">
      <div className="antenna">
        <dl>
          <dt>항목수</dt>
          <dd>
            <span>2</span>
            /
            <span>100</span>
          </dd>
        </dl>
        <dl>
          <dt>오답수</dt>
          <dd>
            <span>0</span>
            /
            <span>100</span>
          </dd>
        </dl>
      </div>
      <div className="card-question">
        <p>동사</p>
        <strong className="q">존재하다</strong>
        <button className="volume">
          <i className="i-volume"></i>
        </button>
        <span>발음 듣기</span>
      </div>
      
      <div className="card-write">
        <Input 
          classLabel={"visuallyhidden"}
          htmlFor={"write"}
          type={"text"}
          classInput="my-write" 
          value={write} 
          onChange={valueChange} 
          placeholder={"동사를 입력하세요."}/>
      </div>
    </div>
  )
} 


export default Card;