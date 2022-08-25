import React from 'react'
import { Chart } from "react-google-charts";

const GenreGraph = () => {
     const data = [
        ["Game", "Units sold in millions"],
        ["Duck Hunt", 18],
        ["Call of Duty: Modern Warfare 3", 14.76],
        ["Call of Duty: Black Ops", 14.64],
        ["Call of Duty: Black Ops 3", 14.24],
        ["Call of Duty: Black Ops II", 14.03],
      ];
      
     const options = {
        title: "Top Selling Shooter Games of All Time",
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
      data={data}
      options={options}
    />
  );
}

export default GenreGraph;