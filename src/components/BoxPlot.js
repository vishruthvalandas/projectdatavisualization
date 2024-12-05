import React from "react";
import Plot from "react-plotly.js";
import data from '../csvjson.json'

const BoxPlot = (props) => {
  

  return (
    <div>
      <h2>{props.SelectedValue} Box Plot</h2>
      <Plot
        data={[
          {
            y: data.map((x)=>{return x[props.SelectedValue]}),
            type: "box",
            name: `${props.SelectedValue}Levels`,
            marker: { color: "blue" },
          },
        ]}
        layout={{
          title: `Box Plot`,
          yaxis: {
            title: `${props.SelectedValue}`,
            zeroline: false,
          },
          xaxis: {
            title: "Observations",
          },
          plot_bgcolor: "rgba(0,0,0,0)", // Transparent plot area
          paper_bgcolor: "rgba(0,0,0,0)", // Transparent overall background
        }}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default BoxPlot;
