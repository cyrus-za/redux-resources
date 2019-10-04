import axios from 'axios'
import config from '../config'

export const fieldApi = {
	getFields,
	createField,
	updateField,
	deleteField,
}

function getFields(packageId, query = {}) {
	return axios({
		url: `${config.apiBase}/packages/${packageId}/fields`,
		method: 'GET',
		params: query,
	})
}

function createField(packageId, data) {
	return axios({
		url: `${config.apiBase}/packages/${packageId}/fields`,
		method: 'POST',
		data,
	})
}

function updateField(packageId, fieldId, data) {
	return axios({
		url: `${config.apiBase}/packages/${packageId}/fields/${fieldId}`,
		method: 'PUT',
		data,
	})
}

function deleteField(packageId, fieldId) {
	return axios({
		url: `${config.apiBase}/packages/${packageId}/fields/${fieldId}`,
		method: 'DELETE',
	})
}
