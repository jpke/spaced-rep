import React, { Component } from 'react';
import { Link } from 'react-router';
import * as actions from './actions.js';
import { connect } from 'react-redux';

class Landing extends Component {
	handleOnClick() {
		this.props.loggedIn()
		console.log(this.props.isLoggedIn)
		// browserHistory.push('/auth/google/')

	}

	componentWillMount() {
		this.props.saveCookie()
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