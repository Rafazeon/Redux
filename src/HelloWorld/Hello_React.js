import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Hello extends Component {
  constructor(props){
    super(props)

    this.handleClickBtn = this.handleClickBtn.bind(this) // Ao clicar retorna a ação handleClickBtn
  }

  componentWillMount() {
    this.setState({
      msg: '' // Recebe o estado novo
    })
  }

  handleClickBtn(){
    this.setState({
      msg: "Hello World"
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClickBtn}> Click To Hello</button>
        <p>{this.state.msg}</p> // Mostra a mensagem para o usuário
      </div>

    );
  }
}

export default App;
