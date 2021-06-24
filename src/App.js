import React, { Component } from 'react';
import Section from './components/Section';

import Heading from './components/Heading';
import './App.css';







class App extends Component {
   
  render() {
    return (
      <>
        <main >
          <Heading />
          <Section title='bootstrap'/>
        </main>
      </>
    );
  }
}

export default App;
