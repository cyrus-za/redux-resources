import axios from 'axios'
import config from '../config'

export default {
	getDocuments: (params = {}) => {
		return axios({
			url: `${config.apiBase}/documents`,
			method: 'GET',
			params,
		})
	},
	downloadDocument: (id, provider) => {
		return axios({
			url: `${config.apiBase}/documents/${id}`,
			method: 'GET',
			headers: { Accept: 'application/pdf' },
			responseType: 'blob',
			params: { provider },
		})
	},
}
