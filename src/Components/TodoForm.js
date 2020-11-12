import React, { Component } from 'react';

class TodoForm extends Component {
    constructor(props){
        super(props)
        this.state ={
            data :props.item,
            name:''
        }
    }
    onNameChange =(event) => {
        this.setState({
            name :event.target.value
        })
    }

    addItem =() => {
        this.props.addItem(this.state.name)
    }
    render() {
        console.log(this.state.data)
        return (
            <div class="container ml-5">
                <h3 className="text-center">Todo List </h3>
                <input 
                style={{marginLeft:420}}
                value={this.state.name}
                onChange ={this.onNameChange}/>
                <button className='btn btn-link' onClick={this.addItem}>Add </button>
            </div>
        );
    }
}

export default TodoForm;