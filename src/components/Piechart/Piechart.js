import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import { useSelector,useDispatch } from "react-redux";
import { setClickedIndex } from "../../redux/reducer"; // Adjust the path as needed
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart(props) {
  const clickedIndex = useSelector((state) => state.chart.clickedIndex);
  const dispatch = useDispatch();
  const [highlightIndex, setHighlightIndex] = useState(null); // Track the highlighted index

  const d1 = props.data.map((x) => x[props.SelectedValue]);

  // Define base colors for the chart
  const baseColors = [
    "#b91d47", "#00aba9", "#2b5797", "#e8c3b9", "#1e7145", 
    "#ff5722", "#ffc107", "#4caf50", "#2196f3", "#9c27b0", 
    "#3f51b5", "#607d8b", "#795548", "#8bc34a", "#ff9800", 
    "#673ab7", "#03a9f4", "#e91e63", "#ffeb3b", "#009688", 
    "#d50000", "#aa00ff", "#00c853", "#304ffe"
  ];
  

  // Adjust colors based on the highlighted segment
  const backgroundColors = baseColors.map((color, index) =>
    clickedIndex === index ? color : `${color}40` // Highlight selected slice, dim others
  );

  const data1 = {
    labels: props.label.map((x) => `${x}:00:00`),
    datasets: [
      {
        label: props.SelectedValue,
        data: d1,
        backgroundColor: clickedIndex === null ? baseColors : backgroundColors, // Use adjusted colors if one is highlighted
        borderColor: "white",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    onClick: (e, elements) => {
      if (elements && elements.length > 0) {
        // A segment is clicked
        const clickedIndex = elements[0].index;
        setHighlightIndex(clickedIndex); // Update the highlighted index
        dispatch(setClickedIndex(clickedIndex)); // Dispatch the clicked index to Redux
        console.log(`Clicked index: ${clickedIndex}`);
      } else {
        // Clicked outside the chart
        setHighlightIndex(null); // Reset the highlighted index
        dispatch(setClickedIndex(null)); // Reset the index in Redux
        console.log("Reset clicked index");
      }
    },
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "right",
      },
    },
  };

  return (
    <div
      className="chart-container d-flex justify-content-center align-items-center"
      style={{ width: "80%", height: "100%" }}
    >
      <Pie data={data1} options={options} />
    </div>
  );
}

export default PieChart;
