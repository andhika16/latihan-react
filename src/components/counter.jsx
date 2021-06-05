import React, { Component } from 'react';

class Counter extends Component {
    state = {
        value : this.props.counter.value
    }
    
 
 Card = () => {
    return (
        <div className="col-md-3">
            <div className="card mb-2 rounded-0">
                <div className="card-body rounded-0" >
                    <h5 className="card-title">Card title</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle😂🕊</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                </div>
            </div>
        </div>
    );
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
