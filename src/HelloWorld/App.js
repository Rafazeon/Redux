import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)

    this.handleClickBtn = this.handleClickBtn.bind(this) // Ao clicar retorna a ação handleClickBtn
  }

  handleClickBtn() {
     this.props.sayHello() // Pega as propriedades de outro evento ao disparar
  }

    render() {
      const { msg } = this.props
      return(
        <div>
          <button onClick={this.handleClickBtn}> Click To Hello</button>
          <p>{ msg.data }</p>
        </div>
      )

    }
}

// this.handleClickBtn Dispara o evento
// msg.data declara o data no App Reducer para não dar erro de variáveis iguais

export default App;
