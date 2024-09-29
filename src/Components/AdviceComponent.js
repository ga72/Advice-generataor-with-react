import React from "react";
import image1 from './images/icon-dice.svg';
import image2 from './images/pattern-divider-desktop.svg'
import './AdviceComponent.css'

function AdviceComponent({ id, advices, fetchAdvice }) {
  return (
    <div className="advice">
      <div className="advice-data">
        <h3>{id}</h3>
        <p>{advices}</p>
        <img  src={image2} alt="pattern" style={{padding:"20px"}}
     />
     
      </div>
     
    
      <img
        src={image1}
        alt="Dice Icon"
        onClick={fetchAdvice}
        style={{ cursor: "pointer", background:"hsl(150, 100%, 66%)" , padding:"10px" , borderRadius:"50%" }}
      />
      </div>
    
  );
}

export default AdviceComponent;
