import {Button,Row,Col,Container } from "react-bootstrap"
import './ChartOptions.css';
import DropdownOptions from "./DropdownOptions";
import { useState,useEffect } from "react";

//Values for the Dropdown Buttons

const validation_rates =['0.9','0.8','0.7','0.5','0.3','0.2','0.1']
const  MOP = ['MOP1','MOP7']
const crossvalidation = ['SCV','DOBSCV']
const objectives = ['Dtra','Dsubtra','Dvalid','Dtst']



export default function ChartOptions() {
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
            <Button onClick={()=>console.log(currentValid)} className="dropdown-button" variant="primary"> Add </Button>   
            </Row> 

            <Row>
            <Button className="dropdown-button" variant="danger">Clear All </Button>   
            </Row>

            </Container>
            </div>
        
    )
}