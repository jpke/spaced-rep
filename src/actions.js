import fetch from 'isomorphic-fetch';

export const CHECK_RESPONSE = 'CHECK_RESPONSE'
export const checkResponse = (isCorrect) => {
  return {
    type: CHECK_RESPONSE,
    isCorrect
  }
}

export function authenticateUser() {
	return fetch('https://accounts.google.com/o/oauth2/v2/auth?', {
		scope : 'profile',
		state : 'profile',
		redirect_uri : 'httplocalhost:3090/auth/google/callback/',
		response_type : 'token',
		client_id : '301040689613-vv64oc1qcthjf2ibsgpu2pn83dl8cp45.apps.googleusercontent.com'
	}).then(function(res) {
		console.log('response:', res);
	})
}
