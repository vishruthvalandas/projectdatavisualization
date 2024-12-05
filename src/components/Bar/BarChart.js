import React from "react";
import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function BarChart(props) {
  const clickedIndex = useSelector((state) => state.chart.clickedIndex);
  const labels = props.label;

  const datasets = [
   
  ];

  if (clickedIndex !== null) {
    datasets.push({
      label: `Clicked Data (Index: ${clickedIndex})`,
      data: props.data2.map((item) => {return item[clickedIndex][props.SelectedValue]}),
      backgroundColor: "rgba(75, 192, 192, 0.5)",
    },
    {
      label: "Default Data",
      data: props.data.map((x) => {return x[props.SelectedValue]}),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    })
  }
  else{
    datasets.push(
      {
        label: "Default Data",
        data: props.data.map((x) => {return x[props.SelectedValue]}),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },)

  }

  const data = {
    labels: labels,
    datasets: datasets,
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: "Stacked Bar Chart",
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  return <Bar data={data} options={options} />;
}

export default BarChart;
