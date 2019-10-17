import axios from 'axios'
import config from '../config'

export const pageApi = {
	getPages,
	getPageImage,
}

function getPages(packageId, documentId) {
	return axios({
		url: `${config.apiBase}/packages/${packageId}/documents/${documentId}/pages?per_page=1000`,
		method: 'GET',
	})
}

function getPageImage(image_url) {
	return axios({
		url: image_url,
		method: 'GET',
		headers: { Accept: 'image/png' },
	})
}
