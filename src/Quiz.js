import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';

class Quiz extends Component {
  
  handleFormSubmit(e) {
    e.preventDefault();
    let isCorrect = (e.target.englishInput.value === this.props.question.answer) ? true : false;
    console.log('IS CORRECT: ', isCorrect)
    this.props.checkResponse(isCorrect)
    this.props.sendUserInput(this.props.question._id, isCorrect)
  }

  renderEwok(numCorrect) {
    let temp = [];
    for (let i = 0; i < this.props.numCorrect; i++) {
        temp.push(<img className='thugLife' key={i} src="http://overmental.com/wp-content/uploads/2015/06/Wicket-thug-life.jpg" />)
    }
    return (
      <div>{temp}</div>
    )
  }

  handleClick() {
    this.props.logOut()
    this.props.router.replace('/')
  }

  componentWillMount() {
    this.props.fetchQuestion()
  }

  checkQuestion() {
    if (this.props.question === undefined) {
      return "loading..."
    } else  {
      return this.props.question.question
    }
  }

  render() {
    return <div>
            <button onClick={this.handleClick.bind(this)}>Log Out</button>
            <h1>Ewokese Quiz</h1>
            <div className="question-card"> 
                <h3>Ewok:</h3><p>{this.checkQuestion()}</p>
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
    question: state.questions[0],
    numCorrect: state.numCorrect
  }
}

export default connect(mapStateToProps, actions)(Quiz)