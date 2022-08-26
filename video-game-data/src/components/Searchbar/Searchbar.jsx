import React, { useState } from 'react'
import SearchResults from '../SearchResults/SearchResults';

const Searchbar = ({games}) => {

    const [search, setSearch] = useState('')
    const [filteredGames, setFilteredGames] = useState([]);

    function handleSearch (event){
        event.preventDefault();
        setFilteredGames(games.filter(game => game.name.includes(search)))

    }

  return (
    <div>
        <form onSubmit={handleSearch}>
            <input className ='search-bar' type="text" placeholder="search..."  value={search} onChange={(event) => setSearch(event.target.value)}/>
            <button className='search-button' type="submit">Search</button>
        </form>
        <SearchResults filteredGames = {filteredGames}/>
    </div>
  )
}

export default Searchbar