import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import ConsoleGraph from './components/ConsoleGraph/ConsoleGraph';
import GenreGraph from './components/GenreGraph/GenreGraph';
import Searchbar from './components/Searchbar/Searchbar';
import Navbar from './components/Navbar/Navbar';
import PublisherGraph from './components/PublisherGraph/PublisherGraph';


function App() {

  const [games, setGames] = useState([])

  useEffect(() => {
    fetchGames();
  }, []);

  async function fetchGames(){
    try{
      const response = await axios.get('http://localhost:8080/all');
      setGames(response.data);
      console.log(response.data)
    } catch (error){
      console.log(error.message)
    }
  };

  return (
    <div className="App">
      <Navbar id='nav' className='Navbar' />
      <div id='graphs' className='Graphs'>
        <ConsoleGraph games = {games} />
        <GenreGraph games = {games}/>
        <PublisherGraph games = {games}/>
      </div>
      <div id='search'>
        <Searchbar games = {games}/>
      </div>
    </div>
  );
}

export default App;
