import React from 'react';

import ScatterPlot from './components/ScatterPlot';
import DatasetsDisplay from './components/DatasetsDisplay';

import './App.css';

function App() {
  return (
    <div>
      <h1> Charts for MoFGBML</h1>
      <div>
      <DatasetsDisplay />
      <ScatterPlot />
      </div>
    </div>
  );
}

export default App;
