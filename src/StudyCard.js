import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';

export default class CardPage extends Component {
	
	constructor(props) {
		super(props)
		
		this.state = {
			"side": "question"
		}
	}

	onClickWord () {
		if (this.state.side === 'question') {
			this.setState({'side': 'answer'})
		} else {
			this.setState({'side': 'question'})
		}
		console.log('STATE SIDE', this.state.side)
	}


	render() {

		return  <div>
					<div className='study-card'>
						<p onClick={this.onClickWord.bind(this)}>
							{this.props.card [this.state.side]}
						</p>
					</div>
				</div>
	
	}
}

//initial state question
//a way of toggling from question to answer
//renderer acknowleding which on display