import React, { Component } from 'react';
import { Link } from 'react-router';
import authenticateUser from './actions.js';

class Landing extends Component {
  render() {
    return <div>
              <h1>Learn Ewok!!</h1>
              <h3>Login through Google</h3>
              <div>Login Component Here</div>
              <button onSubmit={console.log('button clicked')}>Authenticate User</button>
              <Link to="/quiz">Go To Quiz</Link>
           </div>
  }
}


export default Landing