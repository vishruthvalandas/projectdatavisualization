import { PolarArea } from "react-chartjs-2";

function Polarchart(props) {
  // Flatten the input data for one dataset
  const aggregatedData = props.label.reduce((acc, curr) => {
    Object.keys(curr).forEach((key) => {
      acc[key] = (acc[key] || 0) + curr[key];
    });
    return acc;
  }, {});
  const baseColors = [
     
    "#ff5722", "#ffc107", "#4caf50", "#2196f3" 
    
  ];
  // const selectedValueindex=Object.keys.indexOf(props.SelectedValue)
  // console.log(Object.keys(props.label[0]).indexOf(props.SelectedValue))
  const backgroundColors = baseColors.map((color, index) =>
    Object.keys(props.label[0]).indexOf(props.SelectedValue) === index ? color : `${color}40` // Highlight selected slice, dim others
  );

  const data = {
    labels: Object.keys(aggregatedData), // Extract unique labels
    datasets: [
      {
        label: "Aggregated Data", // Optional label
        data: Object.values(aggregatedData), // Values corresponding to the labels
        backgroundColor: backgroundColors,
      },
    ],
  };

  const options = {
    scale: {
      ticks: {
        display: true, // Enable/disable radial ticks
      },
      pointLabels: {
        display: true, // Enable point labels
        font: {
          size: 14,
        },
        padding: 20, // Adjust label spacing from the center
      },
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
    <div style={{ width: "450px", height: "350px" }}>
      <PolarArea data={data} options={options} />
    </div>
  );
}

export default Polarchart;
