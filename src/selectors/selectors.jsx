import React, { useState } from "react";
import Button from "../button/button";
import "./selectors.css";
import "../copy/copy.css";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { ImBlocked } from "react-icons/im";
import { ImHtmlFive, ImCss3 } from "react-icons/im";
import { MdSettingsSuggest } from "react-icons/md";

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
  const [borderd, setBorderd] = useState("");
  const [flash, setFlash] = useState("");
  const [bottom, setBottom] = useState("");
  const [shadow, setShadow] = useState("");
  const [text, setText] = useState("");

  const [primary, setPrimary] = useState("#29a7a7");
  const [secondary, setSecondary] = useState("#a172b4");
  const [textC, setTextC] = useState("#ffffff");
  const [bgT, setBgT] = useState(
    "background: linear-gradient(220.55deg, var(--color-primary) 0%, var(--color-secondary) 100%)"
  );
  const [txT, setTxT] = useState("");
  const [shT, setShT] = useState("");
  const [botT, setBotT] = useState("");
  const [borT, setBorT] = useState("");
  const [flashT, setFlashT] = useState("");
  const [hovT, setHovT] = useState("opacity: .4");

  const changeText0 = () => {
    setText("");
    setTxT("");
    document
      .querySelector(".example-b.text-b0")
      .children[0].classList.remove("off");
    setTimeout(() => {
      document
        .querySelector(".example-b.text-b0")
        .children[0].classList.add("off");
    }, 1000);
  };

  const changeText1 = () => {
    setText("text-b1");
    setTxT(" 3px 3px 5px rgba(0, 0, 0, 0.418)");
    document
      .querySelector(".example-b.text-b1")
      .children[0].classList.remove("off");
    setTimeout(() => {
      document
        .querySelector(".example-b.text-b1")
        .children[0].classList.add("off");
    }, 1000);
  };

  const changeText2 = () => {
    setText("text-b2");
    setTxT(" 0 2px rgba(0, 0, 0, 0.521)");
    document
      .querySelector(".example-b.text-b2")
      .children[0].classList.remove("off");
    setTimeout(() => {
      document
        .querySelector(".example-b.text-b2")
        .children[0].classList.add("off");
    }, 1000);
  };

  const changeHover0 = () => {
    setHover("");
    setHovT("");
    document
      .querySelector(".con-examp.hover-b0")
      .children[0].classList.remove("off");
    setTimeout(() => {
      document
        .querySelector(".con-examp.hover-b0")
        .children[0].classList.add("off");
    }, 1000);
  };

  const changeHover1 = () => {
    setHover("hover-b1");
    setHovT("opacity: .4");
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
    setHovT("transform: scale(1.1)");
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
    setHovT("transform: scale(.9)");
    document
      .querySelector(".example-b.hover-b3")
      .children[0].classList.remove("off");
    setTimeout(() => {
      document
        .querySelector(".example-b.hover-b3")
        .children[0].classList.add("off");
    }, 1000);
  };

  const changeHover4 = () => {
    setHover("hover-b4");
    setHovT(
      "box-shadow: inset -4px -4px 6px 0 rgba(255,255,255,.2), inset 4px 4px 6px 0 rgba(0, 0, 0, .4)"
    );
    document
      .querySelector(".example-b.hover-b4")
      .children[0].classList.remove("off");
    setTimeout(() => {
      document
        .querySelector(".example-b.hover-b4")
        .children[0].classList.add("off");
    }, 1000);
  };

  const changeHover5 = () => {
    setHover("hover-b5");
    setHovT("filter: grayscale(1)");
    document
      .querySelector(".example-b.hover-b5")
      .children[0].classList.remove("off");
    setTimeout(() => {
      document
        .querySelector(".example-b.hover-b5")
        .children[0].classList.add("off");
    }, 1000);
  };

  const changeHover6 = () => {
    setHover("hover-b6");
    setHovT("filter: blur(2px)");
    document
      .querySelector(".example-b.hover-b6")
      .children[0].classList.remove("off");
    setTimeout(() => {
      document
        .querySelector(".example-b.hover-b6")
        .children[0].classList.add("off");
    }, 1000);
  };

  const changeHover7 = () => {
    setHover("hover-b7");
    setHovT("filter: saturate(2)");
    document
      .querySelector(".example-b.hover-b7")
      .children[0].classList.remove("off");
    setTimeout(() => {
      document
        .querySelector(".example-b.hover-b7")
        .children[0].classList.add("off");
    }, 1000);
  };

  const changeHover8 = () => {
    setHover("hover-b8");
    setHovT("border-radius: 0px !important");
    document
      .querySelector(".example-b.hover-b8")
      .children[0].classList.remove("off");
    setTimeout(() => {
      document
        .querySelector(".example-b.hover-b8")
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
    setPrimary(c);
  };

  const changeSecCol = () => {
    let c = document.querySelector("input[name=sec-color]").value;
    document.documentElement.style.setProperty("--color-secondary-t", `${c}60`);
    document.documentElement.style.setProperty("--color-secondary", c);
    setSecondary(c);
  };

  const changeTextCol = () => {
    let c = document.querySelector("input[name=text-color]").value;
    document.documentElement.style.setProperty("--color-text", c);
    setTextC(c);
  };

  const changeBgDark = () => {
    setBgType("dark-b");
    setBgT(" #0000008c");
  };

  const changeBgSolid = () => {
    setBgType("solid-b");
    setBgT(" var(--color-primary)");
  };

  const changeBgTransparent = () => {
    setBgType("transparent-b");
    setBgT(" var(--color-primary-t)");
  };

  const changeBgRadial = () => {
    setBgType("radial-b");
    setBgT(
      " linear-gradient(220.55deg, var(--color-primary) 0%, var(--color-secondary) 100%)"
    );
  };

  const changeBgLineal = () => {
    setBgType("lineal-b");
    setBgT(
      " linear-gradient(0deg, var(--color-primary) 0%, var(--color-secondary) 100%)"
    );
  };

  const changeBgTranspLineal = () => {
    setBgType("transp-lineal-b");
    setBgT(" linear-gradient(0deg, var(--color-primary) 0%, #00000000 100%)");
  };

  const changeBgTranspRadial = () => {
    setBgType("transp-radial-b");
    setBgT(
      " linear-gradient(220.55deg, var(--color-primary-t) 0%, var(--color-secondary-t) 100%)"
    );
  };

  const toggleFlash = () => {
    document
      .querySelector(".example-b.flash-b")
      .children[0].classList.toggle("off");

    if (flash === "") {
      setFlash("flash-b");
      setFlashT(`
      .your-button:before {
        position: absolute;
        content: "";
        display: inline-block;
        top: -180px;
        left: 0;
        width: 30px;
        height: 100%;
        background-color: #fff;
        animation: shiny-btn1 4s ease-in-out infinite;
    }
    
    @keyframes shiny-btn1 {
        0% {
          -webkit-transform: scale(0) rotate(45deg);
          opacity: 0;
        }
        80% {
          -webkit-transform: scale(0) rotate(45deg);
          opacity: 0.5;
        }
        81% {
          -webkit-transform: scale(4) rotate(45deg);
          opacity: 1;
        }
        100% {
          -webkit-transform: scale(50) rotate(45deg);
          opacity: 0;
        }
      }
      `);
    } else {
      setFlash("");
      setFlashT("");
    }
  };

  const toggleBorderd = () => {
    document
      .querySelector(".example-b.borderd-b")
      .children[0].classList.toggle("off");

    if (borderd === "") {
      setBorderd("borderd-b");
      setBorT("border: 2px solid #0000009f;");
    } else {
      setBorderd("");
      setBorT("");
    }
  };

  const toggleBottom = () => {
    document
      .querySelector(".example-b.bottom-b")
      .children[0].classList.toggle("off");

    if (bottom === "") {
      setBottom("bottom-b");
      setBotT("  border-bottom: 4px solid var(--color-secondary);");
    } else {
      setBottom("");
      setBotT("");
    }
  };

  const changeShadow0 = () => {
    setShadow("");
    setShT("");
    document
      .querySelector(".example-b.shadow-b0")
      .children[0].classList.remove("off");
    setTimeout(() => {
      document
        .querySelector(".example-b.shadow-b0")
        .children[0].classList.add("off");
    }, 1000);
  };

  const changeShadow1 = () => {
    setShadow("shadow-b1");
    setShT(" 5px 5px 15px #0000006b");
    document
      .querySelector(".example-b.shadow-b1")
      .children[0].classList.remove("off");
    setTimeout(() => {
      document
        .querySelector(".example-b.shadow-b1")
        .children[0].classList.add("off");
    }, 1000);
  };

  const changeShadow2 = () => {
    setShadow("shadow-b2");
    setShT(
      " inset 2px 2px 2px 0px rgba(255,255,255,.5), 7px 7px 20px 0px rgba(0,0,0,.1), 4px 4px 5px 0px rgba(0,0,0,.1)"
    );
    document
      .querySelector(".example-b.shadow-b2")
      .children[0].classList.remove("off");
    setTimeout(() => {
      document
        .querySelector(".example-b.shadow-b2")
        .children[0].classList.add("off");
    }, 1000);
  };

  let copyCss = `
  
  .your-button {

    /* COLORS */
    --color-secondary: ${secondary};
    --color-secondary-t: ${secondary}60;
    --color-primary: ${primary};
    --color-primary-t: ${primary}60;
    --color-text: ${textC};


    color: var(--color-text);
    letter-spacing: 2px;
    font-weight: bold;
    backdrop-filter: blur(7px);
    cursor: pointer;
    transition: all 0.3s ease;
    overflow: hidden;
    border: none;

    border-radius: ${radius}px;
    font-size: ${size}px;
    padding: ${size * 1.2}px;
    background: ${bgT};
    text-shadow: ${txT};
    box-shadow: ${shT};
    ${botT}
    ${borT}
}

.your-button:hover {
    ${hovT};
}

${flashT}
  
  `;

  let copyHtml = `
  <button class="your-button" >
      BUTTON
  </button>
  `;

  const letCopyCss = () => {
    navigator.clipboard.writeText(copyCss);
    const alr = document.querySelector(".copy-css");
    alr.classList.add("in");
    setTimeout(() => {
      alr.classList.remove("in");
    }, 1500);
  };

  const letCopyHtml = () => {
    navigator.clipboard.writeText(copyHtml);
    const alr = document.querySelector(".copy-html");
    alr.classList.add("in");
    setTimeout(() => {
      alr.classList.remove("in");
    }, 1500);
  };

  return (
    <>
      <Button
        shadow={shadow}
        bgType={bgType}
        size={size}
        radius={radius}
        hover={hover}
        styles={`${flash} ${borderd} ${bottom}`}
        text={text}
      />

      <div className="copy-container">
        <p>COPY</p>
        <div className="copy" onClick={letCopyHtml}>
          <ImHtmlFive />
          <span class="tooltip">Copy HTML</span>
        </div>
        <div className="copy" onClick={letCopyCss}>
          <ImCss3 />
          <span class="tooltip">Copy CSS</span>
        </div>
      </div>
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
              className="example-b con-examp hover-b0"
              id="solid-b"
              onClick={changeHover0}
            >
              <div className="ticked off">
                <BsFillCheckCircleFill />
              </div>
              <b>
                <ImBlocked />
              </b>
            </button>
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
            <button
              className="example-b hover-b4"
              id="solid-b"
              onClick={changeHover4}
            >
              <div className="ticked off">
                <BsFillCheckCircleFill />
              </div>
              <b>4</b>
            </button>
            <button
              className="example-b hover-b5"
              id="solid-b"
              onClick={changeHover5}
            >
              <div className="ticked off">
                <BsFillCheckCircleFill />
              </div>
              <b>5</b>
            </button>
            <button
              className="example-b hover-b6"
              id="solid-b"
              onClick={changeHover6}
            >
              <div className="ticked off">
                <BsFillCheckCircleFill />
              </div>
              <b>6</b>
            </button>
            <button
              className="example-b hover-b7"
              id="solid-b"
              onClick={changeHover7}
            >
              <div className="ticked off">
                <BsFillCheckCircleFill />
              </div>
              <b>7</b>
            </button>
            <button
              className="example-b hover-b8"
              id="solid-b"
              onClick={changeHover8}
            >
              <div className="ticked off">
                <BsFillCheckCircleFill />
              </div>
              <b>8</b>
            </button>
          </div>
        </div>
        <div className="box button-shadow">
          <b>SHADOW</b>
          <div className="box2">
            <button
              className="example-b hover-b1 shadow-b0"
              id="solid-b"
              onClick={changeShadow0}
            >
              <div className="ticked off">
                <BsFillCheckCircleFill />
              </div>
              <b>
                <ImBlocked />
              </b>
            </button>
            <button
              className="example-b hover-b1 shadow-b1"
              id="solid-b"
              onClick={changeShadow1}
            >
              <div className="ticked off">
                <BsFillCheckCircleFill />
              </div>
              <b>1</b>
            </button>
            <button
              className="example-b hover-b1 shadow-b2"
              id="solid-b"
              onClick={changeShadow2}
            >
              <div className="ticked off">
                <BsFillCheckCircleFill />
              </div>
              <b>2</b>
            </button>
          </div>
        </div>
        <div className="box button-text">
          <b>TEXT SHADOW</b>
          <div className="box2">
            <button
              className="example-b hover-b1 text-b0"
              id="solid-b"
              onClick={changeText0}
            >
              <div className="ticked off">
                <BsFillCheckCircleFill />
              </div>
              <b>
                <ImBlocked />
              </b>
            </button>
            <button
              className="example-b hover-b1 text-b1"
              id="solid-b"
              onClick={changeText1}
            >
              <div className="ticked off">
                <BsFillCheckCircleFill />
              </div>
              <b className="text-b1">1</b>
            </button>
            <button
              className="example-b hover-b1 text-b2"
              id="solid-b"
              onClick={changeText2}
            >
              <div className="ticked off">
                <BsFillCheckCircleFill />
              </div>
              <b className="text-b2">2</b>
            </button>
          </div>
        </div>
        <h4>
          try{" "}
          <a href="https://glowing-paprenjak-aa0225.netlify.app/">
            nav<b>creator</b>
            <MdSettingsSuggest />
          </a>
        </h4>
      </div>
      <span className="copy-done copy-html">HTML copied to clipboard</span>
      <span className="copy-done copy-css">CSS copied to clipboard</span>
    </>
  );
}
