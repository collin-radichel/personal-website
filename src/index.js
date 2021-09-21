import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import './index.css';
import App from './Components/App/App';
import projects from './modules/projects.js';

const projectReducer = (state = projects, action) => {
  return state;
};

const store = createStore(
  combineReducers({
    projectReducer
  })
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
