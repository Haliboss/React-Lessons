import { useState } from "react";

const KeyboardClipboard = () => {
  const [inputValue, setİnputValue] = useState("");
  const [textareaValue, setTextareaValue] = useState("");

  const handleKeyDown = (e) => {
    /* console.log(e.keyCode) */ if (e.keyCode >= 48 && e.keyCode <= 57) {
      alert("Please dont enter a number");
      e.preventDefault();
    }

    e.keyCode === 13 && setİnputValue("");
  };

  const handleAreaPaste = (e) => {
    console.log(e.target.value);
    e.target.value += e.clipboardData.getData("text").toUpperCase();
    e.target.style.border = "2px solid red";
    e.preventDefault();
  };

  const resetValue = (e) => {
    console.log(e.target.value);
    setTextareaValue(e.target.value);
    e.target.value === ""
      ? (e.target.style.border = "none")
      : (e.target.style.border = "2px solid red");
  };

  return (
    <div className="container text-center ">
      <h1>CLIPBOARD EVENTS</h1>
      <input
        className="form-control"
        type="text"
        value={inputValue}
        onChange={(e) => {
          e.target.value = e.target.value.toUpperCase();
          setİnputValue(e.target.value);
        }}
        onKeyDown={handleKeyDown}
      />
      <p className="text-start mt-4" onCopy={(e)=> {
        alert('You can not copy this doc');
        e.preventDefault();
      }} >{inputValue}</p>

      <textarea
        className="form-control resetArea"
        name="area"
        id="area"
        rows="10"
        onPaste={handleAreaPaste}
        value={textareaValue}
        onChange={resetValue}
      ></textarea>
    </div>
  );
};

export default KeyboardClipboard;
