import React, { useState } from "react";
import axios from "axios";
import "./App.css";

export default function Dictionary() {
  let [word, setWord] = useState("");

  function search(event) {
    event.preventDefault();
    alert("Please Wait...");

    let key = "f063aad8tb9d2a804775off7e6bf14bb";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${key}`;
    axios.get(url).then(handleResponse);
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
    </div>
  );
}
