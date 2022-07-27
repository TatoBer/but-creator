import React, { useState } from "react";
import Button from "../button/button";
import Copy from "../copy/copy";
import "./selectors.css";
import { BsFillCheckCircleFill } from "react-icons/bs";

document.documentElement.style.setProperty("--color-secondary", "#a172b4");
document.documentElement.style.setProperty("--color-secondary-t", "#a172b460");
document.documentElement.style.setProperty("--color-primary", "#29a7a7");
document.documentElement.style.setProperty("--color-primary-t", "#29a7a760");
document.documentElement.style.setProperty("--color-text", "#ffffff");

export default function Selectors() {
  const [bgType, setBgType] = useState("radial-b");
  const [size, setSize] = useState(17);
  const [radius, setRadius] = useState(32);
  const [hover, setHover] = useState("hover-b1");

  const changeHover1 = () => {
    setHover("hover-b1");
    document
      .querySelector(".con-examp.hover-b1")
      .children[0].classList.remove("off");
    setTimeout(() => {
      document
        .querySelector(".con-examp.hover-b1")
        .children[0].classList.add("off");
    }, 1000);
  };

  const changeHover2 = () => {
    setHover("hover-b2");
    document
      .querySelector(".example-b.hover-b2")
      .children[0].classList.remove("off");
    setTimeout(() => {
      document
        .querySelector(".example-b.hover-b2")
        .children[0].classList.add("off");
    }, 1000);
  };

  const changeHover3 = () => {
    setHover("hover-b3");
    document
      .querySelector(".example-b.hover-b3")
      .children[0].classList.remove("off");
    setTimeout(() => {
      document
        .querySelector(".example-b.hover-b3")
        .children[0].classList.add("off");
    }, 1000);
  };

  const changeSize = () => {
    const s = document.querySelector("input[name=size]").value;
    setSize(s);
  };

  const changeRadius = () => {
    const s = document.querySelector("input[name=radius]").value;
    setRadius(s);
  };

  const changePrimCol = () => {
    let c = document.querySelector("input[name=prim-color]").value;
    document.documentElement.style.setProperty("--color-primary", c);
    document.documentElement.style.setProperty("--color-primary-t", `${c}60`);
  };

  const changeSecCol = () => {
    let c = document.querySelector("input[name=sec-color]").value;
    document.documentElement.style.setProperty("--color-secondary-t", `${c}60`);
    document.documentElement.style.setProperty("--color-secondary", c);
  };

  const changeTextCol = () => {
    let c = document.querySelector("input[name=text-color]").value;
    document.documentElement.style.setProperty("--color-text", c);
  };

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

  const changeBgTranspRadial = () => {
    setBgType("transp-radial-b");
  };

  const toggleFlash = () => {
    const buttonP = document.querySelector(".button-custom");
    document
      .querySelector(".example-b.flash-b")
      .children[0].classList.toggle("off");
    buttonP.classList.toggle("flash-b");
  };

  const toggleBorderd = () => {
    const buttonP = document.querySelector(".button-custom");
    document
      .querySelector(".example-b.borderd-b")
      .children[0].classList.toggle("off");
    buttonP.classList.toggle("borderd-b");
  };

  const toggleBottom = () => {
    const buttonP = document.querySelector(".button-custom");
    document
      .querySelector(".example-b.bottom-b")
      .children[0].classList.toggle("off");
    buttonP.classList.toggle("bottom-b");
  };

  const toggleShadow = () => {
    const buttonP = document.querySelector(".button-custom");
    document
      .querySelector(".example-b.shadow-b")
      .children[0].classList.toggle("off");
    buttonP.classList.toggle("shadow-b");
  };

  return (
    <>
      <Button bgType={bgType} size={size} radius={radius} hover={hover} />
      <Copy />
      <div className="box-container">
        <div className="box bcg-type">
          <b>BACKGROUND</b>
          <div className="box2">
            <button
              className="example-b hover-b1"
              id="dark-b"
              onClick={changeBgDark}
            ></button>
            <button
              className="example-b hover-b1"
              id="solid-b"
              onClick={changeBgSolid}
            ></button>
            <button
              className="example-b hover-b1"
              id="transparent-b"
              onClick={changeBgTransparent}
            ></button>
            <button
              className="example-b hover-b1"
              id="radial-b"
              onClick={changeBgRadial}
            ></button>
            <button
              className="example-b hover-b1"
              id="lineal-b"
              onClick={changeBgLineal}
            ></button>
            <button
              className="example-b hover-b1"
              id="transp-lineal-b"
              onClick={changeBgTranspLineal}
            ></button>
            <button
              className="example-b hover-b1"
              id="transp-radial-b"
              onClick={changeBgTranspRadial}
            ></button>
          </div>
        </div>
        <div className="box bcg-color">
          <b>COLORS</b>
          <div className="box2">
            <div className="box">
              <div className="inputc-div">
                <input
                  type="color"
                  name="prim-color"
                  defaultValue={"#29a7a7"}
                  onChange={changePrimCol}
                />
              </div>
              <p className="info-box">PRIMARY</p>
            </div>
            <div className="box">
              <div className="inputc-div">
                <input
                  type="color"
                  name="sec-color"
                  defaultValue={"#a172b4"}
                  onChange={changeSecCol}
                />
              </div>
              <p className="info-box">SECONDARY</p>
            </div>
            <div className="box">
              <div className="inputc-div">
                <input
                  type="color"
                  name="text-color"
                  defaultValue={"#ffffff"}
                  onChange={changeTextCol}
                />
              </div>
              <p className="info-box">TEXT</p>
            </div>
          </div>
        </div>
        <div className="box button-opt">
          <b>BUTTON</b>
          <div className="box2">
            <div className="box">
              <input
                type="range"
                name="size"
                onChange={changeSize}
                min="14"
                max="21"
                defaultValue="17"
              />
              <p className="info-box">SIZE</p>
            </div>
            <div className="box">
              <input
                type="range"
                name="radius"
                onChange={changeRadius}
                min="0"
                max="40"
                defaultValue="32"
              />
              <p className="info-box">BORDER</p>
            </div>
          </div>
        </div>
        <div className="box button-style">
          <b>STYLE</b>
          <div className="box2">
            <button
              className="example-b flash-b hover-b1"
              id="solid-b"
              onClick={toggleFlash}
            >
              <div className="ticked off">
                <BsFillCheckCircleFill />
              </div>
            </button>
            <button
              className="example-b borderd-b hover-b1"
              id="solid-b"
              onClick={toggleBorderd}
            >
              <div className="ticked off">
                <BsFillCheckCircleFill />
              </div>
            </button>
            <button
              className="example-b shadow-b hover-b1"
              id="solid-b"
              onClick={toggleShadow}
            >
              <div className="ticked off">
                <BsFillCheckCircleFill />
              </div>
            </button>
            <button
              className="example-b bottom-b hover-b1"
              id="solid-b"
              onClick={toggleBottom}
            >
              <div className="ticked off">
                <BsFillCheckCircleFill />
              </div>
            </button>
          </div>
        </div>
        <div className="box button-hover">
          <b>HOVER</b>
          <div className="box2">
            <button
              className="example-b con-examp hover-b1"
              id="solid-b"
              onClick={changeHover1}
            >
              <div className="ticked off">
                <BsFillCheckCircleFill />
              </div>
              <b>1</b>
            </button>
            <button
              className="example-b hover-b2"
              id="solid-b"
              onClick={changeHover2}
            >
              <div className="ticked off">
                <BsFillCheckCircleFill />
              </div>
              <b>2</b>
            </button>
            <button
              className="example-b hover-b3"
              id="solid-b"
              onClick={changeHover3}
            >
              <div className="ticked off">
                <BsFillCheckCircleFill />
              </div>
              <b>3</b>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
