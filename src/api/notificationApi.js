import axios from 'axios'
import config from '../config'

export default {
	getNotifications,
	deleteNotification,
	update,
}

function getNotifications(query = {}) {
	return axios({
		url: `${config.apiBase}/notifications`,
		method: 'GET',
		params: query,
	})
}

function update(id, notification) {
	return axios({
		url: `${config.apiBase}/notifications/${id}`,
		method: 'PUT',
		data: notification,
	})
}

function deleteNotification(id) {
	return axios({
		url: `${config.apiBase}/notifications/${id}`,
		method: 'DELETE',
	})
}
