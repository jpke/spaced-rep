import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Landing from './Landing';
import './index.css';
import { Provider } from 'react-redux'
import store from './configureStore'
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Landing} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
