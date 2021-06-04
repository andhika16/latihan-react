import React, { Component } from 'react';
import Counter from './counter'

class Counters extends Component {
  
    render() {
        const { counters, onReset, onDelete, onIncrement } = this.props;
        return (
            <div>
                <button onClick={onReset} className='btn bg-primary m-2'>Reset</button> 
                {counters.map(counter => 
                    <Counter
                        onDelete={onDelete}
                        onIncrement={onIncrement}
                        key={counter.id}
                        counter={counter}>
                    </Counter>)}
            </div>
         );
    }
}
 
export default Counters;