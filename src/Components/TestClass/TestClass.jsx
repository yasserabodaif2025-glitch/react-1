import React, { Component } from 'react'

export default class TestClass extends Component {
//state  variable inside the class 
  state={
      name:'aly',
      age:30,
      balance:400,
  }
  // your Methods
  increaseBalance=(x)=>{
    this.setState({balance:this.state.balance+x})
  }
  changeName=(str)=>{
    this.setState({name:str})
  }
  //React render Method witch return  only one html element
  render() {
    return (
      <div className=' text-center'>
        <h4>hi from class component </h4>
        <div className="mb-3">
          <label htmlFor="xy11" className="form-label">Name : </label>
          {/* input event handler  */}
          <input type="text" className="form-control" id="xy11"
            onKeyUp={(e)=>{this.changeName(e.target.value)}}   />
        </div>
        <h4>your name is : {this.state.name}</h4>
        <h4 style={{color:'red'}}>your age is : {this.state.age}</h4>
                      {/* state from inside      props is a variable from outside the class */}
      <h3>your Balance is : {this.state.balance}{this.props.currency}</h3>
                                
      <button onClick={()=>{this.increaseBalance(this.props.val)}}>increase</button>
      </div>
    )
  }
}
