import React, {useState,useEffect} from 'react'
import {Row,Col,DropdownButton,Dropdown} from "react-bootstrap";
import PropTypes from 'prop-types';


export interface DropdownOptionsProps{
    buttonName:string;
    content:string[];
}

export interface CurrentItemDescription{
    description:string;
}

function DropdownOptions({buttonName,content}:DropdownOptionsProps) {

    const [currentDescription,setCurrentDescription] = useState(content[0])

    return (
        <Row md={2}>
        
        <Col>
        
        <DropdownButton className="dropdown-button" id="dropdown-basic-button" title={buttonName}>
            {content.map((i) =>(
                //@ts-ignore
            <Dropdown.Item onClick={console.log("hi")} value={i}>{i}</Dropdown.Item>))}
        </DropdownButton>
        </Col>
        <Col>
        <CurrentItemDescription description={currentDescription} />
        </Col>
    </Row>
    )
}



function CurrentItemDescription({description}:CurrentItemDescription){
        return (
            <p className="dropdown-button"> {description} </p>
        )
}


export default DropdownOptions

