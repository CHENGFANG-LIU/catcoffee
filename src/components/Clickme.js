import React, { useState } from "react";

import "../App.css";

const Clickme = () => {
  

  const [style, setStyle] = useState("cont");
  
    
  const changeStyle = () => {

    

    setStyle("cont2");

  }
  return (

    <>

      

      <div className={style}>
        
        

        <button className="button" onClick={changeStyle}>

          我知道要先看規則~點我關閉~

        </button>

      </div>

    </>

  );

};

export default Clickme;