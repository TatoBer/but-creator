import React from "react";
import "./button.css";

export default function Button({ bgType, size, radius, hover, styles, shadow, text }) {

  return (
    <div className="button-container">
      <button className={`button-custom ${text} ${shadow} ${styles} ${hover}`} id={bgType} style={{  borderRadius: radius+"px", fontSize: size+"px", padding: (size*1.2)+"px" }}>
      BUTTON
    </button>
    </div>
    
  );
}
