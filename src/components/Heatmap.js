import React, { useEffect, useState } from "react";
import Plot from "react-plotly.js";

const Heatmap = () => {
  const [correlationMatrix, setCorrelationMatrix] = useState([]);
  const [variableNames, setVariableNames] = useState([]);

  // Load preprocessed correlation matrix from backend
  
  useEffect(() => {
    fetch("/correlation_matrix.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const keys = Object.keys(data); // Extract variable names
        const matrix = keys.map((key) => keys.map((subkey) => data[key][subkey]));
        setVariableNames(keys);
        setCorrelationMatrix(matrix);
      })
      .catch((error) => {
        console.error("Error fetching correlation matrix:", error);
      });
  }, []);
  

  return (
    <div>
      <h2>Correlation Matrix Heatmap</h2>
      <div style={{width:"750px",height:"800px"}}>
      {correlationMatrix.length > 0 && (
        <Plot
          data={[
            {
              z: correlationMatrix,
              x: variableNames,
              y: variableNames,
              type: "heatmap",
              colorscale: "RdBu",
              zmin: -1,
              zmax: 1,
              colorbar: {
                title: "Correlation Coefficient",
                thickness: 20,
              },
            },
          ]}
          layout={{
            title: "Correlation Matrix Heatmap",
            xaxis: {  tickangle: -25 },
            yaxis: {  tickangle: -25},
            margin: { l: 100, r: 100, t: 100, b: 100 },
            height: 500,
            width:800,
            plot_bgcolor: "rgba(0,0,0,0)", // Transparent plot background
            paper_bgcolor: "rgba(0,0,0,0)", // Transparent overall background
          }}
          style={{ width: "100%", height: "100%" }}
        />
      )}
      </div>
      
    </div>
  );
};

export default Heatmap;
