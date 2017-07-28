import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker';
import flightReducer  from './reducers/flightReducer'
import thunkMiddleware from 'redux-thunk'


const store = createStore(flightReducer, applyMiddleware(thunkMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() )

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
