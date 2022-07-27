import React, { useState } from "react";
import Button from "../button/button";
import Copy from "../copy/copy";
import "./selectors.css";

document.documentElement.style.setProperty('--color-secondary', "#a172b4");
document.documentElement.style.setProperty('--color-primary', "#9138b4");
document.documentElement.style.setProperty('--color-primary-t', "#9138b460");
document.documentElement.style.setProperty('--color-text', "#ffffff");

export default function Selectors() {
  const [bgType, setBgType] = useState("radial-b");

  const changePrimCol = ()=> {
    let c = document.querySelector("input[name=prim-color]").value
    document.documentElement.style.setProperty('--color-primary', c);
    document.documentElement.style.setProperty('--color-primary-t', `${c}60`);
  }

  const changeSecCol = ()=> {
    let c = document.querySelector("input[name=sec-color]").value
    document.documentElement.style.setProperty('--color-secondary', c);
  }

  const changeTextCol = ()=> {
    let c = document.querySelector("input[name=text-color]").value
    document.documentElement.style.setProperty('--color-text', c);
  }

  const changeBgDark = () => {
    setBgType("dark-b");
  };

  const changeBgSolid = () => {
    setBgType("solid-b");
  };

  const changeBgTransparent = () => {
    setBgType("transparent-b");
  };

  const changeBgRadial = () => {
    setBgType("radial-b");
  };

  const changeBgLineal = () => {
    setBgType("lineal-b");
  };

  const changeBgTranspLineal = () => {
    setBgType("transp-lineal-b");
  };

  return (
    <>
      <Button bgType={bgType} />
      <Copy />
      <div className="box-container">
        <div className="box bcg-type">
          <b>BACKGROUND</b>
          <div className="box2">
            <button
              className="dark-b example-b"
              onClick={changeBgDark}
            ></button>
            <button
              className="solid-b example-b"
              onClick={changeBgSolid}
            ></button>
            <button
              className="transparent-b example-b"
              onClick={changeBgTransparent}
            ></button>
            <button
              className="radial-b example-b"
              onClick={changeBgRadial}
            ></button>
            <button
              className="lineal-b example-b"
              onClick={changeBgLineal}
            ></button>
            <button
              className="transp-lineal-b example-b"
              onClick={changeBgTranspLineal}
            ></button>
          </div>
        </div>
      </div>
      <div className="box-container">
        <div className="box bcg-type">
          <b>COLORS</b>
          <div className="box2">
            <div className="box">
            <div className="inputc-div">
                <input type="color" name="prim-color" defaultValue={"#9138b4"} onChange={changePrimCol}/>
              </div>
              <p className="info-box">PRIMARY</p>
            </div>
            <div className="box">
              <div className="inputc-div">
                <input type="color" name="sec-color" defaultValue={"#a172b4"} onChange={changeSecCol}/>
              </div>
              <p className="info-box">SECONDARY</p>
            </div>
            <div className="box">
              <div className="inputc-div">
                <input type="color" name="text-color" defaultValue={"#ffffff"} onChange={changeTextCol}/>
              </div>
              <p className="info-box">TEXT</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
