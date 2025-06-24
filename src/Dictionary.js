import React, { useState } from "react";
import axios from "axios";
import "./App.css";

export default function Dictionary() {
  let [word, setWord] = useState("");

  function handleWordChange(event) {
    console.log(event.target.value);
    setWord(event.target.value);
  }

  function handleResponse(response) {
    console.log(response.data);
  }

  function search(event) {
    event.preventDefault();
    alert("Please Wait...");

    let key = "f063aad8tb9d2a804775off7e6bf14bb";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${key}`;
    axios.get(apiUrl).then(handleResponse);
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
          Searching for: <strong>{word}</strong>
        </p>
      )}
    </div>
  );
}
