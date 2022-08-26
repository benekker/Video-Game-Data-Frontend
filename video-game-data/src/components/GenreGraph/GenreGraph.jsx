import React from 'react'
import { Chart } from "react-google-charts";

const GenreGraph = ({games}) => {

    function generateData(){

      let gamesByGenre = games.filter(game => game.genre.includes('Shooter'))

        console.log(gamesByGenre)
      let topGames = gamesByGenre.filter(game => game.globalsales >= 12.14)

      let shooterGamesArrays = topGames.map(game => {

        return [game.name, game.globalsales]
      })


        const data = [
        ["Game", "Units sold in millions"],
        ...shooterGamesArrays
        
      ];
      return data;
    }
     
     const options = {
        title: "Top 10 Shooter Games of All Time",
        chartArea: { width: "50%" },
        colors: ["#582fa3"],
        hAxis: {
          title: "Units Sold in Millions",
          minValue: 0,
        },
        vAxis: {
          title: "Game Title",
        },
      };
  return (
    <Chart
      chartType="BarChart"
      width={"100%"}
      height={"400px"}
      data={generateData()}
      options={options}
    />
  );
}

export default GenreGraph;