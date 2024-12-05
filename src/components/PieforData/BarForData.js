import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function BarForData(props) {
    // Check if the data exists and is a valid number
    if (props.length === undefined || isNaN(props.length)) {
        console.log("Invalid data: ", props.length);
        return <div>No valid data available</div>;  // Fallback if the data is invalid
    }
    
    const data = {
        labels: ["Data"],  // Label for the bar chart
        datasets: [{
            label: (props.length>7)?'Data length':'No of columns',
            data: [props.length],  // Pass the single value as an array
            backgroundColor: (props.length>7)?['rgba(255, 159, 64, 0.2)']:['rgba(153, 102, 255, 0.2)'],  
            borderColor: (props.length>7)?['rgb(255, 159, 64)']:['rgb(153, 102, 255)'],  
            borderWidth: 1,  // Border width
            barThickness: 50,
        }]
    };

    const options = {
        responsive: true,
        aspectRatio: 1,  // Maintain aspect ratio (you can adjust this)
        scales: {
            y: {
                beginAtZero: true,  // Start y-axis from zero
                ticks: {
                    stepSize: 10000,  // Step size for the y-axis ticks
                    max: Math.max(37000, props.length + 5000),  // Ensure y-axis max value is sufficient
                    callback: function(value) {
                        return value.toLocaleString();  // Format ticks with commas
                    }
                }
            }
        }
    };

    return (
        <>
            <Bar data={data} options={options} />
        </>
    );
}

export default BarForData;
