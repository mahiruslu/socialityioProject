import './App.css';
import React, { useEffect,useState,useContext } from 'react'
import ThemeContext,{ThemeProvider} from './context/ThemeContext'

import Button from './Components/Button'
import LeftMenu from './Components/LeftMenu'

function App() {
  
  
  return (
    <ThemeProvider>
      <LeftMenu/>
    </ThemeProvider>
  );
}

export default App;



