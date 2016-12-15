import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Landing from './Landing';
import Quiz from './Quiz.js'
import CardPage from './CardPage.js'
import './index.css';
import { Provider } from 'react-redux'
import store from './configureStore'
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import RequireAuth from './requireAuth'


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Landing} />
        <Route path="quiz" component={RequireAuth(Quiz)} />
        <Route path="print-cards" component={CardPage} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
