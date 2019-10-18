import axios from 'axios'
import config from '../config'

export default {
	createAccessToken: (user) => {
		return axios({
			url: `${config.apiBase}/oauth/token`,
			method: 'POST',
			data: {
				grant_type: 'password',
				username: user.email,
				password: user.password,
			},
		})
	},
	createSocialAccessToken: (provider, access_token, token_secret) => {
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
	},
	createClient: (data) => {
		return axios({
			url: `${config.apiBase}/oauth/clients`,
			method: 'POST',
			data,
		})
	},
	authorizeClient: (params) => {
		return axios({
			url: `${config.apiBase}/oauth/authorize`,
			method: 'GET',
			params,
		})
	},
}
