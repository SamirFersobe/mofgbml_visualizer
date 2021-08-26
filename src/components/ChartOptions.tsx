import {Button,Row,Container } from "react-bootstrap"
import './ChartOptions.css';
import DropdownOptions from "./DropdownOptions";
import { useState,useEffect} from "react";
import { Coordinate } from 'recharts/types/util/types';

//Values for the Dropdown Buttons

const validation_rates =['0.9','0.8','0.7','0.5','0.3','0.2','0.1']
const  MOP = ['MOP1','MOP7']
const crossvalidation = ['SCV','DOBSCV']
const objectives = ['Dtra','Dsubtra','Dvalid','Dtst']

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


function newData(oldData:data,extraData:data){
    let newData:data ={
        datasets:[]
    };
    newData.datasets = oldData.datasets.concat(extraData.datasets);
    return newData ;
}

function addNewData(oldData:data,datasetName:string,validationRate:string,cv:string,mop:string,objective:string){
    let subrate = 10-Math.round(parseFloat(validationRate)*10)
    const chartData = require('../data/chartData.json')
    let jsonName:string = `${datasetName}_gen5000_${mop}at${subrate.toString(10)}_${objective}.json`
    let dataPoints;
    if(chartData.hasOwnProperty(jsonName)){
        dataPoints = chartData['australian_gen5000_MOP1at5_Dtra']
        console.log(dataPoints)
    }
    
    try{
        console.log("try accepted")
        console.log(dataPoints)
        console.log(chartData)
      let newData ={
        datasets:[
        {
            label:`${datasetName} at 0.${validationRate}: ${objective}`,
            data:jsonToData(dataPoints),
            backgroundColor:"rgba(222,222,0,1)",
            radius:10,
            hoverRadius:10,
            borderColor:'black',
            borderWidth:2,
            },
        ]
    }
    let updatedData:data ={
        datasets:[]
    };
    
    updatedData.datasets = oldData.datasets.concat(newData.datasets) 
    return updatedData;

    }catch(e){
        console.log(e)
        return oldData;
    }
  }

function clearData(){
    let newData:data ={
        datasets:[]
    };

   

    return newData;
}

export interface ChartOptions{
    updateFunction:any,
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


export default function ChartOptions({updateFunction,chartData}:ChartOptions) {
    const [currentValid,setValid] = useState(validation_rates[0]);
    const [currentMOP,setMOP] = useState(MOP[0]);
    const [currentCV,setCV] =useState(crossvalidation[0]);
    const [currentObjective,setObjective] = useState(objectives[0]);

    return (

            <div className="dropdowns">
            <Container>
            <h2 id="currentDataset">CurrentDataset</h2>
            <DropdownOptions buttonName = {"Validation Rate"} content={validation_rates} currentVal = {currentValid} updateFunction = {setValid} />
            <DropdownOptions buttonName = {"Objective"} content={objectives} currentVal = {currentObjective} updateFunction = {setObjective} />
            <DropdownOptions buttonName = {"Cross-Validation"} content={crossvalidation} currentVal={currentCV} updateFunction = {setCV} />
            <DropdownOptions buttonName = {"MOP"} content={MOP} currentVal={currentMOP} updateFunction = {setMOP} />
                   
            <Row>
            <Button onClick={()=>updateFunction(addNewData(chartData,"australian",currentValid,currentCV,currentMOP,currentObjective))} className="dropdown-button" variant="primary"> Add Broken</Button>   
            
            </Row> 
            <Row>
            <Button onClick={()=>updateFunction(clearData())}className="dropdown-button" variant="danger">Clear All </Button>   
            </Row>
            </Container>
            
            
            </div>
        
    )
}
