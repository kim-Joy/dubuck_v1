import React, { useEffect } from 'react';
import {Header} from "constants/organisms/Header"

import Question from 'constants/organisms/Question';


const Exam =() => {

  useEffect(() => {
    const start = document.querySelector('.screen.start .desc');
    const lineBreak = document.createElement('br');
    const input = document.createElement('input');
    Object.assign(input, {
      type: 'number', 
      className: 'num', 
      value: '',
      placeholder: '?'
    });

    start.textContent = '오늘은 ';
    start.appendChild(input);
    start.appendChild(document.createTextNode(' 문항으로'));
    start.appendChild(lineBreak);
    start.appendChild(document.createTextNode('챌린지 시작해볼까?'));

  }, []);

  return (
    <div className="word">
      <Header 
        logo={true}
      />
      <Question />
      
    </div>
  )
} 

export default Exam;