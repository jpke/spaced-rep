import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';

class Quiz extends Component {
  handleFormSubmit(e) {
    e.preventDefault();
    console.log(e.target.englishInput.value);
    let isCorrect = (e.target.englishInput.value === this.props.questions.answer) ? true : false;
    console.log('IS CORRECT: ', isCorrect)
    this.props.checkResponse(isCorrect)
  }
  renderEwok(numCorrect) {
    let temp = [];
    for (let i = 0; i < this.props.numCorrect; i++) {
        console.log('RENDER EWOK?')
        temp.push(<img className='thugLife' key={i} src="http://overmental.com/wp-content/uploads/2015/06/Wicket-thug-life.jpg" />)
    }
    console.log('TEMP:::', temp)
    return (
      <div>{temp}</div>
    )
  }
  render() {
    return <div>
            <h1>Ewokese Quiz</h1>
            <div className="question-card"> 
                <h3>Ewok:</h3><p>{this.props.questions.question}</p>
                <h3>English:</h3>
                <form onSubmit={this.handleFormSubmit.bind(this)}>
                <input type="text" name="englishInput" placeholder="english meaning" />
                </form>
                {this.renderEwok(this.props.numCorrect)}
            </div>
           </div>
  }
}

function mapStateToProps(state) {
  console.log('STATE::', state)
  return {
    questions: state.questions[0],
    numCorrect: state.numCorrect
  }
}

export default connect(mapStateToProps, actions)(Quiz)