import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import JumboTron from '../src/components/common/JumboTron';
import './App.css';

class App extends Component {
  render() {
    return (
        <div>        
          <div className="jumbo"><JumboTron title="Hello, Welcome to your favourite restaurant!!!"/></div>
          <div className="company-image"></div>
        </div>
    );
  }
}

export default App;
