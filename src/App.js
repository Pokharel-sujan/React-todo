import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      message:"Hello Samikshya",
      newTodo:""

    };
  }
  newTodoChanged(event){
    console.log(event.target.value);
    this.setState({})
  }

  formSubmitted(event){
    event.preventDefault();
    console.log('form Submitted');


  }
  render() {
    return (
      <div className="App">
      <h3> {this.state.message}</h3>
      <form onSubmit= {this.formSubmitted}>
        <label htmlFor="newTodo">New Todo </label>
        <input onChange = {this.newTodoChanged}id="newTodo" name = "newTodo"/>   
        <button type= "submit">Add Todo</button> 
      </form>


       
      </div>
    );
  }
}

export default App;
