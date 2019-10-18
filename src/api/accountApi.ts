import axios from 'axios'
import config from '../config'

export default {
	getAccounts: (params = {}) => {
		return axios({
			url: `${config.apiBase}/accounts`,
			method: 'GET',
			params,
		})
	},
	getDefaultAccount: () => {
		return axios({
			url: `${config.apiBase}/accounts/default`,
			method: 'GET',
		})
	},
	setDefaultAccount: (id) => {
		return axios({
			url: `${config.apiBase}/accounts/${id}/default`,
			method: 'PUT',
		})
	},
	getUsers: (id) => {
		return axios({
			url: `${config.apiBase}/accounts/${id}/users`,
			method: 'GET',
		})
	},
	create: (data) => {
		return axios({
			url: `${config.apiBase}/accounts`,
			method: 'POST',
			data,
		})
	},
	show: (id) => {
		return axios({
			url: `${config.apiBase}/accounts/${id}`,
			method: 'GET',
		})
	},
	deleteAccountMember: (id, userId) => {
		return axios({
			url: `${config.apiBase}/accounts/${id}/users/${userId}`,
			method: 'DELETE',
		})
	},
	updateAccountMember: (id, userId, data) => {
		return axios({
			url: `${config.apiBase}/accounts/${id}/users/${userId}`,
			method: 'PUT',
			data,
		})
	},
	update: (id, data) => {
		return axios({
			url: `${config.apiBase}/accounts/${id}`,
			method: 'PUT',
			data,
		})
	},
	updatePicture: (id, data) => {
		return axios({
			url: `${config.apiBase}/accounts/${id}/picture`,
			method: 'POST',
			data,
		})
	},
	getInvoices: (id) => {
		return axios({
			url: `${config.apiBase}/accounts/${id}/invoices`,
			method: 'GET',
		})
	},
}
