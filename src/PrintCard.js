import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';

export default function(props) {

	const card = props.card ? props.card: {}


	return  <div className='word-card'>
				<p className='light-side'>{card.question}</p>
				<p className='dark-side'>{card.answer}</p>
			</div>
	

}