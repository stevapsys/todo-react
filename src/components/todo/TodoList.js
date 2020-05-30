import React from "react";
import { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faClipboardCheck} from '@fortawesome/free-solid-svg-icons';
import AddTodo from "../addtodo/AddTodo";


 

class TodoList extends Component {
    state = {
        todos: [
            {
                Id: "1",
                Title: "ir ao supermercado",
                Status: "Done"
            },

            {                                       
                Id: "2",
                Title: "cortar cabelo",
                Status: "Done"

            }, 

            {                                       
                Id: "3",
                Title: "Estudar",
                Status: "Done"

            }, 

            {                                       
                Id: "4",
                Title: "Dormir",
                Status: "Pending"

            }, 
        ]
    }

    deteleToDo = (todo) => {
        const filteredItems = this.state.todos.filter(x => 
            x.Id !== todo.Id)
            this.setState({
                todos:filteredItems
            });
    }; 

    checkToDo = (x) => {
        this.setState(state => ({
            todos: state.todos.map( todo => { 
                if(todo.Id === x.Id) {
                    return {
                        ...todo,
                        Status: todo.Status === "Pending" ? "Done" : "Pending"
                    }
                } else {
                    return todo
                }
            })
        }))
    };

    render() {
        return (
            <div>
                <AddTodo onAdd={this.addToDo}></AddTodo>
                <h1>Lista de tarefa</h1>

                <table className="table table-dark">
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Title</td>
                            <td>Status</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.todos.map (todo => {
                            return (
                                <tr key={todo.Id}>
                                    <td>{todo.Id}</td>
                                    <td>{todo.Title}</td>
                                    <td style={{color: todo.Status === "Done"  ? "lightgreen" : "red"}}>{todo.Status}</td>
                                    <td>
                                        <button className="btn btn-danger mr-2" onClick={() => this.deteleToDo(todo)}><FontAwesomeIcon icon={ faTrash }/>
                                        </button>
                                        <button className="btn btn-success" onClick={() => this.checkToDo(todo)}><FontAwesomeIcon icon={faClipboardCheck}/></button>

                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TodoList; 