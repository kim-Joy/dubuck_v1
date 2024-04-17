import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';

import { Input } from 'constants/atoms/Input';
import { Button } from 'constants/atoms/Button';
import { Confirm, Confirmbody, Confirmfoot } from 'components/Confirm';


function Login() { 
  
  // input state
  const [inputs, setinputs] = useState({
    email : "",
    pw: ""

   });
   
   const {
    email,pw
   } = inputs;
  const valueChange = (e) => {
    setinputs({
      ...inputs,
      [e.target.name]: e.target.value
    });
  }
  const navigate = useNavigate();




  //로그인 체크
  function LoginCheck(){
    const dialog = document.querySelector(".dialog");
    const message = document.querySelector('.message');

    function email(){
      const regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
      const USER_EMAIL = document.querySelector("#email");
      const GUIDE = document.querySelector(".form-guide");
      let admin = 'admin@naver.com';

      if(USER_EMAIL.value.length > 0) {
        if(regex.test(USER_EMAIL.value) === true && USER_EMAIL.value === admin) {
          GUIDE.style.visibility = 'hidden';
          sessionStorage.setItem('EMAIL_KEY', USER_EMAIL.value);
          pw();
        } else if(regex.test(USER_EMAIL.value) === true && !(USER_EMAIL.value === admin)) {
          dialog.showModal();
          message.textContent = `
          가입되지 않은 이메일입니다. 
          회원가입 후 이용해주세요.`;
        } else {
          GUIDE.style.visibility = 'visible';
        }
      } else {
        dialog.showModal();
        message.textContent = '이메일을 입력하세요.';
      }
    }
    function pw(){
      const USER_PW = document.querySelector("#pw");

      if(USER_PW.value === '1234') {        
        sessionStorage.setItem('PW_KEY', USER_PW.value);
        navigate('/Main');
      } else {
        dialog.showModal();
        message.textContent = '비밀번호를 입력하세요.';
      }
    }
    email();

  }


  return(
     <div className="login inner40">
        <form action="">
          <ul className="form">
            <li className="form-item">
              <Input
                classLabel={"form-label"}
                htmlFor={"email"}
                text={"이메일"}
                id={"email"}
                classInput={"form-input"}
                type={"text"}
                placeholder={"@를 포함한 이메일을 입력하세요."}
                required={true}
                name={"email"}
                value={email}
                onChange={valueChange}
              >
              </Input>
              <p className="form-guide warning">올바른 이메일을 입력해주세요.
              </p>
            </li>
            <li className="form-item">
              <Input
                  classLabel={"form-label"}
                  htmlFor={"pw"}
                  text={"비밀번호"}
                  id={"pw"}
                  classInput={"form-input"}
                  type={"password"}
                  required={true}
                  name={"pw"}
                  value={pw}
                  onChange={valueChange}
                >
                </Input>
            </li>
          </ul>
          <div className="btn-group">
              <Button 
                classButton={"btn full fill-orange radius-20 h-50 icon"}
                classText={"txt-white font-18"}
                text={"로그인"}
                onClick={LoginCheck}
              />
          </div>
        </form>
        <Link to="/FindEmail"><p className="form-utill">비밀번호가 뭐였더라?</p></Link>


        <Confirm className="confirm">
          <Confirmbody message={''} />
          <Confirmfoot>
            <Button 
              classButton={"btn fill-orange radius-20 h-40"}
              classText={"txt-white font-14"}
              text={"확인"}
              onClick={closeDialog}
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


 

export default Login;
