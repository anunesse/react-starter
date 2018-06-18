import React from 'react';
import ReactDOM from 'react-dom';
import Index from './pages/index';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import authReducer from './reducers/authReducer';

const store = createStore(authReducer);

ReactDOM.render(<Provider store={store}><Index /></Provider>, document.querySelector('#root'));
