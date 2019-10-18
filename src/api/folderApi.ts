import axios from 'axios'
import config from '../config'

export default {
	getFolders: (params = {}) => {
		return axios({
			url: `${config.apiBase}/folders`,
			method: 'GET',
			params,
		})
	},
	showFolder: id => {
		return axios({
			url: `${config.apiBase}/folders/${id}`,
			method: 'GET',
		})
	},
	createFolder: data => {
		return axios({
			url: `${config.apiBase}/folders`,
			method: 'POST',
			data,
		})
	},
	updateFolder: (id, data) => {
		return axios({
			url: `${config.apiBase}/folders/${id}`,
			method: 'PUT',
			data,
		})
	},
}
