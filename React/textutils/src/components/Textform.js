import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    // console.log("Upperacase was clicked" +text)
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handlelowClick = () => {
    // console.log("Upperacase was clicked" +text)
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleclearClick = () => {
    let newText = '';
    setText(newText);
  };

  const handlecolClick = () => {
    let clr = document.getElementById("myBox").style.backgroundColor ="red";
    setColor(clr);
  };
  const handlefonClick = () => {
    let newfont = document.getElementById("myBox").style.fontFamily = "cursive";
    setFont(newfont);
  };
 
  const handleOnChange = (event) => {
    //console.log("On change")
    setText(event.target.value);
  };
  
  const[Color, setColor] = useState("")
  const [text, setText] = useState(" ");
  const[font, setFont] = useState("")
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to uppercase</button>
          <button className="btn btn-primary mx-1" onClick={handlelowClick}>
          Convert to lowercase</button>
          <button className="btn btn-primary mx-1" onClick={handleclearClick}>
          Clear</button>
          <button className="btn btn-primary mx-1" value ={Color} onClick={handlecolClick}>
          Change text area to red</button>
          <button className="btn btn-primary mx-1"  value ={font}  onClick={handlefonClick}>
          Change font </button>
        
         
        
      </div>
      <div className="container my-3">
        <h2>Your text summary</h2>
        <p> {text.split(" ").length} words and   {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
 