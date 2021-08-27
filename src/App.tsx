
import 'bootstrap/dist/css/bootstrap.min.css';
import ScatterPlot from './components/ScatterPlot';
import DatasetsDisplay from './components/DatasetsDisplay';
import ChartOptions from './components/ChartOptions';
import {useState} from 'react';
import { Coordinate } from 'recharts/types/util/types';
import './App.css';
import { Container,Row,Col} from 'react-bootstrap';

const datasetData:string[] =["australian","iris","magic","newthyroid","page-blocks","penbased","phoneme","pima","sonar","vehicle","wine"];


function App() {



  const initialData = {
    datasets: [],
      
  };

  const [currentDataset,setDataset] = useState(datasetData[0])
  const [chartData,setData] = useState(initialData)

  return (
    <Container>
      <Row className="justify-content-center">
      <Col xl="5">
      <h1 className="app"> Charts for MoFGBML</h1>
      </Col>
      </Row>
      <DatasetsDisplay datasets={datasetData} currentDataset ={currentDataset} updateFunction={setDataset} />
      <Container>
       
        <Row className="justify-content-center">
        <Col md={8}>
          
          <ScatterPlot 
          chartData={chartData} 
          />

        </Col>
        <Col md={4}>
          <ChartOptions updateFunction={setData} chartData ={chartData} currentDataset={currentDataset} />
        </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default App;
