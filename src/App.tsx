import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScatterPlot from './components/ScatterPlot';
import DatasetsDisplay from './components/DatasetsDisplay';
import ChartOptions from './components/ChartOptions';

import './App.css';
import { Container,Row,Col} from 'react-bootstrap';

const data:string[] =['iris','pima','vehicle','australian','wine','newthyroid','satimage','iris','pima','vehicle','australian','wine','newthyroid','satimage','iris','pima','vehicle','australian','wine','newthyroid'];
function App() {
  return (
    <Container>
      <Row className="justify-content-center">
      <Col xl="5">
      <h1 className="app"> Charts for MoFGBML</h1>
      </Col>
      </Row>
      <DatasetsDisplay datasets={data} />
      <Container>
       
        <Row className="justify-content-center">
        <Col md={8}>
          <ScatterPlot />
        </Col>
        <Col md={4}>
          <ChartOptions />
        </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default App;
