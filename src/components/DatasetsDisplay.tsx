import React from 'react'
import './DatasetsDisplay.css';
import { Button } from 'react-bootstrap';

const datasets:string[] =['iris','pima','vehicle','australian','wine','newthyroid','satimage','iris','pima','vehicle','australian','wine','newthyroid','satimage','iris','pima','vehicle','australian','wine','newthyroid','satimage','iris','pima','vehicle','australian','wine','newthyroid','satimage'];
const datasetItems = datasets.map((dataset) => <Button variant="info"  className="myButton"> {dataset}</Button>)
function DatasetsDisplay() {
    return (
        <div className="datasetsDisplay">
            {datasetItems}
        </div>
    )
}

export default DatasetsDisplay
