import axios from 'axios'
import config from '../config'

export default {
	getFields: (packageId, params = {}) => {
		return axios({
			url: `${config.apiBase}/packages/${packageId}/fields`,
			method: 'GET',
			params,
		})
	},
	createField: (packageId, data) => {
		return axios({
			url: `${config.apiBase}/packages/${packageId}/fields`,
			method: 'POST',
			data,
		})
	},
	updateField: (packageId, fieldId, data) => {
		return axios({
			url: `${config.apiBase}/packages/${packageId}/fields/${fieldId}`,
			method: 'PUT',
			data,
		})
	},
	deleteField: (packageId, fieldId) => {
		return axios({
			url: `${config.apiBase}/packages/${packageId}/fields/${fieldId}`,
			method: 'DELETE',
		})
	},
}
