import {Button,Row,Container} from "react-bootstrap"
import './ChartOptions.css';
import DropdownOptions from "./DropdownOptions";
import { useState} from "react";
import { Coordinate } from 'recharts/types/util/types';

//Values for the Dropdown Buttons

const validation_rates =['0.9','0.8','0.7','0.5','0.3','0.2','0.1']
const  MOP = ['MOP1','MOP7']
const crossvalidation = ['SCV','DOBSCV']
const objectives = ['Dtra','Dtst','Dvalid','Dsubtra']
const mop1objectives = ['Dtra','Dtst']
const colors = ['green','yellow','blue','red','purple','orange','aqua','black']

function jsonToData(json:JSON){
    const data:Coordinate[] = [];
    for(let key  in json){
      if (json.hasOwnProperty(key)){        
        if(parseInt(key)>= 2){
          //@ts-ignore
        let dataPoint:Coordinate = {x:parseInt(key),y:parseFloat(json[key])};
        data.push(dataPoint);
        }
      };
    }
  
    return data
  }

//update function is the useState hook that is passed down from App.tsx and is used as a callback function
function addNewData(oldData:data,datasetName:string,validationRate:string,mop:string,objective:string,color:string,updateFunction:any){
    let subrate = 10-Math.round(parseFloat(validationRate)*10)
    let jsonName:string = `${datasetName}_gen5000_${mop}at${subrate.toString(10)}_${objective}`
    let url:string = `/api/${jsonName}`
   
    const request = async()=>{
      const response = await fetch(url)
      const dataPoints = await response.json()
      try{
        let newData ={
          datasets:[
          {
              label:`${objective} at ${validationRate} for ${mop}`,
              data:jsonToData(dataPoints),
              backgroundColor:color,
              radius:10,
              hoverRadius:10,
              borderColor:'black',
              borderWidth:2,
              },
          ]
      }
      //empty object to put both olddata and newdata
      let updatedData:data ={
          datasets:[]
      };
      
      updatedData.datasets = oldData.datasets.concat(newData.datasets) 
      updateFunction(updatedData);
  
      }catch(e){
          console.log(e)
          updateFunction(oldData);
      }
      
    };
    
    request();
  }

function clearData(){
    let newData:data ={
        datasets:[
          
        ]
    };
    return newData;
}

export interface ChartOptions{
    updateFunction:any,
    chartData:data,
    currentDataset:string,
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


export default function ChartOptions({currentDataset,updateFunction,chartData}:ChartOptions) {
    const [currentValid,setValid] = useState(validation_rates[0]);
    const [currentMOP,setMOP] = useState(MOP[0]);
    const [currentCV,setCV] =useState(crossvalidation[0]);
    const [currentObjective,setObjective] = useState(objectives[0]);
    const [currentColor,setColor] = useState('white')
    
    return (

            <div className="dropdowns">
            <Container>
            <h2 id="currentDataset">CurrentDataset</h2>
            <DropdownOptions buttonName = {"MOP"} content={MOP} currentVal={currentMOP} updateFunction = {setMOP} />
           {
             currentMOP !=='MOP1' && <DropdownOptions buttonName = {"Validation Rate"} content={validation_rates} currentVal = {currentValid} updateFunction = {setValid} /> 
           }
 
            <DropdownOptions buttonName = {"Objective"} content={currentMOP ==='MOP1'?mop1objectives:objectives} currentVal = {currentObjective} updateFunction = {setObjective} />
            <DropdownOptions buttonName = {"Color"} content ={colors} currentVal = {currentColor} updateFunction = {setColor}></DropdownOptions>
            <Row>
            <Button onClick={()=>addNewData(chartData,currentDataset,currentMOP === 'MOP1'?'0.5':currentValid,currentMOP,currentObjective,currentColor,updateFunction)} className="dropdown-button" variant="primary"> Add New</Button>   
            
            </Row> 
            <Row>
            <Button onClick={()=>updateFunction(clearData())}className="dropdown-button" variant="danger">Clear All </Button>   
            </Row>
            </Container>
            
            
            </div>
        
    )
}
