
export const CHECK_RESPONSE = 'CHECK_RESPONSE'
export const checkResponse = (questionNumber, isCorrect, numCorrect) => {
  if (isCorrect) {
  	numCorrect++;
  }
  console.log('NUM CORRECT: ', numCorrect)

  return {
    type: CHECK_RESPONSE,
    response: {
      question: questionNumber, 
      isCorrect: isCorrect,
    },
    numCorrect: numCorrect,
  }
}