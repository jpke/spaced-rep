
export const CHECK_RESPONSE = 'CHECK_RESPONSE'
export const checkResponse = (questionNumber, isCorrect) => {
  return {
    type: CHECK_RESPONSE,
    response: {
      question: questionNumber, 
      isCorrect: isCorrect
    }
  }
}