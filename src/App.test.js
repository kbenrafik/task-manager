import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import App from './App'
import configureStore from './store/configureStore'

it('renders without crashing', () => {
  const store = configureStore()
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
          <App />
    </Provider>,
    div);
});
