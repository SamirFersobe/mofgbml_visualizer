import React from 'react'
import './DatasetsDisplay.css';

const datasets:string[] =['iris','pima','vehicle','australian','wine','newthyroid','satimage'];
const datasetItems = datasets.map((dataset) => <button className="myButton"> {dataset}</button>)
function DatasetsDisplay() {
    return (
        <div className="datasetsDisplay">
            {datasetItems}
        </div>
    )
}

export default DatasetsDisplay
