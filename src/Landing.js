import React, { Component } from 'react';
import { Link } from 'react-router';
import * as actions from './actions.js';
import { connect } from 'react-redux';
import cookie from 'react-cookie'

class Landing extends Component {

	componentWillMount() {
		this.props.saveCookie()
		if(cookie.load('accessToken')) this.props.loggedIn()
	}
	
	render() {
    return <div>
				<h1>Learn Ewok!!</h1>
				<h3>Login through Google</h3>
				<div>Login Component Here</div>
				{
					this.props.isLoggedIn ? <Link to="/quiz">Go To Quiz</Link> : 
					<a href='/auth/google/'>Log In</a>
       			}
           </div>
  }
}

function mapStateToProps(state) {
	return {
		isLoggedIn : state.isLoggedIn
	}
}

export default connect(mapStateToProps, actions)(Landing);