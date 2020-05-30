import React from "react";
import { Component } from "react"; 

class Exemplo extends Component {

    state = {
        nome: 'Stephanie', 
        sobrenome: 'Vapsys'
    };

    clickNoBotao = () => {
        console.log('Foi clicado no botão!');
        this.setState({
            nome: 'Maria',
            sobrenome: 'João'
        })

    };

    render(){
        return(
            <div>
                <h1>{this.state.nome} {this.state.sobrenome}</h1>
                <button type="button" onClick={this.clickNoBotao}>Clique</button>
            </div>
        )
    }
}

export default Exemplo; 