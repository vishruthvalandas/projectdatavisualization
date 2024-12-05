import { Pie } from "react-chartjs-2";

function PieForData(props){
    const data = {
        labels: [
          'Null Values'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [props.length,props.count],
          backgroundColor: [
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]
      };
return (
    <>
    <Pie data={data}/>
    </>
)
}
export default PieForData;