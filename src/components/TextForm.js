import React, { useState } from "react";
import "../App.css";

export default function TextForm(props) {
  const [text, setText] = useState("Enter some text Here");
  const [upperText, setUpperText] = useState("");
  const [lowerText, setLowerText] = useState("");

  const handleClick = (event) => {
    const buttonId = event.target.id;

    if (buttonId === "b1") {
      // Convert to Uppercase
      setUpperText(text.toUpperCase());
    } else if (buttonId === "b2") {
      // Convert to Lowercase
      setLowerText(text.toLowerCase());
    }
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <h1>{props.h1}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="mybox"
          rows="9"
          value={text}
          onChange={handleChange}
        ></textarea>
      </div>
      <button className="btn btn-primary" id="b1" onClick={handleClick}>
        Convert to Uppercase
      </button>
      <br />
      <br />
      <mark>UpperCase</mark>
      <br />
      <textarea
        value={upperText}
        rows="4"
        cols="100"
        id="uppercaseText"
        readOnly
      ></textarea>
      <br />
      <br />
      <button className="btn btn-primary" id="b2" onClick={handleClick}>
        Convert to Lowercase
      </button>
      <br />
      <br />
      <mark>LowerCase</mark>
      <br />
      <textarea
        value={lowerText}
        rows="4"
        cols="100"
        id="lowercaseText"
        readOnly
      ></textarea>
    </>
  );
}
