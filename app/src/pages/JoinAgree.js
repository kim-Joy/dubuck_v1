import { Link } from 'react-router-dom';
import React, { useState } from 'react';

import {Header} from "constants/organisms/Header"
import { Button } from 'constants/atoms/Button';
import {Agree} from 'constants/molecules/Agree'

function JoinAgree() {
  const POLICY_LIST = [
    {CheckLiClass: "all_checkbox", CheckID: "all_check", CheckFor: "all_check", CheckName: "all_check", checkTo: null, 
    POLICY_TEXT: [
      { classDesc: null, desc: '(선택사항 포함)', text: '약관 전체동의' }
    ] },
    {CheckLiClass: "agree_terms", CheckID: "agree_terms", CheckFor: "agree_terms", CheckName: null, checkTo: 'Terms', 
    POLICY_TEXT: [
      { classDesc: 'requisite', desc: '(필수)', text: '이용약관 동의' }
    ] },
    {CheckLiClass: "agree_privacy", CheckID: "agree_privacy", CheckFor: "agree_privacy", CheckName: null, checkTo: 'Privacy', 
    POLICY_TEXT: [
      { classDesc: 'requisite', desc: '(필수)', text: '개인정보 수집 및 이용동의' }
    ] },
    {CheckLiClass: "agree_marketing", CheckID: "agree_marketing", CheckFor: "agree_marketing", CheckName: null, checkTo: 'Marketing', 
    POLICY_TEXT: [
      { classDesc: 'choose', desc: '(선택)', text: '광고성정보 수신동의' }
    ] }
  ]


  return(
     <div className="joinagree">
        <Header
          title={"약관동의"}
        >
        </Header>
        <form>
          <section className="section-agree inner20">
            <Agree
              ITEM_LIST={POLICY_LIST}
            >
              
            </Agree>
          </section>

          <div className="btn-group fixed inner20">
            <Link to="/Join">
              <Button 
                classButton={"btn full fill-orange radius-20 h-50"}                
                classText={"txt-white font-18"}
                text={"다음"}
              >
              </Button>
            </Link>
          </div>
        </form>

     </div>
  )
}


export default JoinAgree;