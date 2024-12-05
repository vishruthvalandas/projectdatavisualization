import React, { useEffect } from "react";
import { Radar } from "react-chartjs-2";
import Data1 from '../../csvjson.json';

import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
}from 'chart.js'
ChartJS.register(ArcElement,Tooltip,Legend)
function Radar1(props) {
    const RadarData = {
        labels: props.labels,
        datasets: [
          {
            label: "Relative",
            
            backgroundColor: "rgba(243,184,204, .2)",
            borderColor: "#D91656",
            pointBackgroundColor: "rgba(34, 202, 236, 1)",
            poingBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(34, 202, 236, 1)",
            data: props.data1.map((x)=>{
            return x['Relative']})
          },
          {
            label: "Outdoor",
            backgroundColor: "rgba(34, 202, 236, .2)",
            borderColor: "rgba(34, 202, 236, 1)",
            pointBackgroundColor: "rgba(34, 202, 236, 1)",
            poingBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(34, 202, 236, 1)",
            data: props.data1.map((x)=>{
            return x['Outdoor']})
          }
        ]
      };
      const RadarOptions = {
        scale: {
          ticks: {
            min: 0,
            max: 20,
            stepSize: 5,
            showLabelBackdrop: false,
            backdropColor: "rgba(203, 197, 11, 1)",
            
            maxTicksLimit: 3
          },
          angleLines: {
            color: "rgba(255, 255, 255, .3)",
            lineWidth: 1
          },
          gridLines: {
            display:false
          }
        }
      };
      

  
  return (
    <div className="chart-container d-flex justify-content-center align-items-center" style={{width: "80%", height: "290px"}} >
      <Radar data={RadarData} options={RadarOptions} />
    </div>
  );
}
export default Radar1;