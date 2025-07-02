import React from "react";

export default function Synonyms(props) {
  if (props.synonyms && props.synonyms.length > 0) {
    return (
      <p>
        <strong>Synonyms:</strong> {props.synonyms.join(", ")}
      </p>
    );
  } else {
    return null;
  }
}
