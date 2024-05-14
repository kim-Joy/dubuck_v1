import React, { useEffect } from 'react';
import {Header} from "constants/organisms/Header"

import Question from 'constants/organisms/Question';


const Word =() => {

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

    start.appendChild(input);
    start.appendChild(document.createTextNode('단어'));
    start.appendChild(lineBreak);
    start.appendChild(document.createTextNode('공부 해볼까?'));

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

export default Word;