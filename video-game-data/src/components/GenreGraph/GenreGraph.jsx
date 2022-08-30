import React from 'react'
import { Chart } from "react-google-charts";

const GenreGraph = ({games}) => {

    function generateData(){

      let gamesByGenre = games.filter(game => game.genre.includes('Racing'))

        console.log(gamesByGenre)
      let topGames = gamesByGenre.filter(game => game.globalsales >= 8)

      let shooterGamesArrays = topGames.map(game => {

        return [game.name, game.globalsales]
      })


        const data = [
        ["Game", "Units Sold in Millions"],
        ...shooterGamesArrays
        
      ];
      return data;
    }
     
     const options = {
        title: "Top 10 Racing Games of All Time",
        chartArea: { width: "50%" },
        colors: ["#041d36"],
        hAxis: {
          title: "Units Sold in Millions",
          minValue: 0,
        },
        vAxis: {
          
        },
      };
  return (
    <Chart
      chartType="BarChart"
      width={"85%"}
      height={"400px"}
      data={generateData()}
      options={options}
    />
  );
}

export default GenreGraph;