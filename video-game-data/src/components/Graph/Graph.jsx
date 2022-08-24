import React from 'react'
import { Chart } from "react-google-charts";



const Graph = (props) => {
  return (
    

    <Chart
    chartType="ScatterChart"
    data={[["Age", "Weight"], [4, 5.5], [8, 12]]}
    width= "80%"
    height="400px"
    legendToggle
    />
  )
}

export default Graph;