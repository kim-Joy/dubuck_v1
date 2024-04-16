import React from 'react';


function Confirm(props) {
  return(
     <dialog className="dialog">
         <section className={props.className}>
            {props.children}
         </section>
     </dialog>
  )
}


const Confirmhead = (props) =>{
  return(
     <div className="head">
        <h3>{props.title}</h3>
        {props.close === true ? "" : (
           <button className="close-btn Confirm-Close" ><span className="visuallyhidden">닫기</span></button>
        )
        }
     </div>
  )
}

const Confirmbody = (props) => {
  return(
     <div className="body">
        <p className="message">{props.message}</p>
        </div>
  )
}

const Confirmfoot = (props) =>{
  return(
     <div className="foot">
        {props.children}
     </div>
  )
}


export {Confirm, Confirmhead, Confirmbody, Confirmfoot};