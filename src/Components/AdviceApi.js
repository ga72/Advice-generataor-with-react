import React, { useState } from "react";
import AdviceComponent from "./AdviceComponent";

function AdviceApi() {
  const [advices, setAdvices] = useState("Click to get advice");
  const [id, setId] = useState("");

  const fetchAdvice = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => {
        const adviceId = data.slip.id;
        const adviceText = data.slip.advice; 
        setId(adviceId);
        setAdvices(adviceText);
      });
  };

  return (
    <div style={{backgroundColor:"hsl(217, 19%, 24%)" , display:"flex" , justifyContent:"center" , alignItems:"center" , height:"100vh" }}>
      <AdviceComponent id={id} advices={advices} fetchAdvice={fetchAdvice} />
    </div>
  );
}

export default AdviceApi;

