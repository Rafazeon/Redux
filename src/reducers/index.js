import { combineReducers } from 'redux'
import CounterReducer from './CounterReducer'

// Múltiplos Reducers
export default combineReducers({
    counter: CounterReducer // Propriedade
});
