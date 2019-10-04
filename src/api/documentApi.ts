import axios from 'axios'
import config from '../config'

export const documentApi = {
	getDocuments,
	downloadDocument,
}

function getDocuments(query = {}) {
	return axios({
		url: `${config.apiBase}/documents`,
		method: 'GET',
		params: query,
	})
}

function downloadDocument(id, provider) {
	return axios({
		url: `${config.apiBase}/documents/${id}`,
		method: 'GET',
		headers: { Accept: 'application/pdf' },
		responseType: 'blob',
		params: { provider },
	})
}
