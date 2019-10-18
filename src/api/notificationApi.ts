import axios from 'axios'
import config from '../config'

export default {
	getNotifications: (params = {}) => {
		return axios({
			url: `${config.apiBase}/notifications`,
			method: 'GET',
			params,
		})
	},
	deleteNotification: (id, data) => {
		return axios({
			url: `${config.apiBase}/notifications/${id}`,
			method: 'PUT',
			data,
		})
	},
	update: (id, data) => {
		return axios({
			url: `${config.apiBase}/notifications/${id}`,
			method: 'PUT',
			data,
		})
	},
}
