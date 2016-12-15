import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';
import PrintCard from './PrintCard'
import StudyCard from './StudyCard'

var questions = [
    {
      question: "Wermo",
      answer: "A stupid person",
      mValue: 1
    },
    {
      question: "Ee chee wa maa!",
      answer: "Gee whiz",
      mValue: 1
    },
    {
      question: "Kna Naa",
      answer: "Spirit tree",
      mValue: 1
    },
    {
      question: "Jeerota",
      answer: "Friend",
      mValue: 1
    },
    {
      question: "Kreeth",
      answer: "Cave",
      mValue: 1
    },
    {
      question: "Mookiee",
      answer: "Female baby Ewok",
      mValue: 1
    },
    {
      question: "Nuv",
      answer: "Love",
      mValue: 1
    },
    {
      question: "Ooba",
      answer: "Sweet",
      mValue: 1
    },
    {
      question: "Powa",
      answer: "Power",
      mValue: 1
    },
    {
      question: "Roda",
      answer: "To eat",
      mValue: 1
    },
    {
      question: "Sheeu",
      answer: "Name",
      mValue: 1
    },
    {
      question: "Shetai",
      answer: "Warrior",
      mValue: 1
    },
    {
      question: "Sku",
      answer: "Hello",
      mValue: 1
    },
    {
      question: "Sleesh",
      answer: "Berry",
      mValue: 1
    },
    {
      question: "Sunee",
      answer: "Sun",
      mValue: 1
    },
    {
      question: "Teeha",
      answer: "Thank you",
      mValue: 1
    },
    {
      question: "Teeket",
      answer: "Heart",
      mValue: 1
    },
    {
      question: "Sut",
      answer: "Soon",
      mValue: 1
    },
    {
      question: "Thek",
      answer: "Here",
      mValue: 1
    },
    {
      question: "Thees",
      answer: "Good",
      mValue: 1
    },
    {
      question: "T'hesh",
      answer: "Quiet",
      mValue: 1
    },
    {
      question: "Thuk",
      answer: "Rock",
      mValue: 1
    },
    {
      question: "Treek",
      answer: "Go",
      mValue: 1
    },
    {
      question: "Treekthin",
      answer: "Hourney",
      mValue: 1
    },
    {
      question: "Tu",
      answer: "The",
      mValue: 1
    },
    {
      question: "Weewa",
      answer: "House",
      mValue: 1
    },
    {
      question: "Yeha",
      answer: "Goodbye",
      mValue: 1
    },
    {
      question: "Yehan",
      answer: "Peace",
      mValue: 1
    },
    {
      question: "Yesh",
      answer: "Correct",
      mValue: 1
    },
    {
      question: "Drin",
      answer: "Sick",
      mValue: 1
    },
    {
      question: "Churi",
      answer: "Mountain",
      mValue: 1
    },
    {
      question: "Dutak",
      answer: "Arrow",
      mValue: 1
    },
    {
      question: "Eleeo",
      answer: "Never",
      mValue: 1
    },
    {
      question: "Ehda",
      answer: "Evil",
      mValue: 1
    }
  ]


export default class CardPage extends Component {
	constructor(props) {
		super(props)
		this.state = {questions}
		this.Card = this.props.route.printable == "true" ? PrintCard : StudyCard;

	}

	createCards() {
		const cards = this.state.questions.map((card, index) => {
			return 	<div key={index}>
						<this.Card card={card} />
					</div>
		})
		return cards
	}

	render() {
		//console.log('STATE:::', this.state.questions)
		return  <div className='card-page'>
					{this.props.route.printable == 'true' ? 
						<h1>Printable Flash Cards</h1> : <h1>Study Ewokese</h1>}
					{this.createCards()}
				</div>
	}

}

