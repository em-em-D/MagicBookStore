import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import App from './App';

const initialState = {
  books: [
    { id: 1, title: 'The Last Flight', category: 'Action' },
    { id: 2, title: 'Chronicles of Narnia', category: 'History' },
  ],
};

const store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
