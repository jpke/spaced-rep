import React, { Component } from 'react';
import { Link } from 'react-router';
import * as actions from './actions.js';
import { connect } from 'react-redux';

class Landing extends Component {
	render() {
    return <div>
              <h1>Learn Ewok!!</h1>
              <h3>Login through Google</h3>
              <div>Login Component Here</div>
              <a href="http://localhost:3090/auth/google/">Authenticate User</a>
              <Link to="/quiz">Go To Quiz</Link>
           </div>
  }
}

export default connect(null, actions)(Landing);