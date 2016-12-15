import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';

export default class CardPage extends Component {
	
	render() {

		return  <div className='word-card'>
					<p className='light-side'>{this.props.card.question}</p>
					<p className='dark-side'>{this.props.card.answer}</p>
				</div>
	
	}
}