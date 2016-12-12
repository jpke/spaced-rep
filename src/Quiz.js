import React, { Component } from 'react';
import { connect } from 'react-redux'

class Quiz extends Component {
  handleFormSubmit(e) {
    e.preventDefault();
    console.log(e.target.englishInput.value);
    let isCorrect = (e.target.englishInput.value == this.props.questions[0].answer) ? true : false;
    dispatch(checkResponse, 0, isCorrect);
  }
  render() {
    console.log(this.props.questions);
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
  return {
    questions: state.questions
  }
}

export default connect(mapStateToProps)(Quiz)