
import React, { useEffect } from 'react';
import { Button } from 'constants/atoms/Button';

import Screen from 'components/Screen';
import Card from 'constants/molecules/Card'


const Question =() => {
  

  useEffect(() => {
    const finished_btn = document.querySelector('.finished_next');
    function handlerFinishScreen(){
      
      console.log('clock')
    }

    finished_btn.addEventListener('click',handlerFinishScreen);
  }, []);

  return (
    <div className="question">
      <Card />
      <div className="btn-group horizontal inner20">
      <Button
          classButton={"btn fill-grape-65 radius-20 h-40"}
          classText={"txt-white font-16"}
          text={"Prev"}
        />
        <Button
          classButton={"btn fill-grape-65 radius-20 h-40 finished_next"}
          classText={"txt-white font-16"}
          text={"Next"}
        />
      </div>
      
      <div className="layer active">
        <Screen
          className={'start'}
          desc={''}
        >
          <Button
            onClick={layerClose}
            classButton={"btn full fill-white radius-20 h-50"}
            classText={"txt-orange font-18"}
            text={"START"}
          />
        </Screen>
        <div className="dim"></div>
      </div>
      
    </div>
  )
} 

function layerClose(){
  const LAYER = document.querySelector('.layer');
  LAYER.classList.remove('active');

}

export default Question;