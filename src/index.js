import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';



import './index.css';
import './styles/lib/animate.css';

import reducer from './reducers';

import CRouter from './routes';
import registerServiceWorker from './registerServiceWorker';

// redux 注入操作
const middleware = [thunk];
const store = createStore(reducer, applyMiddleware(...middleware));
console.log('====================================');
console.log(store.getState());
console.log('====================================');

ReactDOM.render(
    <Provider store = {store}>
        <CRouter store={store} />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
