import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import ConsoleGraph from './components/ConsoleGraph/ConsoleGraph';
import GenreGraph from './components/GenreGraph/GenreGraph';


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
      <ConsoleGraph games = {games} />
      <GenreGraph />
    </div>
  );
}

export default App;
