import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';

const personFeelings =(state = 0, action) => {
    if (action.type === 'SET_PERSON_FEELINGS') {
        return action.payload;
    } else if (action.type === 'CLEAR_FORM') {
        return 0;
    }
    return state
};

const personUnderstanding = (state = 0, action) => {
    if (action.type === 'SET_PERSON_UNDERSTANDING') {
        return action.payload;
    } else if (action.type === 'CLEAR_FORM') {
        return 0;
    }
    return state
};

const personSupport = (state = 0, action) => {
    if (action.type === 'SET_PERSON_SUPPORT') {
        return action.payload;
    } else if (action.type === 'CLEAR_FORM') {
        return 0;
    }
    return state
};

const personComments = (state = '', action) => {
    if (action.type === 'SET_PERSON_COMMENTS') {
        return action.payload;
    } else if (action.type === 'CLEAR_FORM') {
        return '';
    }
    return state
};

const storeInstance = createStore(
    combineReducers(
        {
            personFeelings,
            personUnderstanding,
            personSupport,
            personComments
        }
    ),
    applyMiddleware(logger)
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>
);
