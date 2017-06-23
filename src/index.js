import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import configureStore from './store/configureStore'
import {retrieveTasks} from './actions'
import { Provider } from 'react-redux'
import './index.css'

const store = configureStore()

store.dispatch(retrieveTasks())


ReactDOM.render(
    <Provider store={store}>
        <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
