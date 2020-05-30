import React from "react";
import { Component } from "react";


class AddTodo extends Component {
    state = {
        Id: "",
        Title: "",
        Status: ""

    };

    IdChange = (event) => {
        this.setState({
            Id: event.target.value
        });
    };

    TitleChange = (event) => {
        this.setState({
            Title: event.target.value
        });
    };

    StatusChange = (event) => {
        this.setState({
            Status: event.target.value
        });
    };

    TodoSubmit = (event) => {
        event.preventDefault()
        this.props.onAdd({
            Id: this.state.Id, 
            Title: this.state.Title,
            Status: this.state.Status
        }); 
        this.setState({
            Id: "",
            Title: "",
            Status: ""
        })
    };

    render() {

        return( 
            <div>
                <h3>Cadastro de tarefas</h3>
                <form onSubmit={this.TodoSubmit}>
                    <div className="form-group">
                        <input className="form-control" value={this.state.Id} placeholder="Digite o id" 
                         onChange={this.IdChange}
                        />
                    </div>

                    <div className="form-group">
                        <input className="form-control" value={this.state.Title} placeholder="Digite a tarefa" 
                        onChange={this.TitleChange}
                        />
                    </div>

                    <div className="form-group">
                        <select className="form-control" value={this.state.Status}
                        onChange={this.StatusChange}>
                            <option value="Pending">Pending</option>
                            <option value="Done">Done</option>
                        </select>
                    </div>

                    <button type="submit" className="form-control btn btn-success">Cadastre uma nova tarefa</button>
                </form>
            </div>
        )
    }
}

export default AddTodo; 