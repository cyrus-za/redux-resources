import axios from 'axios'
import config from '../config'

export default {
	getPages,
	getPageImage,
}

function getPages(packageId, documentId) {
	return axios({
		url: `${config.apiBase}/packages/${packageId}/documents/${documentId}/pages`,
		method: 'GET',
		params: {
			per_page: 1000,
		},
	})
}

function getPageImage(image_url) {
	return axios({
		url: image_url,
		method: 'GET',
		headers: { Accept: 'image/png' },
	})
}
