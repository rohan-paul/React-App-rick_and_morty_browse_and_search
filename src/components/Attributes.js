import React from "react";

export default function Attributes(props) {
  const { character } = props;
  return (
    <div className="attributes-container">
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
      <p>Gender: {character.gender}</p>
    </div>
  );
}
