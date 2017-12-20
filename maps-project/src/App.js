import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MapContainer from './components/MapContainer';
import Overlay from './components/Overlay';

class App extends Component {
  render() {
    return (
      <div>
        <MapContainer />
      </div>
    );
  }
}

export default App;
