import React from 'react';

import './App.css';
import Counter from './Components/Counter';


function App() {
  const start:number=-10
  return (
      <Counter start={ start} />
  );
}

export default App;
