import React, { useState, useEffect } from 'react';
import {Link, useNavigate} from 'react-router-dom';

import { Input } from 'constants/atoms/Input';
import { Button } from 'constants/atoms/Button';


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

    console.log("hi");
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
              <p 
                className="form-guide warning"
                style={{display: "none"}} 
              >
                올바른 이메일을 입력해주세요.
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
     </div>
  )
}



export default Login;
