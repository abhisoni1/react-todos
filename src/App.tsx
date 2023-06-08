import React, {useState} from 'react';
import './App.css';
import {ToDoTable} from './components/ToDoTable';
import {NewToDoForm} from './components/NewToDoForm';
import { TodoModel } from './Models/TodoModel';

export const App = () => {

  const [showAddTodoForm, setShowAddTodoForm] = useState(false);

  const [todos, setTodos] = useState([
    { rowNumber : 1, rowDescription : 'Feed Puppe', rowAssigned : 'Eric'},
    { rowNumber : 2, rowDescription : 'Water Plants', rowAssigned : 'Eric'},
    { rowNumber : 3, rowDescription : 'Clean kitchen', rowAssigned : 'Eric'},
    { rowNumber : 4, rowDescription  : 'Make Dinner', rowAssigned : 'Eric'}
  ]
  )

  const addTodo = (description : string, assigned : string) => {
    let rowNumber = 0;
    if ( todos.length > 0){
      rowNumber = todos[todos.length - 1].rowNumber + 1;
    }else{
      rowNumber = 1;
    }
    
    const newTodo : TodoModel = { rowNumber : rowNumber, rowDescription : description, rowAssigned : assigned};
    
    setTodos(todos => [...todos, newTodo])
  }
  
  const deleteTodo = (deleteTodoRowNumber : number) => {
    let filteredTodos = todos.filter( function (value){
      return value.rowNumber !== deleteTodoRowNumber;
    });
    setTodos(filteredTodos);
  }

  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          Your Todo's
        </div>
        <div className='card-body'>
          <ToDoTable todos={todos} deleteTodo={deleteTodo}/>

          <button className='btn btn-primary' onClick={() => setShowAddTodoForm(!showAddTodoForm)}>
            {showAddTodoForm? 'Close New To Do': 'New to Do'} 
          </button>

          
          {showAddTodoForm && 
          <NewToDoForm addTodo={addTodo}/>
          }
        </div>
      </div>
      
    </div>
  );
}
