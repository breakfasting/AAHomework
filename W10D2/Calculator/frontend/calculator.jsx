import React from "react";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {result:0, num1:"", num2:""};
    this.setNum1 = this.setNum1.bind(this);
    this.setNum2 = this.setNum2.bind(this);
  }

  setNum1 (e) { 
    this.setState({ num1: e.currentTarget.value})
  }
  setNum2 (e) { 
    this.setState({ num2: e.currentTarget.value})
  }

  add (e) {
    e.preventDefault();
    let result = parseInt(this.state.num1 === "" ? 0 : this.state.num1) + parseInt(this.state.num2 === "" ? 0 : this.state.num2)
    this.setState({ result }) ;
  }

  subtract (e) {
    e.preventDefault();
    let result = parseInt(this.state.num1) - parseInt(this.state.num2);
    this.setState({ result }) ;
  }

  multiply (e) {
    e.preventDefault();
    let result = parseInt(this.state.num1) * parseInt(this.state.num2)
    this.setState({ result }) ;
  }

  divide (e) {
    e.preventDefault();
    if (parseInt(this.state.num2) === 0) {
      this.setState({ result: "Your computer has just EXPLODED!!"})
    } else  {
      let result = parseInt(this.state.num1) / parseInt(this.state.num2)
    this.setState({ result }) ;
    }
  }

  clear (e) {
    e.preventDefault();
    this.setState({ result:0, num1:"", num2:"" })
  }

  render() {
    return (
      <div>
        <h1>{this.state.result}</h1>
        
        <input type="text" onChange={ this.setNum1 } value={ this.state.num1 }/>
        <input type="text" onChange={this.setNum2} value={ this.state.num2 }/>
        
        <button onClick={ e => this.clear(e) }>Clear</button>
        
        <button onClick={ e => this.add(e) }>Add</button>
        <button onClick={ e => this.subtract(e) }>Subtract</button>
        <button onClick={ e => this.multiply(e) }>Multiply</button>
        <button onClick={ e => this.divide(e) }>Divide</button>
      </div>

    );
  }
}

export default Calculator;

