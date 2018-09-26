import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Travel from './Travel.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <h1 className="App-title">My Travels</h1>
        </header>

        <Travel
          destination = "Sydney "
          country = " Australie "
          photo = "https://cdn.pixabay.com/photo/2014/06/06/09/36/sydney-363244__340.jpg" alt = "Sydney"
          distance = " 16950 km"
          />
        <Travel
          destination = "Brasilia "
          country = " Brésil "
          photo = "https://cdn.pixabay.com/photo/2017/03/02/14/14/brasilia-2111416__340.jpg" alt = "Brasilia"
          distance = " 8725 km"
          />
      </div>
    );
  }
}

export default App;
