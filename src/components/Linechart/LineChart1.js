import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { useSelector, useDispatch } from "react-redux";
import { setClickedIndex } from "../../redux/reducer";

export default function LineChart1(props) {
  const dispatch = useDispatch();
  const [newColumns, setNewColumns] = useState([]);
  const clickedIndex = useSelector((state) => state.chart.clickedIndex); // Redux slice clicked index

  useEffect(() => {
    // Extract column data based on SelectedValue
    setNewColumns(props.data.map((x) => x[props.SelectedValue]));
  }, [props.SelectedValue, props.data]);

  // Dynamically set x-axis limits
  const xMin = clickedIndex === null ? 0 : Math.max(clickedIndex - 2, 0); // Show 2 points before the clicked index
  const xMax = clickedIndex === null
    ? props.label.length - 1
    : Math.min(clickedIndex + 2, props.label.length - 1); // Show 2 points after the clicked index

  // Chart Data Configuration
  const data = {
    labels: props.label.map((x) => `${x}:00:00`),
    datasets: [
      {
        label: "Data Points",
        data: newColumns,
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        pointRadius: clickedIndex === null ? 3 : 6, // Highlight the clicked point
        pointBackgroundColor: (context) => {
          // Highlight only the clicked point
          return context.dataIndex === clickedIndex
            ? "rgba(75,192,192,1)"
            : "rgba(75,192,192,0.5)";
        },
        pointHoverRadius: 8,
      },
    ],
  };

  // Chart Options Configuration
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        title: {
          display: true,
          text: "Time",
        },
        min: xMin, // Dynamic x-axis minimum
        max: xMax, // Dynamic x-axis maximum
      },
      y: {
        title: {
          display: true,
          text: "Values",
        },
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: false, // Hide legend for simplicity
      },
    },
    onClick: (e, elements) => {
      if (elements && elements.length > 0) {
        
        const clickedIndex = elements[0].index;
        dispatch(setClickedIndex(clickedIndex));
        console.log(`Clicked index: ${elements}`);
      } else {
       
        dispatch(setClickedIndex(null));
        console.log("Reset clicked index");
      }
    },
  };

  return (
    <div>
      <div style={{ width: "500px", height: "300px" }}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
}
