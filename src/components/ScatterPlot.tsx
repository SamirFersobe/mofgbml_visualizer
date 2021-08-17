import React from 'react';
import './ScatterPlot.css';
import {Scatter} from 'react-chartjs-2'

const rand_x = () => Math.round(Math.random() * 60 );
const rand_y = () => Math.round(Math.random()* 20);
const data = {
    datasets: [
      {
        label: 'A dataset',
        data: [
          { x: rand_x(), y: rand_y() },
          { x: rand_x(), y: rand_y() },
          { x: rand_x(), y: rand_y() },
          { x: rand_x(), y: rand_y() },
          { x: rand_x(), y: rand_y() },

        ],
        backgroundColor: 'rgba(0, 99, 132, 1)',
      },
    ],
  };
  


const ScatterPlot = () => {
    return <div className="container" >

    <Scatter 
    data={data} 
    options ={{
        maintainAspectRatio:false,
    }}
    height={200}
    width={200}
     />
    </div>
}

export default ScatterPlot