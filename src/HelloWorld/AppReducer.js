export default(state = {}, action) => { // Estado Inicial
  switch (action.type) { // Ação
    case 'SAY_HELLO': // Novo Estado
        return Object.assign({}, state, { data: 'HelloWorld' }) // PRIMEIRO PARAMETRO, ESTADO INICIAL, E O QUE FORMAR
      default:
        return state
  }
}
