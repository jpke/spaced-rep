import React, { Component } from 'react';
import { Link } from 'react-router';
import * as actions from './actions.js';
import { connect } from 'react-redux';

class Landing extends Component {
	handleOnClick() {
		this.props.loggedIn()
		console.log(this.props.isLoggedIn)
		window.location.href='http://localhost:3090/auth/google/'
	}

	componentWillMount() {
		this.props.saveCookie()
	}
	
	render() {
    return <div className='landing'>
				<h1>Learn Ewokese</h1>
				<img className='ewok-friend' src='https://s.yimg.com/ny/api/res/1.2/8.rPRiBdkjRF2AlaQP_.0w--/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAwO2lsPXBsYW5l/http://36.media.tumblr.com/e19520d819ed6bf57dfe8a170858fb6c/tumblr_inline_nzeqzxNTTk1t0ijhl_1280.jpg' />
				<h2>A long time ago in a galaxy far, far away... </h2>
	       		<h3>Ewoks existed. Learn to speak Ewokese!</h3>
				<div>
					{
						this.props.isLoggedIn ? <Link to="/quiz">Go To Quiz</Link> : 
						<button onClick={this.handleOnClick.bind(this)}>Login through Google</button> 
	       			}
				</div>
				<div>
	       			{
						this.props.isLoggedIn ? <Link to="/study-cards">Go To Study Page</Link> : "" 
	       			}
	       			{
						this.props.isLoggedIn ? <Link to="/print-cards">Print Flash Cards</Link> : "" 
	       			}
	       		</div>
           </div>
  }
}

function mapStateToProps(state) {
	return {
		isLoggedIn : state.isLoggedIn
	}
}

export default connect(mapStateToProps, actions)(Landing);