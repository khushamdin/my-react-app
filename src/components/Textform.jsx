import React, { useState } from 'react';

export default function Textform(props) {
  const [text, setText] = useState('');

  const handleUpclick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoclick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClear = () => {
    setText('');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    alert('Text copied to clipboard!');
  };

  const handleOnchange = (event) => {
    setText(event.target.value);
  };

  const wordCount = text.trim().length > 0 ? text.trim().split(/\s+/).length : 0;

  // Dynamic styles for dark mode
  const textStyle = {
    backgroundColor: props.mode ? '#333333' : 'white', // Dark background in dark mode
    color: props.mode ? 'white' : 'black', // White text in dark mode
  };

  const buttonStyle = {
    backgroundColor: props.mode ? '#444444' : '#007bff',
    color: 'white',
  };

  const summaryStyle = {
    backgroundColor: props.mode ? '#444444' : 'white', // Ensure contrast for summary background
    color: props.mode ? 'white' : 'black', // Adapt text color based on mode
    padding: '10px',
    borderRadius: '5px',
  };

  return (
    <div style={{ color: props.mode ? 'white' : 'black' }}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnchange}
          style={textStyle}
          id="mybox"
          rows="8"
          placeholder="Enter your text here..."
        ></textarea>
        <button
          className="btn mx-1 my-2"
          onClick={handleUpclick}
          style={buttonStyle}
          disabled={text.length === 0}
        >
          Convert to Uppercase
        </button>
        <button
          className="btn mx-1 my-2"
          onClick={handleLoclick}
          style={buttonStyle}
          disabled={text.length === 0}
        >
          Convert to Lowercase
        </button>
        <button
          className="btn mx-1 my-2"
          onClick={handleClear}
          style={buttonStyle}
          disabled={text.length === 0}
        >
          Clear Text
        </button>
        <button
          className="btn mx-1 my-2"
          onClick={handleCopy}
          style={buttonStyle}
          disabled={text.length === 0}
        >
          Copy Text
        </button>
      </div>
      <div className="container my-3" style={summaryStyle}>
        <h2>Your Text Summary</h2>
        <p>
          <strong>{wordCount}</strong> words and <strong>{text.length}</strong> characters
        </p>
      </div>
    </div>
  );
}
