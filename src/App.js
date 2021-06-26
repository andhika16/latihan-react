import React, { Component } from 'react';
import Heading from './components/Heading';
import Sections from './components/Sections';
import Footer from './components/Footer';

import './App.css';


class App extends Component {
   
  render() {
    return (
      <>
        <main >
          <Heading />
          <Sections />
          <Footer />
        </main>
      </>
    );
  }
}


export default App;
