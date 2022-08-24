import React from 'react'
import { Chart } from "react-google-charts";



const ConsoleGraph = (props) => {
   const data = [
    ["Consoles", "Units Sold"],
    ["Xbox360", 11],
    ["PS3", 2],
    ["Wii", 2],
    ["PS4", 2],
    ["XboxOne", 7],
    ["PC", 7],
    ["SNES", 7],
    ["GB", 7],
    ["3DS", 7],
  ];
  
   const options = {
    title: "Number of game copies sold globally since 2013",
  };
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  )
}

export default ConsoleGraph;