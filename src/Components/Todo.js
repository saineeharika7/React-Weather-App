import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function Todo({ removeTodo, todos }) {


    const list = todos?.map((todo) => {
        return <div className="todo-list mt-3" key ={todo.id}>
            <li className="list-group-item">{todo.text}
             <button className ='btn btn-dark float-right ' style={{marginTop:"-7px"}} onClick={() => removeTodo(todo.id)}>x</button>

</li>
        </div>
    })
    return (
        <div>
            
            {list}
        </div>
    )
}

export default Todo
