import React, { Component } from 'react';
import Sections from './components/Sections';

import Heading from './components/Heading';
import './App.css';


class App extends Component {
   
  render() {
    return (
      <>
        <main >
          <Heading />
          <Sections />
        </main>
      </>
    );
  }
}


export default App;
