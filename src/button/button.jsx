import React from "react";
import "./button.css";

export default function Button({ bgType, size, radius, hover }) {
  return (
    <div className="button-container">
      <button className={`button-custom ${hover}`} id={bgType} style={{  borderRadius: radius+"px", fontSize: size+"px", padding: (size*1.2)+"px" }}>
      BUTTON
    </button>
    </div>
    
  );
}
