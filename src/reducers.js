import {
  CHECK_RESPONSE
} from './actions';

const initialState = {
  questions: [
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
    }
  ],
  responses: [
    // {1, TRUE}
  ],
  numCorrect: 0
}

const Reducer = function(state=initialState, action={}) {

  switch(action.type) {
    case CHECK_RESPONSE:
      let questions;
      let nextQuestion = state.questions[1];
      let numCorrect = state.numCorrect;
      let multiplier = 1;
      let oldQuestion = {...state.questions[0]};
      if (action.isCorrect) {
        multiplier = 2;
        numCorrect++;
      }
      oldQuestion.mValue = oldQuestion.mValue * multiplier;
        questions = state.questions.slice(1, oldQuestion.mValue +  1);
        questions = questions.concat(oldQuestion, state.questions
          .slice(oldQuestion.mValue + 1, state.questions.length));
        
      return { ...state, questions: questions, 
              numCorrect: numCorrect }
    default:
      return state;
  }
}

  
export default Reducer
