import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';


const initialState = {
  todos: [],
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type){
    case 'todos/loading':
      return {
        ...state,
        loading: true
      }
    
    case 'todos/item':
      return {
        ...state, 
        todos: action.payload,
        loading: false
      };
    case 'todos/delete':
      return {
        ...state,
        todos: state.todos.filter(item => item.id !== action.payload)
      }
  
    default:
      return state;
  }
}

const store = createStore(reducer, applyMiddleware(thunk))

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <App/>
  </Provider>
)