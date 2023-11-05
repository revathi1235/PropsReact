// import React from 'react'
import './Todo.css'
import { useState } from 'react';
function Todo() {
  
  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState('');
  const addToDo = () => {
    if (toDo.trim() !== '') {
      setToDos([...toDos, toDo]);
      setToDo('');
    }
  };
  
  return (
    <div className='todocontainer'>
   
   <form className='inputsection'>
   <h1>Todo App</h1>
    <input type="text" 
    value={toDo}
    onChange={(e) => setToDo(e.target.value)}
    placeholder='enter list...'/>
     <button type='button' onClick={addToDo}>Add</button> 
   </form>
   <ul>
    <li> <i className="fa fa-trash-alt"></i></li>
   
   </ul>
    </div>
        )
        }
        export default Todo