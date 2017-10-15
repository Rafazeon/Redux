import * as ActionTypes from './../actions/ActionTypes'
export default (state = 0 , action) => { // Pode utilizar função ou arrow function =>
    switch (action.type) {
      case ActionTypes.ON_INCREMENT: // Ação
      let valueInc = action.payload.value

      // if(valueInc === 'undefined') {
      //   valueInc = 0
      // }
      //
      //   return Object.assign({}, state, { value: valueInc + 1 }) // Novo Estado
        return state + 1
      break;


      case ActionTypes.ON_DECREMENT: // Ação
      let valueDesc = action.payload.value

      // if(valueInc === 'undefined') {
      //   valueInc = 0
      // }
      //
      //   return Object.assign({}, state, { value: valueDesc - 1 }) // Novo Estado
        return state - 1
      break;

        default:
        return state

    }
}

// const é somente leitura
// let para declarar a variavel
