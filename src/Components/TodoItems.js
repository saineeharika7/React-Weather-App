import React, { Component } from 'react';

class TodoItems extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: props.item
        }
    }
   
    render() {
        const output = this.props.item.map(data =>
            <li className="card pl-3 mt-1 pt-2" key={data.index}>{data}
                <button
                    style={{ marginLeft: 900, marginBottom: 20 }}
                    className="btn btn-primary btn-sm float-right" >
                    delete
           </button>
            </li>)
        return (
            <div>
                <li className="list-group-item">
                    {output}</li>
            </div>
        );
    }
}

export default TodoItems;