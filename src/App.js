import logo from './logo.svg';
import './App.css';
import React from 'react';
import Grandmother from './grandmother';


const link=<a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>


function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {link}
        <Grandmother name={'React'}/>
      </header>
    </div>
  );
}


export default App;
