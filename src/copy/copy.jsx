import React from "react";
import { ImHtmlFive, ImCss3 } from "react-icons/im";
import "./copy.css"

export default function Copy() {
  return (
    <div className="copy-container">
      <p>COPY</p>
      <div className="copy" >
        <ImHtmlFive />
        <span class="tooltip">Copy HTML</span>
      </div>
      <div className="copy" >
        <ImCss3 />
        <span class="tooltip">Copy CSS</span>
      </div>
    </div>
  );
}
