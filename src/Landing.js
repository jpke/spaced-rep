import React, { Component } from 'react';
import { Link } from 'react-router';

class Landing extends Component {
  render() {
    return <div>
              <h1>Learn Ewok!!</h1>
              <h3>Login through Google</h3>
              <div>Login Component Here</div>
              <Link to="/quiz">Go To Quiz</Link>
           </div>
  }
}


export default Landing