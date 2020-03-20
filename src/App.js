import React, { useState, useEffect } from "react"
import "./App.css"
import axios from "axios"
import MainContainer from "./components/MainContainer"

const App = () => {
  const [characters, setCharacters] = useState([])
  const [selectedCharacter, setSelectedCharacter] = useState(null)

  useEffect(() => {
    fetchCharacters()
  }, [])

  function fetchCharacters() {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(resp => resp.data)
      .then(data => setCharacters(data.results))
  }

  function chooseCharacter(id) {
    const character = characters.find(c => c.id === id)
    setSelectedCharacter(character)
  }

  return (
    <div className="App">
      <h1>Rick and Morty Characters</h1>
      <MainContainer characters={characters} />
    </div>
  )
}

export default App
