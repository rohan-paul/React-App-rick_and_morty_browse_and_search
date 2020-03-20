import React, { useState, useEffect } from "react"
import "./App.css"
import axios from "axios"
import MainContainer from "./components/MainContainer"
import Search from "./Search"
import Spinner from "./components/Spinner"

const App = () => {
  const [characters, setCharacters] = useState([])
  const [selectedCharacter, setSelectedCharacter] = useState(null)

  useEffect(() => {
    fetchCharacters()
  }, [])

  const fetchCharacters = () => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(resp => resp.data)
      .then(data => setCharacters(data.results))
  }

  return (
    <div className="App">
      <form>
        <input
          className="input"
          type="text"
          placeholder="rick, morty, jerry, etc"
          // value={query}
          // onChange={e => setQuery(e.target.value)}
        ></input>
        <button type="submit" className="button">
          Search
        </button>
      </form>
      <h1>Rick and Morty Characters</h1>
      <MainContainer characters={characters} />
    </div>
  )
}

export default App
