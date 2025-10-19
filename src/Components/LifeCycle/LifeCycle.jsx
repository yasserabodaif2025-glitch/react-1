import React, { Component } from 'react'

export default class LifeCycle extends Component {
    constructor(){
        super()
        this.state={myCycle:"Please Wait for initial"}
        console.log('1-Hi from constructor'); 
    }

    componentDidMount(){
        console.log('2-hi from DidMount');
        setTimeout(() => {
            this.setState({myCycle:'we now init'})
        }, 3000);
        
    }
    componentDidUpdate(){
          console.log('hi after Update');
    }
    componentWillUnmount(){
         console.log('hi after Unmount');
    }
  render() {
    return (
      <div>
        <h1>{this.state.myCycle}</h1>
      </div>
    )
  }
}
