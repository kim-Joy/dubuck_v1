import React from 'react';
import {Link} from 'react-router-dom';

import { Button } from 'constants/atoms/Button';

import Big from "components/Big";
import Login from './Login';


function Intro() {

  function loginClick(e) {
    e.preventDefault();
    
   const absolute = document.querySelector('.absolute-box');

    absolute.classList.add('on');
  }
  
  return(
     <div className="intro">
        <Big />
        <div className="inner40">
          <div className="btn-group">
            <Button 
            classButton={"btn full fill-orange radius-20 h-50 icon"}
            classText={"txt-white font-18"}
            classIcon={"arrow"}
            text={"로그인"}
            onClick={loginClick}
            >
            </Button >
            <Link to="/JoinAgree" key="Join">
              <Button 
                classButton={"btn full border border-orange radius-20 h-50 icon"} 
                classText={"txt-orange font-18"}
                classIcon={"arrow"}
                text={"이메일로 가입"}
              >
              </Button>
            </Link>
          </div>
          <div className="absolute-box">
            <Login />
          </div>
        </div>
     </div>
  )
}


export default Intro;