import axios from 'axios'
import config from '../config'

export const userApi = {
	createUser,
	me,
	getUserMeta,
	updateUser,
	updateUserPassword,
	resendEmailConfirmation,
	getNotificationPreferences,
	updateNotificationPreferences,
	updatePicture,
	confirmEmail,
}

function updateUser(id, user) {
	return axios({
		url: `${config.apiBase}/users/${id}`,
		method: 'PUT',
		data: user,
	})
}

function updateUserPassword(id, payload) {
	return axios({
		url: `${config.apiBase}/users/${id}/password`,
		method: 'PUT',
		data: payload,
	})
}

function createUser(user) {
	return axios({
		url: `${config.apiBase}/users`,
		method: 'POST',
		data: user,
	})
}

function me() {
	return axios({
		url: `${config.apiBase}/users/me`,
		method: 'GET',
	})
}

function getUserMeta(userId) {
	return axios({
		url: `${config.apiBase}/users/${userId}/meta`,
		method: 'GET',
	})
}

function resendEmailConfirmation() {
	return axios({
		url: `${config.apiBase}/users/email_confirmation`,
		method: 'GET',
	})
}

function getNotificationPreferences(id) {
	return axios({
		url: `${config.apiBase}/users/${id}/notification_preferences`,
		method: 'GET',
	})
}

function updateNotificationPreferences(id, payload) {
	return axios({
		url: `${config.apiBase}/users/${id}/notification_preferences`,
		method: 'PUT',
		data: payload,
	})
}

function updatePicture(id, data) {
	return axios({
		url: `${config.apiBase}/users/${id}/picture`,
		method: 'POST',
		data: data,
	})
}

function confirmEmail(token) {
	return axios({
		url: `${config.apiBase}/users/email_confirmation/${token}`,
		method: 'PUT',
	})
}
