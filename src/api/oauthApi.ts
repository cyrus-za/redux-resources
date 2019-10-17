import axios from 'axios'
import config from '../config'

export const oauthApi = {
	createAccessToken,
	createSocialAccessToken,
	createClient,
	authorizeClient,
}

function createAccessToken(user) {
	return axios({
		url: `${config.apiBase}/oauth/token`,
		method: 'POST',
		data: {
			grant_type: 'password',
			username: user.email,
			password: user.password,
		},
	})
}

function createSocialAccessToken(provider, access_token, token_secret) {
	return axios({
		url: `${config.apiBase}/oauth/token`,
		method: 'POST',
		data: {
			grant_type: 'social',
			provider,
			access_token,
			token_secret,
		},
	})
}

function createClient(data) {
	return axios({
		url: `${config.apiBase}/oauth/clients`,
		method: 'POST',
		data,
	})
}

function authorizeClient(params) {
	return axios({
		url: `${config.apiBase}/oauth/authorize`,
		method: 'GET',
		params,
	})
}
