import React, { useState, useEffect } from 'react';
import {Link, useNavigate} from 'react-router-dom';

import { Button } from 'constants/atoms/Button';
import { Confirm, Confirmhead, Confirmbody, Confirmfoot } from 'components/Confirm';



function FinishConfrim() { 

  return(
     <div className="finish-confirm">
        <Confirm className={"modal"}>
        
        <Confirmhead 
          title={`잠깐! 아직 풀지 않은 문제들이 있습니다.`}
          close={true} 
        />
        <Confirmbody 
          message={"지금까지 푼 단어들은 저장 및 채점에 포함되지 않으므로, 처음부터 시작 하셔야 합니다. 그래도 나가시겠습니까?"} 
        />
        <Confirmfoot>
          <div className="btn-group horizontal">
            <Link to="/Main">
            <Button 
                classButton={"btn border border-white radius-20 h-50"}
                classText={"txt-white"}
                text={"공부끝내기"}
            />
            </Link>
            <Button 
                classButton={"btn fill-white radius-20 h-50"}
                classText={"txt-grape-deep"}
                text={"아직 더풀래"}
            />
          </div>
        </Confirmfoot>
        
      </Confirm>
     </div>
  )
}


export default FinishConfrim;
