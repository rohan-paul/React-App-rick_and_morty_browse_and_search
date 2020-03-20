import React, { useState, useEffect } from "react"
import axios from "axios"
import Character from "./Character"

const App = () => {
  const [characters, setCharacters] = useState([])
  const [selectedCharacter, setSelectedCharacter] = useState(null)

  useEffect(() => {
    fetchCharacters()
  }, [])

  function fetchCharacters() {
    axios("https://rickandmortyapi.com/api/character/")
      .then(resp => resp.data)
      .then(data => setCharacters(data.results))
  }

  function chooseCharacter(id) {
    const character = characters.find(c => c.id === id)
    setSelectedCharacter(character)
  }

  return (
    <div className="flex flex-col align-center justify-center">
      <h1 className="text-5xl text-center text-green-700 mb-6">
        Rick and Morty Characters
      </h1>

      <div className="container mx-auto px-10 justify-center">
        {/* show the selected character */}
        {selectedCharacter && (
          <div className="bg-green-100 p-10 shadow-lg mb-12 text-center">
            <h3 className="text-3xl text-green-800">Your Chosen Character</h3>
            <Character character={selectedCharacter} />
          </div>
        )}

        {/* show the list of characters */}
        <div className="flex flex-wrap">
          {characters.map((character, index) => (
            <Character
              key={index}
              character={character}
              chooseCharacter={chooseCharacter}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
