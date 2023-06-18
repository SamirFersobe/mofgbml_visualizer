import {Button,Row,Container,Col} from "react-bootstrap"
import './ChartOptions.css';
import DropdownOptions from "./DropdownOptions";
import { useEffect, useState} from "react";
import { Coordinate } from 'recharts/types/util/types';

//Values for the Dropdown Buttons
const validation_rates =['0.9','0.8','0.7','0.5','0.3','0.2','0.1']
const  MOP = ['MOP1','MOP7']
const crossvalidation = ['SCV','DOBSCV']
const objectives = ['Dtra','Dtst','Dvalid','Dsubtra']
const mop1objectives = ['Dtra','Dtst']
const colors = ['green','yellow','blue','red','purple','orange','aqua','black']
// current domain where we hold the data
const domain = "https://data.samirfersobe.com/"
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

function compareToMop1(oldData:data,dataset:string,updateFunction:any){


  let urls = [`${domain}${dataset}_gen5000_MOP1at5_Dtra.json`,
              `${domain}${dataset}_gen5000_MOP1at5_Dtst.json`]
  let titles = [`${dataset} MOP1 Training Data`,`${dataset} MOP1 Test Data`];
  

  const request  =  async()=>{
    const response1 =  await fetch(urls[0],{referrerPolicy: 'no-referrer'})
    const response2 =  await fetch(urls[1],{referrerPolicy: 'no-referrer'})
    const dataPoints1 = await response1.json()
    const dataPoints2 = await response2.json()
    
    try{
      let newData = {
        datasets:[
          {
            type:'line',
            label: titles[0],
            data:jsonToData(dataPoints1),
            borderColor:'blue',
            
            },
          {
            type:'line',
            label:titles[1],
            data:jsonToData(dataPoints2),
            borderColor:'red'
 
            },
        ]
      }
  
  //empty object to put both olddata and newdata
     let updatedData:data ={
      datasets:[]
  };
  //@ts-ignore
  updatedData.datasets = oldData.datasets.concat(newData.datasets) 
  updateFunction(updatedData); //using the callback updatefunction when we finally obtain the data

    }catch(e){
      console.log(e);
    }
  };
  request();
}


function compareDtra(dataset:string,updateFunction:any,objective:string){
  let urls = ["",""];
  let titles = ["",""]
  if(objective === 'Dtra'){
     urls = [`${domain}${dataset}_gen5000_MOP1at5_Dtra.json`,
              `${domain}${dataset}_gen5000_MOP7at5_Dtra.json`]
     titles = [`${dataset} MOP1 Training Data`,`${dataset} MOP7 Training Data`];
  }
  else{
    urls = [`${domain}${dataset}_gen5000_MOP1at5_Dtst.json`,
              `${domain}${dataset}_gen5000_MOP7at5_Dtst.json`]
    titles = [`${dataset} MOP1 Test Data`,`${dataset} MOP7 Test Data`]
  }
  const request  =  async()=>{
    const response1 =  await fetch(urls[0],{referrerPolicy: 'no-referrer'})
    const response2 =  await fetch(urls[1],{referrerPolicy: 'no-referrer'})
    const dataPoints1 = await response1.json()
    const dataPoints2 = await response2.json()
    
    try{
      let newData = {
        datasets:[
          {
            label: titles[0],
            data:jsonToData(dataPoints1),
            backgroundColor:'blue',
            radius:10,
            hoverRadius:10,
            borderColor:'black',
            borderWidth:2,
            },
          {
            label:titles[1],
            data:jsonToData(dataPoints2),
            backgroundColor:'green',
            radius:10,
            hoverRadius:10,
            borderColor:'black',
            borderWidth:2,
            },
        ]
      }
  
    updateFunction(newData); //using the callback updatefunction when we finally obtain the data


    }catch(e){
      console.log(e);
    }
  };
  request();
}

//preset to showcase somedata constantly TODO: Obtain a lot of data async 
export function preset(dataset:string,updateFunction:any){
  let urls = [`${domain}${dataset}_gen5000_MOP1at5_Dtra.json`,
              `${domain}${dataset}_gen5000_MOP1at5_Dtst.json`]
  
  const request  =  async()=>{
    const response1 =  await fetch(urls[0],{referrerPolicy: 'no-referrer'})
    const response2 =  await fetch(urls[1],{referrerPolicy: 'no-referrer'})
    const dataPoints1 = await response1.json()
    const dataPoints2 = await response2.json()
    
    try{
      let newData = {
        datasets:[
          {
            label:`${dataset}Training Data MOP1`,
            data:jsonToData(dataPoints1),
            backgroundColor:'blue',
            radius:10,
            hoverRadius:10,
            borderColor:'black',
            borderWidth:2,
            },
          {
            label:`${dataset} Test Data MOP1`,
            data:jsonToData(dataPoints2),
            backgroundColor:'red',
            radius:10,
            hoverRadius:10,
            borderColor:'black',
            borderWidth:2,
            },
        ]
      }
  
    updateFunction(newData); //using the callback updatefunction when we finally obtain the data


    }catch(e){
      console.log(e);
    }
  };
  request();

}
//update function is the useState hook that is passed down from App.tsx and is used as a callback function
function addNewData(oldData:data,datasetName:string,validationRate:string,mop:string,objective:string,color:string,updateFunction:any){
    let subrate = 10-Math.round(parseFloat(validationRate)*10)
    let jsonName:string = `${datasetName}_gen5000_${mop}at${subrate.toString(10)}_${objective}.json`
    let url:string = `${domain}${jsonName}`
   
    //function of request
    const request = async()=>{ //async function so that we can return the data after it's loaded
      const response = await fetch(url) // response from server after fetching
      const dataPoints = await response.json() // turning it into json data
      try{
        let newData ={
          datasets:[
          {
              label:`${datasetName} ${objective} at ${validationRate} for ${mop}`,
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
      updateFunction(updatedData); //using the callback updatefunction when we finally obtain the data
  
      }catch(e){
          console.log(e)
          updateFunction(oldData);
      }
      
    };
    
    request();
  }

// creates an empty data object and updates chartData with it
export function clearData(updateFunction:any){
    let newData:data ={
        datasets:[
          
        ]
    };
    updateFunction(newData);
}



export default function ChartOptions({currentDataset,updateFunction,chartData}:ChartOptions) {
    const [currentValid,setValid] = useState(validation_rates[0]);
    const [currentMOP,setMOP] = useState(MOP[0]);
    // const [currentCV,setCV] =useState(crossvalidation[0]);
    const [currentObjective,setObjective] = useState(objectives[0]);
    const [currentColor,setColor] = useState('white')
    
    // useEffect(()=>{
    //   // Checking for changes in current dataset values
    //   preset(currentDataset,updateFunction);
    // } ,[currentDataset] 
    // );
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

          <Col md={6} >
          <Button onClick={()=>compareDtra(currentDataset,updateFunction,"Dtra")} className="dropdown-button" variant="secondary" >Display Training Data</Button>   
          </Col>

          <Col md={6}>
          <Button onClick={()=>compareDtra(currentDataset,updateFunction,"Dtst")} className="dropdown-button" variant="secondary" >Display Test Data</Button>   
          </Col>
        </Row> 
        <Row>
          <Button onClick={()=>compareToMop1(chartData,currentDataset,updateFunction)} className="dropdown-button" variant="secondary"> Compare to MOP1</Button>   
        </Row>
        <Row>
          <Button onClick={()=>clearData(updateFunction)}className="dropdown-button" variant="danger">Clear All </Button>   
        </Row>
      </Container>
            
            
    </div>
        
    )
}
