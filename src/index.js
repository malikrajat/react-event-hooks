import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/app';
import reducer from './reducers';

ReactDOM.render(
    <Provider store={createStore(reducer)}>
        <App/>
    </Provider>
    , document.querySelector('#root')
);