import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {applyMiddleware, createStore} from "redux";
import {Provider} from 'react-redux';
import rootReducer from "./store/reducers/rootReducer";
import * as serviceWorker from './serviceWorker';
import thunk from 'redux-thunk'

const store = createStore(rootReducer,
    applyMiddleware(thunk)
);

const app = (
    <Provider store={store}>
            <App />
    </Provider>
);


ReactDOM.render(app, document.getElementById('root'));
serviceWorker.unregister();

