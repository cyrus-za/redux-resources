import axios from 'axios'
import config from '../config'

export default {
	getPages: (packageId, documentId) => {
		return axios({
			url: `${config.apiBase}/packages/${packageId}/documents/${documentId}/pages?per_page=1000`,
			method: 'GET',
		})
	},
	getPageImage: url => {
		return axios({
			url,
			method: 'GET',
			headers: { Accept: 'image/png' },
		})
	},
}
