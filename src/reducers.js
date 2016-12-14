import {
  CHECK_RESPONSE,
  LOGGED_IN,
  SAVE_COOKIE,
  LOG_OUT,
  POPULATE_QUESTIONS
} from './actions';

import cookie from 'react-cookie'

export const initialState = {
  questions: [],
  numCorrect: 0,
  isLoggedIn: (cookie.load('accessToken') != null)
}

export const Reducer = function(state=initialState, action={}) {
console.log('cookie::::', cookie.load('accessToken'))
  switch(action.type) {

    case CHECK_RESPONSE:
      let questions;
      let numCorrect = state.numCorrect;
      let multiplier = 2;
      let oldQuestion = {...state.questions[0]};
      if (action.isCorrect) {
        multiplier = 3;
        numCorrect++;
      }
      oldQuestion.mValue = oldQuestion.mValue * multiplier;
      questions = state.questions.slice(1, oldQuestion.mValue +  1);
      questions = questions.concat(oldQuestion, state.questions
        .slice(oldQuestion.mValue + 1, state.questions.length));

      return { ...state, questions: questions, 
              numCorrect: numCorrect }

    case LOGGED_IN:
      return {...state, isLoggedIn: true}
    
    case SAVE_COOKIE:
      return {...state, isLoggedIn: cookie.load('accessToken') != null}

    case LOG_OUT:
      cookie.remove('accessToken')
      return {...state, isLoggedIn: false}

    case POPULATE_QUESTIONS:
      return {...state, questions: action.data}
    
    default:
      return state;
  }

}
