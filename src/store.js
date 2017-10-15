import { createStore } from 'redux' // Método redux
import reducers from './reducers'

// Responsavel por criar a nova store
const cfgStore = () => {
    return createStore(
      reducers
    )
}

export default cfgStore // Para poder importar
