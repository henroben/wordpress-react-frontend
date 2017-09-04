import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

import App from './components/app';
import reducers from './reducers';

import '../style/bootstrap-3/css/bootstrap.min.css';
import 'font-awesome/scss/font-awesome.scss';
import '../style/style.scss';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('.container'));
