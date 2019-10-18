import axios from 'axios'
import config from '../config'

export default {
	getSignatures: (params = {}) => {
		return axios({
			url: `${config.apiBase}/signatures`,
			method: 'GET',
			params
		})
	},
	createSignature: data => {
		return axios({
			url: `${config.apiBase}/signatures`,
			method: 'POST',
			data,
		})
	},
}
