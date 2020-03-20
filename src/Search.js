/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Spinner from "./components/Spinner"
import axios from "axios"
import "./App.css"

function Search() {
  const [data, setData] = useState({})
  const [query, setQuery] = useState("")
  const [search, setSearch] = useState("")
  const [loading, setLoading] = useState(true)

  const handleSubmit = e => {
    e.preventDefault()
    setSearch(query)
  }

  const searchCharacter = async () => {
    console.log("searching...")
    let queryString = ""
    const page = Math.floor(Math.random() * 19) + 1

    if (search) {
      queryString = `?name=${search}`
    } else {
      queryString = `?page=${page}`
    }

    const result = await axios(
      `https://rickandmortyapi.com/api/character/${queryString}`,
    )

    setData(result.data)
    setLoading(false)
  }

  useEffect(() => {
    searchCharacter()
  }, [search, searchCharacter])

  return loading ? (
    <Spinner />
  ) : (
    <div className="results-wrapper">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="rick, morty, jerry, etc"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <div className="results">
        <ul>
          {data.results.map(item => (
            <li key={item.id}>
              <Link to={`/details/${item.id}`}>
                <img alt={item.name} src={item.image} />
                <span className="name"> {item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Search
