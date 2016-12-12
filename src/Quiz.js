import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';

class Quiz extends Component {
  handleFormSubmit(e) {
    e.preventDefault();
    console.log(e.target.englishInput.value);
    let isCorrect = (e.target.englishInput.value == this.props.questions[0].answer) ? true : false;
    console.log('IS CORRECT: ', isCorrect)
    this.props.checkResponse(0, isCorrect, this.props.numCorrect)
  }
  render() {
    console.log('THIS PROPS::', this.props);
    return <div>
            <h1>Ewokese Quiz</h1>
            <div className="question-card">
              {this.props.questions.map((item, index) => 
                <div key={index}>
                  <h3>Ewok:</h3>{item.question}
                  <h3>English:</h3>
                  <form onSubmit={this.handleFormSubmit.bind(this)}>
                  <input type="text" name="englishInput" placeholder="english meaning" />
                  </form>
                  </div>)}
            </div>
           </div>
  }
}

function mapStateToProps(state) {
  console.log('STATE::', state)
  return {
    questions: state.questions,
    numCorrect: state.numCorrect
  }
}

export default connect(mapStateToProps, actions)(Quiz)