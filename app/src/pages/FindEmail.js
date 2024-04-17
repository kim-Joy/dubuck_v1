import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

import {Header} from "constants/organisms/Header"
import { Button } from 'constants/atoms/Button';
import { Input } from 'constants/atoms/Input';
import { Select } from 'constants/atoms/Select';

import { Security } from 'constants/molecules/Security';

import { Confirm, Confirmbody, Confirmfoot } from 'components/Confirm';

  

function FindEmail() { 

  // input state
  const [inputs, setinputs] = useState({
    email_id : "",
    email_etc : ""
   });
   const {
    email_id,email_etc
   } = inputs;
  const valueChange = (e) => {
    setinputs({
      ...inputs,
      [e.target.name]: e.target.value
    });
  }

  let [IsSelected, setIsSelected] = useState('선택하세요.');
  
  const OPTION_LIST = [
    {key: "1", value: "naver.com"},
    {key: "2", value: "daum.com"},
    {key: "3", value: "gmail.com"},
    {key: "4", value: "nate.com"},
    {key: "5", value: "yahoo.com"},
    {key: "6", value: "직접 입력"}
  ]
  //option click
  const optionClick = (e) =>{
    let SELECT_BTN = document.querySelector(".select-btn");
    const target = e.target.value;
    const EMAIL_ETC = document.querySelector("#email_etc");
    SELECT_BTN.classList.remove('on');
    setIsSelected(target);
    
    if(target === '직접 입력') {
      EMAIL_ETC.disabled = false;
    } else {
      EMAIL_ETC.disabled = true;
    }
  }

 
  return(
     <div className="find-email">
        <Header 
          title={"계정찾기"}
        >
          </Header>

        <form action="">
          <ul className="form inner20">
            <li className="form-item horizontal">
              <div>
                <Input
                  classLabel={"form-label"}
                  htmlFor={"email_id"}
                  text={"이메일"}
                  id={"email_id"}
                  classInput={"form-input email-input"}
                  type={"text"}
                  name={"email_id"}
                  value={email_id}
                  onChange={valueChange}
                />
              </div>
              <span className="mark">@</span>
              <div>
              <span 
                  className={"indent form-label"}
                  htmlFor={"email_adress"}
                >
                  이메일 주소
                </span>
                <Select 
                  id={"email_adress"}
                  value={IsSelected}
                  tit={IsSelected}
                  onChange={optionClick}
                  OP_LIST={OPTION_LIST}
                  optionClick={optionClick}
                />
              </div>
              <Input
                  id={"email_etc"}
                  classInput={"form-input full email-etc"}
                  type={"text"}
                  placeholder={"직접 입력해주세요."}
                  name={"email_etc"}
                  value={email_etc}
                  onChange={valueChange}
                  disabled={true}
                />
            </li>
            <li className="form-item ">  
              <Security />
            </li>
          </ul>
        </form>
        
        <div className="btn-group inner20">
          <Button 
            id={'submit'}
            onClick={EmailCheck}
            classButton={"btn full fill-orange radius-20 h-50"}
            classText={"txt-white font-18"}
            text={"인증번호 발송"}
          >
          </Button> 
        </div>

        <Confirm className="confirm">
          <Confirmbody message={''} />
          <Confirmfoot>
            <Button 
              classButton={"btn fill-orange radius-20 h-40"}
              classText={"txt-white font-14"}
              onClick={closeDialog}
              text={"확인"}
            />
          </Confirmfoot>
        </Confirm>
     </div>
  )
}





//컨피그 닫기
function closeDialog(e) {
  const dialog = document.querySelector(".dialog");
  dialog.close();
 }

 //이메일인증 체크
 const EmailCheck = (e) => {  
  const dialog = document.querySelector(".dialog");
  const message = document.querySelector('.message');
  const EMAIL_INPUT = document.querySelector(".email-input");
  const SUBMIT_BTN = document.querySelector("#submit");  
  const EMAIL_ADRESS = document.querySelector("#email_adress");
  const EMAIL_ETC = document.querySelector("#email_etc");
  const SECURITY = document.querySelector(".security");
  const regex2 = new RegExp('[a-z]+\.[a-z]{2,3}');
  EMAIL_ETC.disabled = true;

  if(EMAIL_INPUT.value.length > 0){
    dialog.showModal();
    message.textContent = '이메일 주소를 선택하세요.';
    if(EMAIL_ADRESS.value === '직접 입력') {
      EMAIL_ETC.disabled = false;
      email2(); 
    }
  } else {
    dialog.showModal();
    message.textContent = '이메일을 입력해주세요.';

  }



  function email2(){
    if(EMAIL_ETC.value.length > 0 && regex2.test(EMAIL_ETC.value)) {
      SECURITY.style.display = 'grid';
      SUBMIT_BTN.style.display = 'none';
      EMAIL_ETC.disabled = true;
    } else {
      dialog.showModal();
      message.textContent = '유효하지 않은 이메일입니다.';
    }
  }

}



export default FindEmail;