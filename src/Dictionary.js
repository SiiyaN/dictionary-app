import React, { useState } from "react";
import axios from "axios";
import Meaning from "./Meaning.js";
import "./App.css";

export default function Dictionary() {
  let [word, setWord] = useState("");
  let [results, setResults] = useState(null);

  function handleWordChange(event) {
    setWord(event.target.value);
  }

  function handleResponse(response) {
    setResults(response.data);
  }

  function search(event) {
    event.preventDefault();
    if (word) {
      let key = "f063aad8tb9d2a804775off7e6bf14bb";
      let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${key}`;
      axios
        .get(apiUrl)
        .then(handleResponse)
        .catch(function (error) {
          console.error("Error fetching the definition:", error);
        });
    }
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

      {results ? (
        results.meanings ? (
          results.meanings.map(function (meaning, index) {
            return <Meaning meaning={meaning} key={index} />;
          })
        ) : (
          <p>No definitions found for this word.</p>
        )
      ) : null}
    </div>
  );
}
