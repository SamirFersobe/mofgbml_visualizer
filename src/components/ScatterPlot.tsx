
import './ScatterPlot.css';
import {Scatter} from 'react-chartjs-2'
import { Coordinate } from 'recharts/types/util/types';


export interface ScatterPlot{
  chartData:data,
}

export interface data{
  datasets:dataset[]
}

export interface dataset{
  label:String,
  data:Coordinate[],
  backgroundColor: String,
  radius: Number,
  hoverRadius:Number,
  borderColor:String,
  borderWidth:Number,
}

const ScatterPlot = ({chartData}:ScatterPlot) => {
    return <div className="plot-height">

    <Scatter 
    data={chartData} 
    options ={{
        maintainAspectRatio:false,
        aspectRatio:1,
        scales:{
          x:{
            display:true,
            min:0,
            
            title:{
              display:true,
              text:'Number of Rules',
              color:'#000',
              font:{
                family:'Arial',
                size: 20,
                weight:'bold',
                lineHeight:1.2
              }
            }

          },
          y:{
            display:true,
            
            
            title:{
              display:true,
              text:'Error Rate(%)',
              color:'#000',
              font:{
                family:'Arial',
                size:20,
                weight:'bold',
                lineHeight:1.2
              }
            }

          }
          
        }
    }}
     
    
     />
    </div>
}

export default ScatterPlot