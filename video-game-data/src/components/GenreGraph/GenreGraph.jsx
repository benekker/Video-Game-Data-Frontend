import React from 'react'
import { Chart } from "react-google-charts";

const GenreGraph = () => {
     const data = [
        ["Game", "Units sold in millions"],
        ["Duck Hunt", 8008000],
        ["Call of Duty: Modern Warfare 3", 3694000],
        ["Call of Duty: Black Ops", 2896000],
        ["Call of Duty: Black Ops 3", 1953000],
        ["Call of Duty: Black Ops II", 1517000],
      ];
      
     const options = {
        title: "Top Selling Shooter Games of All Time",
        chartArea: { width: "50%" },
        colors: ["#b0120a", "#ffab91"],
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
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}

export default GenreGraph;