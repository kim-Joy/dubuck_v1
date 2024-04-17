import { Link } from 'react-router-dom';
import React, { useState } from 'react';

import {Header} from "constants/organisms/Header"

import { Button } from 'constants/atoms/Button';
import { Input } from 'constants/atoms/Input';
import { Select } from 'constants/atoms/Select';

import {Agree} from 'constants/molecules/Agree'
import { Confirm, Confirmbody, Confirmfoot } from 'components/Confirm';




function Join() {
  // input state
  const [inputs, setinputs] = useState({
    family_name: "",
    middle_name: "",
    email_id : "",
    email_etc : "",
    pw: "",
    pw2 : ""  
   });

   const {
    family_name,middle_name,email_id,email_etc,pw,pw2
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
     <div className="join">
        <Header
          title={"회원가입"}
        >
        </Header>
        <form>
          <ul className="form inner20">
            <li className="form-item horizontal">
              <div>
                <Input
                  classLabel={"form-label"}
                  htmlFor={"family_name"}
                  text={"성"}
                  id={"family_name"}
                  classInput={"form-input"}
                  type={"text"}
                  required={true}
                  name={"family_name"}
                  value={family_name}
                  onChange={valueChange}
                />
              </div>
              <span className="mark">/</span>
              <div>
                <Input
                  classLabel={"form-label"}
                  htmlFor={"middle_name"}
                  text={"이름"}
                  id={"middle_name"}
                  classInput={"form-input"}
                  type={"text"}
                  required={true}
                  name={"middle_name"}
                  value={middle_name}
                  onChange={valueChange}
                />
              </div>
            </li>
            <li className="form-item horizontal">
              <div className="grid">
                  <Input
                    classLabel={"form-label"}
                    htmlFor={"email_id"}
                    text={"이메일"}
                    id={"email_id"}
                    classInput={"form-input"}
                    type={"text"}
                    required={true}
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
            <li className="form-item">
              <Input
                classLabel={"form-label"}
                htmlFor={"pw"}
                text={"비밀번호"}
                id={"user_pw"}
                classInput={"form-input"}
                type={"password"}
                required={true}
                name={"pw"}
                value={pw}
                onChange={valueChange}
              />
              <p className="form-guide">영문+숫자 조합 6자리 이상 입력하세요.</p>
            </li>
            <li className="form-item">
              <Input
                classLabel={"form-label"}
                htmlFor={"pw2"}
                text={"비밀번호 확인"}
                id={"pw2"}
                classInput={"form-input"}
                type={"password"}
                required={true}
                name={"pw2"}
                value={pw2}
                onChange={valueChange}
              />
              <p 
              className="form-guide warning">비밀번호가 일치하지 않습니다.</p>
            </li>
          </ul>

          <section className="section-agree inner20">
            <Agree />
          </section>

          <div className="btn-group inner20">
            <Button 
              classButton={"btn full fill-orange radius-20 h-50"}                
              classText={"txt-white font-18"}
              text={"가입하기"}
              onClick={JoinSubmit}
            >
            </Button>
          </div>
        </form>

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

//회원가입
function JoinSubmit(){
  
  const dialog = document.querySelector(".dialog");
  const message = document.querySelector('.message');
 
   
   function name(){
     const FirstName = document.querySelector('#family_name');
     const MiddleName = document.querySelector('#middle_name');
     if(FirstName.value.length > 0 ){ 
       if(MiddleName.value.length > 0) {
         email()
       } else {
         dialog.showModal();
         message.textContent = '이름을 입력해주세요.';
       }
     } else {
       dialog.showModal();
       message.textContent = '성을 입력해주세요.';
     }
   }
 
   function email(){
     const EmailId = document.querySelector('#email_id');
     const SelectBtn = document.querySelector('.select-btn');
 
     if(EmailId.value.length > 0){
       if(EmailId.value.length > 0 && SelectBtn.value.includes('.')){
         psaword();
       }  else {
         dialog.showModal();
         message.textContent = '이메일을 선택하세요.';
       }
     } else {
       dialog.showModal();
       message.textContent = '이메일을 입력해주세요.';
   
     }
 
   }
 
   function psaword(){    
     const UserPw = document.querySelector('#user_pw');
     const PwAgain = document.querySelector('#pw2');
     const GUIDE = document.querySelector(".form-guide.warning");
 
     if(UserPw.value.length > 0 ){ 
       if(PwAgain.value.length > 0 ){ 
         if(UserPw.value === PwAgain.value ) {
           agree();
         } else {
           GUIDE.style.display = 'block';
         }
       } else {
         dialog.showModal();
         message.textContent = '비밀번호 확인을 입력하세요.';
       }
     } else {
       dialog.showModal();
       message.textContent = '비밀번호를 입력하세요.';
     }
   }
 
   function agree(){
     console.log('약관동의')
   }
 
   name()
 }



export default Join;