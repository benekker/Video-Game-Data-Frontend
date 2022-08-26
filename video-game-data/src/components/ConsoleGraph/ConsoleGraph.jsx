import React from 'react'
import { Chart } from "react-google-charts";
import './ConsoleGraph.css'



const ConsoleGraph = ({games}) => {

    function generateData(){


      let gamesByYear = games.filter(game => game.year >= 2013);

      let platforms = gamesByYear.map(game => game.platform);

      let distinctPlatforms = [...new Set(platforms)]
      console.log('DistinctPlatform', distinctPlatforms)

      let platformArrays = distinctPlatforms.map(platform => {

        let allGamesForPlatform = gamesByYear.filter(game => game.platform == platform)

        let sum = 0
        allGamesForPlatform.forEach((game) => {
          sum = sum + game.globalsales
        });

        return [platform, sum]
      });



      const data = [
      ["Consoles", "Units Sold"],
      ...platformArrays
    ];
    return data;
    }
    const options = {
      title: "Number of game copies sold globally since 2013 in millions",
    };
    return (
      <Chart
        className='PieChart'
        chartType="PieChart"
        data={generateData()}
        options={options}
        width={"80%"}
        height={"400px"}
      />
    )
    }

    export default ConsoleGraph;