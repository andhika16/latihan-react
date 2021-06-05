import React, { Component } from 'react';
import Counters from './components/counters';
import Navbar from './components/navBar';
import Card from './components/card';
import './App.css';
class App extends Component {
    state = {
        counters : [
            {id:1, value : 4},
            {id:2, value : 0},
            {id:3, value : 0},
            {id:4, value : 0}
        ]
    }
    
    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        })
        this.setState({counters})
    }


    handleIncrement = counter => {
        
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value++;
        this.setState({counters});
     
        
    }

    handleDelete = counterId => {
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({ counters });
    }
    
  render() {
    return (
      < React.Fragment>
        <Navbar totalCounter={this.state.counters.filter(c => c.value > 0 ).length} />
        <main className='container'>
          <Counters
            counters={this.state.counters}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
          />
          <div className="row">
            <Card />
            <Card />
            <Card />
            
          </div>
        </main>
      </ React.Fragment>
    );
  }
}

export default App;
