import React, { Component } from 'react';

class Counter extends Component {
    state = {
        value : this.props.counter.value
    }
    
 
    
    render() {
        
        return (
            <div className="m-2">
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={() => {this.props.onIncrement(this.props.counter)}} className='btn bg-secondary' >Increment</button>
                <button onClick={ () => {this.props.onDelete(this.props.counter.id)} } className="btn bg-danger m-2">Delete</button>
            </div>
        );
    };
    getBadgeClasses() {
        let classes = 'badge m-2 bg-';
        classes += this.props.counter.value === 0 ? 'warning' : 'primary';
        return classes;
    }

    formatCount() {
        const { value } = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }
}
 
export default Counter;
