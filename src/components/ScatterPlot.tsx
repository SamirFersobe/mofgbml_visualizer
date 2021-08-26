
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
    }}
     
    
     />
    </div>
}

export default ScatterPlot