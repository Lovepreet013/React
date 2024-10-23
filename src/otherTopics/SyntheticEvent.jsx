import React from "react";

//Synthetic event things:
export class SyntheticEventObject extends React.Component{
    state = {}

    handler(e){//here we are using update function inside this.setState, whats happening here is that when we try to type in input field we get error, this is because SyntheticEvent has been nullified
      this.setState((state) => ({ //wrong
        value: e.target.value
      }))
    }
    //to solve problem we write arrow function and use object literal instead of updater function or simple use arrow function instead
    handleChange = (e) =>{
      this.setState((state) => ({ //right
        value : e.target.value
      }));
    }

    render(){
      return(
        <div>
          <input type="text" onChange={this.handleChange} />
          <p>{`this is value : ${this.state.value}`}</p>
        </div>
      )
    }
  }

  //another solution is Writing values into variables

  export class SyntheticEventObject2 extends React.Component{
    state = {}

    //The callback does not try to access the SyntheticEvent anymore but only the variable which has been assigned a value from the SyntheticEvent.
    handler = (e) =>{
      const {value} = e.target //variable
      this.setState(() => ({value}))
    }

    //OR e.persist()
    //First, the e.persist() method is invoked. Second, the updater function can safely access e.target and its value property.
    handleChange = (e) => {
      e.persist()
      this.setState(()=>({
        value: e.target.value
      }))
    }

    render(){
      return(
        <div>
          <input type="text" onChange={this.handleChange} />
          <p>{`this is value : ${this.state.value}`}</p>
        </div>
      )
    }
  }