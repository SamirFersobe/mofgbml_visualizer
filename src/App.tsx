
import 'bootstrap/dist/css/bootstrap.min.css';
import ScatterPlot from './components/ScatterPlot';
import DatasetsDisplay from './components/DatasetsDisplay';
import ChartOptions from './components/ChartOptions';
import {useState} from 'react';
import './App.css';
import { Container,Row,Col} from 'react-bootstrap';
import { useEffect } from 'react';

const datasetData:string[] =["australian","iris","magic","newthyroid","page-blocks","penbased","phoneme","pima","sonar","vehicle","wine"];


function App() {

  const initialData = {
    datasets: [],
      
  };

  const [currentDataset,setDataset] = useState(datasetData[0])
  const [chartData,setData] = useState(initialData)

  useEffect(()=>{
    console.log("rendering again")
  },[chartData])

  return (
    <Container>
      <Row className="justify-content-center">
      <Col xl="5">
      <h1 className="app"> Charts for MoFGBML</h1>
        <h3> Heroku changed their free offering so currently the nodejs backend is unreachable, I'll update soon.</h3>
      </Col>
      </Row>
      <DatasetsDisplay datasets={datasetData} currentDataset ={currentDataset} updateCurrentDataset={setDataset} updateChart ={setData} />
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
