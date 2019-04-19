import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route} from 'react-router-dom'
import App from './App';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {store} from './reducer'
ReactDOM.render(
<BrowserRouter>
<Provider store = {store}>
<App />
</Provider>
</BrowserRouter>
, document.getElementById('root'));

