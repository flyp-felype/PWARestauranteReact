import React, { Component } from 'react';
import Header from './Components/Header';
import Banner from './Components/Banner';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        
          <Header />
          <Banner />
        
      </div>
    );
  }
}

export default App;
