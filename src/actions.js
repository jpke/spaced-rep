import fetch from 'isomorphic-fetch';

export const CHECK_RESPONSE = 'CHECK_RESPONSE'
export const checkResponse = (isCorrect) => {
  return {
    type: CHECK_RESPONSE,
    isCorrect
  }
}

export const LOGGED_IN = 'LOGGED_IN'
export const loggedIn = () => {
	return {
		type: LOGGED_IN
	}
}

export const SAVE_COOKIE = 'SAVE_COOKIE'
export const saveCookie = () => {
	return {
		type: SAVE_COOKIE
	}
}

export const LOG_OUT = 'LOG_OUT'
export const logOut = () => {
	return {
		type: LOG_OUT
	}
}