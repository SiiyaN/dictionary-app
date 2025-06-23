import React, { useState } from "react";
import "./App.css";

export default function Dictionary() {
  let [word, setWord] = useState("");

  function search(event) {
    event.preventDefault();
    alert("Please Wait...");
  }

  function handleWordChange(event) {
    console.log(event.target.value);
    setWord(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="Search for a word..."
          onChange={handleWordChange}
        />
      </form>

      {word && (
        <p className="searching">
          Searcing for: <strong>{word}</strong>
        </p>
      )}
    </div>
  );
}
