import React from 'react';
import './App.css';

import Left from './Components/Left/Left';
import Right from './Components/Right/Right';

function App() {
  return (
    <div className='App'>
      <container id='main-container'>
        <Left />
        <Right />
      </container>
    </div>
  );
}

export default App;
