import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import './Style/index.css';
import App from './App';
import buttonReducer from './Redux/Reducers/index';
import middleware from "./Redux/Actions/middleware";

const store = createStore(buttonReducer, applyMiddleware(middleware));

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);
