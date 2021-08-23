import React, {useState,useEffect} from 'react'
import {Row,Col,DropdownButton,Dropdown} from "react-bootstrap";
import PropTypes from 'prop-types';


export interface DropdownOptionsProps{
    buttonName:string;
    content:string[];
    currentVal:string;
    updateFunction(source:string):any;
}


function DropdownOptions({buttonName,content,currentVal,updateFunction}:DropdownOptionsProps) {

    return (
        <Row md={2}>
        <Col>
        <p className="dropdown-button"> {buttonName} </p>
        </Col>
        <Col>
        <DropdownButton className="dropdown-button" id="dropdown-basic-button" title={currentVal}>
            {content.map((i) =>(
                //@ts-ignore
            <Dropdown.Item onClick={()=>updateFunction(i)} value={i}>{i}</Dropdown.Item>))}
        </DropdownButton>
        </Col>
        
    </Row>
    )
}




export default DropdownOptions

