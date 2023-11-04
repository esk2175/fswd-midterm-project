import React, { useState } from "react";

function InputNote(props) {
  //The state variables of the fields in the input box
  const [inputTitle, setInputTitle] = useState("");
  const [inputContent, setInputContent] = useState("");

  //Updates computer on what's currently inside title and text
  function handleChangeTitle(event) {
    setInputTitle(event.target.value);
  }
  function handleChangeContent(event) {
    setInputContent(event.target.value);
  }

  //Function when note is submitted
  function handleSubmit(event) {
    const newNoteDict = {
      title: inputTitle,
      content: inputContent
    };

    props.addFunc(newNoteDict);

    //Resets input fields
    setInputTitle("");
    setInputContent("");

    //Prevents on screen form refreshing
    event.preventDefault();
  }

  return (
    <div id="inputNoteDiv">
      <form className="note">
        <input
          onChange={handleChangeTitle}
          type="text"
          placeholder="Add title here..."
          value={inputTitle}
          id="inputTitle"
        />
        <textarea
          onChange={handleChangeContent}
          type="text"
          placeholder="Add text here..."
          value={inputContent}
          id="inputText"
        />
        <button className="button" id="addButton" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default InputNote;
