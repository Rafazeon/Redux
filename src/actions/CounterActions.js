import * as ActionTypes from './ActionTypes' // Aglomerado de ações a serem executadas
const onIncrement = (value) => { // Recebe como parâmetro para o objeto
    return{
      type: ActionTypes.ON_INCREMENT,                                   // Sempre que criar uma ação exportar um novo ActionType
      payload: {                              // Objeto
          value
      }
    }
}

const onDecrement = (value) => {
  return{
    type: ActionTypes.ON_DECREMENT,                                   // Sempre que criar uma ação exportar um novo ActionType
    payload: {                              // Objeto
        value
    }
  }
}

export default{
  onIncrement,
  onDecrement
}
