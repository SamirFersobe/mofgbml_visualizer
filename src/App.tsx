import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScatterPlot from './components/ScatterPlot';
import DatasetsDisplay from './components/DatasetsDisplay';
import ChartOptions from './components/ChartOptions';

import './App.css';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div>
      <h1> Charts for MoFGBML</h1>
      
      <DatasetsDisplay />
      <div className="container-fluid h-100">
        <div className="row justify-content-center">
        <div className="col-9">
          <ScatterPlot />
        </div>
        <div className ="col-3">
          <ChartOptions />
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
