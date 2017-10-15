import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import registerServiceWorker from './registerServiceWorker'
import cfgStore from './store'
import { Provider } from 'react-redux'
import App from './containers/App'

const store = cfgStore()

// Provider dispara eventos através de um Middleware
ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
