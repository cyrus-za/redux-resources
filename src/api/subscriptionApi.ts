import axios from 'axios'
import config from '../config'

export default {
	getSubscriptions: (params = {}) => {
		return axios({
			url: `${config.apiBase}/subscriptions`,
			method: 'GET',
			params,
		})
	},
	createSubscription: data => {
		return axios({
			url: `${config.apiBase}/subscriptions`,
			method: 'POST',
			data,
		})
	},
	updateSubscription: (id, data) => {
		return axios({
			url: `${config.apiBase}/subscriptions/${id}`,
			method: 'PUT',
			data,
		})
	},
	deleteSubscription: id => {
		return axios({
			url: `${config.apiBase}/subscriptions/${id}`,
			method: 'DELETE',
		})
	},
	getUpcomingInvoices: (id, params = {}) => {
		return axios({
			url: `${config.apiBase}/subscriptions/${id}/upcoming_invoices`,
			method: 'GET',
			params,
		})
	},
}
