import React, { Component } from 'react'
import { connect } from 'react-redux' // Para mapear os eventos
import CounterActions from './../actions/CounterActions' // Para importar os eventos

class Counter extends Component{
    constructor(props){
      super(props)

      this.handleIncrement = this.handleIncrement.bind(this) // Para funcionar a ação
      this.handleDecrement = this.handleDecrement.bind(this) // Para funcionar a ação
    }

    handleIncrement(){
        this.props.onIncrement()
    }

    handleDecrement(){
        this.props.onDecrement()
    }

    render() {
      const { value } = this.props
      return(
        <div>
          <h2>Clicked times: { value } times</h2>
          <button onClick={this.handleIncrement}>Increment</button>
          <button onClick={this.handleDecrement}>Decrement</button>
        </div>
      )
    }
}

const mapStateToProps = (state) => { // Mapeia o Objeto, manda do estado para a propriedade
  return {
    value: state.counter // Propriedade localizada no reducers/index
  }
}

const mapDispatchtoProps = (dispatch) => { // Eventos
  return {
    onIncrement: (value) => dispatch(CounterActions.onIncrement(value)), // Envia para a ação, passo o value como patrâmetro e recebo como argumento dentro da função, no arquivo CounterActions
    onDecrement: (value) => dispatch(CounterActions.onDecrement(value))
  }
}

export default connect(mapStateToProps, mapDispatchtoProps)(Counter) // Dinamicamente todas as propriedades enviada para a props aparecera no Componente principal
