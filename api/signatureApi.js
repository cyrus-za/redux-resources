import axios from 'axios'
import config from '../config'

export default {
	getSignatures,
	createSignature,
}

function getSignatures() {
	return axios({
		url: `${config.apiBase}/signatures`,
		method: 'GET',
	})
}

function createSignature(data) {
	return axios({
		url: `${config.apiBase}/signatures`,
		method: 'POST',
		data: data,
	})
}
