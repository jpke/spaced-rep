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
    case CHECK_RESPONSE 
    default:
      return state;
  }

  return state;
}

  
export default Reducer
