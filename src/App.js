/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react"
import "./App.css"
import axios from "axios"
import MainContainer from "./components/MainContainer"
import Spinner from "./components/Spinner"

const App = () => {
  const [characters, setCharacters] = useState([])
  const [selectedCharacter, setSelectedCharacter] = useState(null)
  const [query, setQuery] = useState("")
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
    setSearch(query)
  }

  const fetchCharacters = () => {
    let url

    if (search) {
      url = `https://rickandmortyapi.com/api/character/?name=${search}`
    } else {
      url = `https://rickandmortyapi.com/api/character/`
    }
    axios
      .get(url)
      .then(resp => resp.data)
      .then(data => {
        setLoading(false)
        setCharacters(data.results)
      })
  }

  useEffect(() => {
    fetchCharacters()
  }, [fetchCharacters, search])

  return loading ? (
    <div className="App">
      <Spinner />
    </div>
  ) : (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          placeholder="rick, morty, etc"
          value={query}
          onChange={e => setQuery(e.target.value)}
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
