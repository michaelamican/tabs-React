import './App.css';
import React, { useState } from 'react';
import Tab from './components/Tab/Tab';
import Box from './components/Box/Box';

function App() {
  const [tabNum, setTabNum] = useState("");

  const makeActive = (t) => {
    setTabNum(t);
  }

  const centerItem = {
    padding: '1vw 1vh',
    margin: '0 auto',
    textAline: 'center'
  }
  
  return (

    <div className="App">

      <div style= { centerItem }>
            <Tab onSelect={ makeActive } />
            <Box message={tabNum}/>
      </div>
      
        

    </div>
  );
}

export default App;
