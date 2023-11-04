import React from "react";

function ClearAllButton(props) {
  function handleClick() {
    props.clearFunc();
  }

  return (
    <div>
      <button className="button" id="clearButton" onClick={handleClick}>
        Clear Notes
      </button>
    </div>
  );
}

export default ClearAllButton;
