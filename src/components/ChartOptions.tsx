import { DropdownButton,Dropdown,Button } from "react-bootstrap"
import './ChartOptions.css';

const validation_rates =['0.9','0.8','0.7','0.5','0.3','0.2','0.1']
const  MOP = ['MOP1','MOP7']
const crossvalidation = ['SCV','DOBSCV']
const values = ['Dtra','Dsubtra','Dvalid','Dtst']



export default function ChartOptions() {
    return (
        <div className="divider">
            <div className="dropdowns">
            <DropdownButton id="dropdown-basic-button" title="Validation Rate">
                {validation_rates.map((valid) => (
                <Dropdown.Item href="">{valid}</Dropdown.Item>))}
            </DropdownButton>
           
                <br></br>
            <DropdownButton id="dropdown-basic-button" title="Sub-Dataset">
                {values.map((value) => (
                <Dropdown.Item href="">{value}</Dropdown.Item>))}
            </DropdownButton>
            </div>
           <div>
            
           <Button variant="primary"> Add </Button>   
            </div>    
            
        </div>
    )
}
