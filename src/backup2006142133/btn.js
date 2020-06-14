import React, { Component } from 'react';

const array = [0, 1];


class fbtn extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 1 };
      }
    
      handleClick(num) {
        array.push(this.state.count);
        console.log(array);
        this.setState({ count: num });
        console.log(array, this.state.count);
      }
    render(){
        return(
            <div>
                <h1>FEBONACCI</h1>
                <h2>{this.state.count}</h2>
                <button
                   id="plus"
                   onClick={() => {
                   this.handleClick(this.state.count + array[array.length - 1]);
                   }}
                >
                  next number...
                </button>
            </div>
        );
    }
}

export default fbtn;