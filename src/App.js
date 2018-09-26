import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Travels from './Travels.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <h1 className="App-title">My Travels</h1>
        </header>
        <Travels/>
      </div>
    );
  }
}

export default App;
