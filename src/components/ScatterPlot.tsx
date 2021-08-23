import React from 'react';
import './ScatterPlot.css';
import {Scatter} from 'react-chartjs-2'
import { Coordinate } from 'recharts/types/util/types';

const rand_x = () => Math.round(Math.random() * 100 );
const rand_y = () => Math.round(Math.random()* 100);

const customdata = require('../data/australian_gen5000_MOP7at5_Dtst.json');
const customdata2 = require('../data/australian_gen5000_MOP7at5_Dtra.json');

console.log(customdata);

function jsonToData(json:JSON){
  const data:Coordinate[] = [];
  for(let key  in json){
    if (json.hasOwnProperty(key)){
      //@ts-ignore
      if(parseInt(key)>= 2){
        
      
      let dataPoint:Coordinate = {x:parseInt(key),y:parseFloat(json[key])};
      data.push(dataPoint);
      }
    };
  }

  return data
}


jsonToData(customdata)
const data = {
    datasets: [
      {
        label: 'australian Dtst ',
        data: jsonToData(customdata),
        backgroundColor: 'rgba(0, 0, 222, 1)',
        radius: 10,
        hoverRadius:10,
        borderColor:'black',
        borderWidth: 4,
      },
      {
        label: 'australian Dtra',
        data: jsonToData(customdata2),
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