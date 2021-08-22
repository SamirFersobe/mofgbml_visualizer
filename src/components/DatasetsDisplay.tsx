import React,{useState,useEffect} from 'react'
import './DatasetsDisplay.css';
import { Button } from 'react-bootstrap';

export interface DatasetsDisplay{
    datasets:string[];
}


function DatasetsDisplay({datasets}:DatasetsDisplay) {
    
    const [currentDataset,setCurrentDataset] =useState("iris")

    useEffect(() => {
        document.title = currentDataset;
        if(document.getElementById("currentDataset") != null || document.getElementById("currentDataset") != undefined){
        document.getElementById("currentDataset")!.innerHTML = currentDataset;
        }
        
        
    })

    function submit(e:React.MouseEvent<HTMLElement>){
        e.preventDefault();
        if(e.button == 0){
            //@ts-ignore
            setCurrentDataset(e.currentTarget.value)
            // console.log(e.currentTarget.value)
        }
        
    }
    // Defined inside the DatasetsDisplay() to access the local submit function
    const datasetItems = datasets.map((dataset) => <Button  onClick ={submit} variant="info"  className="myButton" value={dataset}> {dataset}</Button>);

    return (
        <div className="datasetsDisplay">
            {datasetItems}      
        </div>
    )
}

export default DatasetsDisplay
