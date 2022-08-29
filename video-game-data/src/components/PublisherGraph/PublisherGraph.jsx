import React, { useState } from "react";
import { Chart } from "react-google-charts";
import './PublisherGraph.css'


const PublisherGraph = ({games}) => {

    const [platform, setConsole] = useState('')


    function generateData(){

        let gamesByPlatform = games.filter(game => game.platform.includes(platform));
  
        let publishers = gamesByPlatform.map(game => game.publisher);
  
        let distinctPublishers = [...new Set(publishers)]
        console.log('DistinctPublisher', distinctPublishers)
  
        let publisherArrays = distinctPublishers.map(publisher => {
  
          let allGamesForPublisher = gamesByPlatform.filter(game => game.publisher === publisher)
  
          let sum = 0
          allGamesForPublisher.forEach((game) => {
            if(sum + game.globalsales >= 4){
                sum = sum + game.globalsales
            }
          });
          
          return [publisher, sum]
        
        });
  
        const data = [
        ["Publishers", "Units Sold"],
        ...publisherArrays
      ];
      return data;
      }
      const options = {
        title: `Top Selling Publishers on ${platform}`,
        is3D: true
      };
      return (
        <>
        <select 
        name="consoles" 
        id="console-select"
        value={platform}
        onChange={(event) => {
            const selectedConsole = event.target.value;
            setConsole(selectedConsole)
        }}>

            <option value='' disabled>Choose a console</option>
            <option value="PS4">PS4</option>
            <option value="PS3">PS3</option>
            <option value="PS2" selected>PS2</option>
            <option value="X360">Xbox360</option>
            <option value="Wii">Wii</option>
            <option value="DS">Nintendo DS</option>
            <option value="XOne">Xbox One</option>
        </select>
        <Chart
          className='PieChart'
          chartType="PieChart"
          data={generateData()}
          options={options}
          width={"80%"}
          height={"400px"}
        />
         </>
         
      )
      }
  
      export default PublisherGraph;