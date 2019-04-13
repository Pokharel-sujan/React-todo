import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      message:"Hello Samikshya",
      newTodo:"",
      todos:[]

    };
  }
  newTodoChanged(event){
    console.log(event.target.value);
    this.setState({
      newTodo: event.target.value
    });
  };
  

  formSubmitted(event){
    event.preventDefault();
    
    this.setState({
      newTodo:"",
      todos:[...this.state.todos,{
        title:this.state.newTodo,
        done:false
      }]
    });


  }
  toggleTodoDone(event,index){
    const todos= [...this.state.todos]; //copy of array
    todos[index] = {...todos[index]};     //copy the todo
    todos[index].done = event.target.checked;   //update done property oncopied todo
    this.setState({
      todos
    });
  }
  removeTodo(index){
    const todos = [...this.state.todos]; //copy the array
    todos.splice(index,1);
    
    this.setState({
      todos
    });
  }

  render() {
    return (
      <div className="App">
      <h3> {this.state.message}</h3>
      <form onSubmit= {(event)=>this.formSubmitted(event)}>
        <label htmlFor="newTodo">New Todo </label>
        
        {/** this gets invoked this  in set state is going to be only be pointed; Fat arrow has lexical this or could be done by bind()
        <form onSubmit= {this.formSubmitted.bind(this)}
        */}
        <input onChange = {(event)=>this.newTodoChanged(event)}id="newTodo" name = "newTodo" value={this.state.newTodo}/>   
        <button type= "submit">Add Todo</button> 
      </form>
      <ul>
        {this.state.todos.map((todo,index)=>{
          return (<li key = {todo.title}>
          <input onChange={(event)=>this.toggleTodoDone(event,index)}type ="checkbox"/>
          <span style={{textDecoration: todo.done ? 'line-through':"'inherit"}}>
          {todo.title}</span>

          <button onClick ={()=>this.removeTodo(index)}> Remove </button>
          </li>)
        })}
      </ul>


        
      </div>
    );
  }
}

export default App;
