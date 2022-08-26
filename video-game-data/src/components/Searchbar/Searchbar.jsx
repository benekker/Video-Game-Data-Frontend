import React, { useState } from 'react'
import SearchResults from '../SearchResults/SearchResults';
import './Searchbar.css'

const Searchbar = ({games}) => {

    const [search, setSearch] = useState('')
    const [filteredGames, setFilteredGames] = useState([]);

    function handleSearch (event){
        event.preventDefault();
        setFilteredGames(games.filter(game => game.name.includes(search)))

    }

  return (
    <div>
      <input className ='search-bar' type="text" placeholder="search..."  value={search} onChange={(event) => setSearch(event.target.value)}/>
      <button className='search-button' onClick={handleSearch}>Search</button>
      <SearchResults filteredGames = {filteredGames}/>
    </div>
  )
}

export default Searchbar