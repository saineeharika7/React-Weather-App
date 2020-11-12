import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoForm from './TodoForm';
import TodoItems from './TodoItems';

class Todo extends Component {

    constructor(){
        super()
        this.state ={
            items : ["buy milk","dance-class"]
        }
    }
    addItem = (data) => {
        this.setState({
            items :[...this.state.items,data]
        })
    }
    render() {
        return (
            <div className ="container ml-6">                
             <TodoForm  
             item ={this.state.items}
             addItem ={this.addItem}/> 
             <TodoItems item ={this.state.items} />                
            </div>
        );
    }
}

export default Todo;