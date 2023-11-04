import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import InputNote from "./InputNote";
import ClearAllButton from "./ClearAllButton";
import Footer from "./Footer";

function App() {
  //The state variable array which is updated on the screen
  const [displayArray, setDisplayArray] = useState([]);

  //Function to update displayArray
  function addNote(newNote) {
    //Makes a new temporary variable because
    //state variable displayArray doesn't recognize state update
    //unless reference updates as well (done here by giving a reference
    //to newly updated state variable)
    setDisplayArray((prevNotes) => {
      const newArr = [...prevNotes, newNote];
      return newArr;
    });
  }

  //Function to delete note by rerendering displayArray
  //after filtering deleted note out
  function deleteNote(keyNum) {
    //Filters out note item in same index
    const updatedArray = displayArray.filter(
      (noteItem, index) => index !== keyNum
    );

    setDisplayArray(updatedArray);
  }

  //Function to clear all notes out
  function clearNotes() {
    setDisplayArray([]);
  }

  return (
    <div>
      <img
        src="https://vignette.wikia.nocookie.net/gameofthrones/images/8/85/Lannister_shield.png/revision/latest?cb=20151129115806&path-prefix=lt"
        id="backgroundImage"
      />
      <Header />
      <div id="inputNoteRowOuterContainer">
        <div id="inputNoteRow">
          <InputNote addFunc={addNote} />
          <ClearAllButton clearFunc={clearNotes} />
        </div>
      </div>
      {displayArray.map((noteItem, index) => {
        //Rerenders notes with new key number equal to index
        return (
          <Note
            key={index}
            keyVal={index} //Used to access keyvalue since key is not a prop
            title={noteItem.title}
            content={noteItem.content}
            deleteFunc={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
