
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
      <h1 className="app">MoFGBML Visualizer</h1>
       
      </Col>
      </Row>
      <h4> 研究室で使用していた多目的ファジィ遺伝的機械学習モデルで得られた実験結果を分析するためのツールです。下の図は、X軸に各識別機のルール数、Y軸にその識別機の誤識別率を表示しています。また、学習データ（Dtra）とテストデータ（Dtst）、多目的最適化問題（従来手法MOP1と提案手法MOP7）の比較ができます。さらに、提案手法の検証精度(DvalidとDsubtra)による誤識別率の比較も可能です。</h4>
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
