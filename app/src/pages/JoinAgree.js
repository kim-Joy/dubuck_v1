import { Link } from 'react-router-dom';
import React, { useState } from 'react';

import {Header} from "constants/organisms/Header"
import { Button } from 'constants/atoms/Button';
import {Agree} from 'constants/molecules/Agree'

function JoinAgree() {
  const POLICY_LIST = [
    {key: 1, CheckLiClass: "all_checkbox", CheckID: "all_check", CheckFor: "all_check", CheckName: "all_check", checkTo: null, 
    POLICY_TEXT: [
      { index: 1 , classDesc: null, desc: '(선택사항 포함)', text: '약관 전체동의' }
    ] },
    {key: 2, CheckID: "agree_terms", CheckFor: "agree_terms", CheckName: 'agree_terms', checkTo: 'Terms', 
    POLICY_TEXT: [
      { index: 2, classDesc: 'requisite', desc: '(필수)', text: '이용약관 동의' }
    ] },
    {key: 3, CheckID: "agree_privacy", CheckFor: "agree_privacy", CheckName: 'agree_privacy', checkTo: 'Privacy', 
    POLICY_TEXT: [
      { index: 3, classDesc: 'requisite', desc: '(필수)', text: '개인정보 수집 및 이용동의' }
    ] },
    {key: 4, CheckID: "agree_marketing", CheckFor: "agree_marketing", CheckName: 'agree_marketing', checkTo: 'Marketing', 
    POLICY_TEXT: [
      { index: 4, classDesc: 'choose', desc: '(선택)', text: '광고성정보 수신동의' }
    ] }
  ]

  const [checkHandler, setcheckHandler] = useState(null);
  const allAgree = POLICY_LIST[0].CheckID;
  


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
            />
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