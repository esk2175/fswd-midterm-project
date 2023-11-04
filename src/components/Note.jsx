import React from "react";

function Note(props) {
  const currentNoteKey = props.keyVal;

  function handleClick() {
    props.deleteFunc(currentNoteKey);
  }

  return (
    <div className="note">
      <button className="button" id="deleteButton" onClick={handleClick}>
        X
      </button>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>
  );
}

export default Note;
