import axios from 'axios'
import config from '../config'

export default {
	createUser: data => {
		return axios({
			url: `${config.apiBase}/users`,
			method: 'POST',
			data,
		})
	},
	me: () => {
	return axios({
		url: `${config.apiBase}/users/me`,
		method: 'GET',
	})
},
	getUserMeta: userId => {
		return axios({
			url: `${config.apiBase}/users/${userId}/meta`,
			method: 'GET',
		})
	},
	updateUser: (id, data) => {
		return axios({
			url: `${config.apiBase}/users/${id}`,
			method: 'PUT',
			data,
		})
	},
	updateUserPassword: (id, data) => {
		return axios({
			url: `${config.apiBase}/users/${id}/password`,
			method: 'PUT',
			data,
		})
	},
	resendEmailConfirmation: () => {
		return axios({
			url: `${config.apiBase}/users/email_confirmation`,
			method: 'GET',
		})
	},
	getNotificationPreferences: id => {
		return axios({
			url: `${config.apiBase}/users/${id}/notification_preferences`,
			method: 'GET',
		})
	},
	updateNotificationPreferences: (id, data) => {
		return axios({
			url: `${config.apiBase}/users/${id}/notification_preferences`,
			method: 'PUT',
			data,
		})
	},
	updatePicture: (id, data) => {
		return axios({
			url: `${config.apiBase}/users/${id}/picture`,
			method: 'POST',
			data,
		})
	},
	confirmEmail: token => {
		return axios({
			url: `${config.apiBase}/users/email_confirmation/${token}`,
			method: 'PUT',
		})
	},
}
