import { Link } from 'react-router-dom';
import React, { useState } from 'react';

import { Button } from 'constants/atoms/Button';

import Big from "components/Big";
import { Confirm, Confirmhead, Confirmbody, Confirmfoot } from 'components/Confirm';

function Main() {
  const calendar_item = [
    {key: "2", title: "영단어 공부", className: "item-word", to: "/Word"},
    {key: "3", title: "챌린지 시험", className: "item-exam", to: "/Exam"},
    {key: "4", title: "챌린지 결과", className: "item-result", to: "/Result"},
  ]
  
  return(
    <div className="Main">
      <Big />
      <div className="inner20">
        <div className="list-group calendar">
          <Link to="/Attendance">
            <button className="btn">
              <p>이달의 출결 수</p>
              <strong><em>31</em>일차</strong>
            </button>
          </Link>
        </div>
        <ul className="list-group category">
          {calendar_item.map((item) =>(
            <li className={`item ${item.className}` }>
              <Link to={item.to}>
                <button
                  type="button"
                  className="btn"
                  value={item.value}
                >
                  {item.title}
                </button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      
      
      <Confirm className="confirm modal">
        <Confirmhead 
          title={"두벅이 소리함"} 
          close={true}
        />
        <Confirmbody 
          message={"불편한점, 바라는 점등 다양한  의견을 들려주세요!"} 
        />
        <Confirmfoot >
          <div className="btn-group">
            <Link to="/Suggestion">
            <Button 
                classButton={"btn border border-whtie radius-20 h-50"}
                classText={"txt-white"}
                text={"충고하기"}
            />
            </Link>
          </div>
        </Confirmfoot>
        
      </Confirm> 
    </div>
  )
}


export default Main;
