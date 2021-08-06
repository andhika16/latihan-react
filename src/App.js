import React, { Component } from 'react';
import Heading from './components/Heading';
import Home from './components/Home'
import './index.css';
import './App.css';


class App extends Component {
   
  render() {
    return (
      <>
        <div className="container">
          <Heading />
          <Home />
          
        </div>
      </>
    );
  }
}


export default App;
