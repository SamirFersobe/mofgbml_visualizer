
import 'bootstrap/dist/css/bootstrap.min.css';
import ScatterPlot from './components/ScatterPlot';
import DatasetsDisplay from './components/DatasetsDisplay';
import ChartOptions from './components/ChartOptions';
import {useState} from 'react';
import { Coordinate } from 'recharts/types/util/types';
import './App.css';
import { Container,Row,Col} from 'react-bootstrap';

const datasetData:string[] =['iris','pima','vehicle','australian','wine'];
function App() {

  const customdata = require('./data/australian_gen5000_MOP7at5_Dtst.json');
  const customdata2 = require('./data/australian_gen5000_MOP7at5_Dtra.json');


function jsonToData(json:JSON){
    const data:Coordinate[] = [];
    for(let key  in json){
      if (json.hasOwnProperty(key)){
        
        if(parseInt(key)>= 2){
          //@ts-ignore
        let dataPoint:Coordinate = {x:parseInt(key),y:parseFloat(json[key])};
        data.push(dataPoint);
        }
      };
    }
  
    return data
  }

  const initialData = {
    datasets: [
      {
        label: 'australian Dtst ',
        data: jsonToData(customdata),
        backgroundColor: 'rgba(0, 0, 222, 1)',
        radius: 10,
        hoverRadius:10,
        borderColor:'black',
        borderWidth: 2,
      },
      {
        label: 'australian Dtra',
        data: jsonToData(customdata2),
        backgroundColor: 'rgba(220, 0, 0, 1)',
        radius: 10,
        hoverRadius:10,
        borderColor:'black',
        borderWidth: 2,
      }
    ],
    
  };

  const [chartData,setData] = useState(initialData)

  return (
    <Container>
      <Row className="justify-content-center">
      <Col xl="5">
      <h1 className="app"> Charts for MoFGBML</h1>
      </Col>
      </Row>
      <DatasetsDisplay datasets={datasetData} />
      <Container>
       
        <Row className="justify-content-center">
        <Col md={8}>
          
          <ScatterPlot 
          chartData={chartData} 
          />

        </Col>
        <Col md={4}>
          <ChartOptions updateFunction={setData} chartData ={chartData} />
        </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default App;
