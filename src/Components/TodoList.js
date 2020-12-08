import React,{useState} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'
function TodoList() {
    const[todos,setTodos] =useState([]);


    const addTodo =todo =>{
      const newtodo = [...todos,todo]
      setTodos(newtodo)
      console.log(newtodo)
    }

    const handleDelete = id => {
       const removearr=[...todos].filter(todo => todo.id !== id)
       setTodos(removearr);

    }
    
    return (
        <div>
        <h3 id ="heading" style={{fontStyle :'italic'}} className="d-flex justify-content-center">What's on your mind !!</h3><br />
        <TodoForm onSubmit ={addTodo}/>
        <Todo 
        todos ={todos} 
        removeTodo ={handleDelete} 
        />
        </div>
    )
}

export default TodoList
