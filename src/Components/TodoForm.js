import React, { useState,useEffect,useRef } from 'react'

function TodoForm(props) {
    const [input, setInput] = useState('');
    const inputRef =useRef(null);

    useEffect(()=> {
        inputRef.current.focus()
    })

    const changeHandler = e => {
        setInput(e.target.value)
    }
    const submitHandler = e => {
        e.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        })
        setInput('')
    }
    return (
        <form onSubmit={submitHandler}>
            <input
                className="form-control"
                type='text'
                placeholder="Add To-Do"
                name='text'
                value={input}
                onChange={changeHandler} 
                ref ={inputRef}/> <br />
            <div className="text-center">
                <button className="btn btn-dark " type='submit'>Add Todo</button>

            </div>


        </form>
    )
}

export default TodoForm
