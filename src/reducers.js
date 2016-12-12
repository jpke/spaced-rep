import {
  CHECK_RESPONSE
} from './actions';

const initialState = {
  questions: [
    {
      question: "Wermo",
      answer: "A stupid person",
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
      console.log('ACTION NUM CORRECT: ', action.numCorrect)
      return { ...state, responses: [...state.responses, action.response], numCorrect: action.numCorrect }
    default:
      return state;
  }
}

  
export default Reducer
