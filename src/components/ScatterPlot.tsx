import React from 'react';
import './ScatterPlot.css';
import {Scatter} from 'react-chartjs-2'

const rand_x = () => Math.round(Math.random() * 100 );
const rand_y = () => Math.round(Math.random()* 100);
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
          { x: rand_x(), y: rand_y() },
          { x: rand_x(), y: rand_y() },
          { x: rand_x(), y: rand_y() },
          { x: rand_x(), y: rand_y() },
          { x: rand_x(), y: rand_y() },

        ],
        backgroundColor: 'rgba(0, 0, 222, 1)',
        radius: 10,
        hoverRadius:10,
        borderColor:'black',
        borderWidth: 4,
      },
      {
        label: 'A dataset2',
        data: [
          { x: rand_x(), y: rand_y() },
          { x: rand_x(), y: rand_y() },
          { x: rand_x(), y: rand_y() },
          { x: rand_x(), y: rand_y() },
          { x: rand_x(), y: rand_y() },
          {x:1,y:90},
          { x: rand_x(), y: rand_y() },
          { x: rand_x(), y: rand_y() },
          { x: rand_x(), y: rand_y() },
          { x: rand_x(), y: rand_y() },
          { x: rand_x(), y: rand_y() },

        ],
        backgroundColor: 'rgba(220, 0, 0, 1)',
        radius: 10,
        hoverRadius:10,
        borderColor:'black',
        borderWidth: 4,
      }
    ],
    
  };
  


const ScatterPlot = () => {
    return <div className="plot-height">

    <Scatter 
    data={data} 
    options ={{
        maintainAspectRatio:false,
        aspectRatio:1,
    }}
     
    
     />
    </div>
}

export default ScatterPlot