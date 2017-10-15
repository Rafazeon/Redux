import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux' // Método redux
import AppReducer from './AppReducer'

const store = createStore(AppReducer)

const fnRender = () => {
ReactDOM.render(
  <App
      msg={ store.getState() } // Capitura os valores de dentro do App Reducer
      sayHello={() => store.dispatch({ type:'SAY_HELLO' }) }>, // Direciona a ação que vem do click no App,
                                                               // Dispatch dispara a ação dentro do App Reducer

  </App>,
  document.getElementById('root') // Para renderizar no index.html o ID Root
)}

fnRender() // executa a função
store.subscribe(fnRender)

registerServiceWorker();
