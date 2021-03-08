import React,{useState} from 'react'
import TodoForm from './TodoForm'
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'


function Todo({todos,completeTodo,removeTodo}) {
    const [edit,setEdit] = useState({
       id: null,
       value: ''
        
    });
    return todos.map((todo,index) => (
      <div 
      className={todo.isComplete? 'todo-row complete':'todo-row'} key={index}
      >   
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
          {todo.text}
          </div>
        <div className="icon">
            <RiCloseCircleLine 
            onclick={() =>removeTodo(todo.id)}
            className='delete-icon'
            />
            <TiEdit onclick={() =>setEdit({id:todo.id, value:todo.text})}
            className='edit-icon'
         />
        </div>
</div>
    
    ));  
   
}

export default Todo

//Todo.js
import React,{useState} from 'react';

function TodoForm(props) {
    const[input,setInput]=useState('')

const handleChange = sha => {
setInput(sha.target.value);
};

const handleSubmit = sha =>{
    sha.preventDefault();

  props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text:input
     })
      setInput('');
};

    return (
        <form className='todo-form' onSubmit={handleSubmit}>
         <input 
         type='text'
         placeholder='Add a Todo'
         value={input}  
         name='text' 
         className='todo-input'
         onChange={handleChange}
         />
         <button className='todo-button'>Add Todo</button>
        </form>
    )
}

export default TodoForm

import React,{useState} from 'react';
import Todo from './Todo';
import TodoForm from'./TodoForm';

function TodoList() {
    const [todos, setTodos]= useState([]);

    const newTodos =[todo, ...todos];
    setTodos(newTodos);  
};


export default TodoList
