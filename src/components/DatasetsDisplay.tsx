import React,{useEffect} from 'react'
import './DatasetsDisplay.css';
import { Button } from 'react-bootstrap';
import { preset,clearData } from './ChartOptions';
export interface DatasetsDisplay{
    datasets:string[];
    updateCurrentDataset:any;
    currentDataset:string;
    updateChart:any;
}


function DatasetsDisplay({datasets,currentDataset,updateCurrentDataset,updateChart}:DatasetsDisplay) {
    
    useEffect(() => {
        document.title = currentDataset;
        if(document.getElementById("currentDataset") !== null || document.getElementById("currentDataset") !== undefined){
            document.getElementById("currentDataset")!.innerHTML = currentDataset;
            console.log("UseEffect change title to:")
        }
        console.log(currentDataset)
        preset(currentDataset,updateChart)
        return ()=>{
            console.log("cleanup");
            clearData(updateChart);
        };
        
    },[currentDataset])




    function submit(e:React.MouseEvent<HTMLElement>){
        e.preventDefault();
        if(e.button === 0){
            //@ts-ignore
            updateCurrentDataset(e.currentTarget.value);
            
            console.log("Submit Function")
            
        }
        
    }
    // Defined inside the DatasetsDisplay() to access the local submit function
    const datasetItems = datasets.map((dataset) => <Button   key = {dataset} onClick ={submit} variant="info"  className="myButton" value={dataset}> {dataset}</Button>);

    return (
        <div className="datasetsDisplay">
            {datasetItems}      
        </div>
    )
}

export default DatasetsDisplay
