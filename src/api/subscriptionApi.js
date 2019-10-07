import axios from 'axios'
import config from '../config'

export const subscriptionApi = {
	getSubscriptions,
	createSubscription,
	updateSubscription,
	deleteSubscription,
	getUpcomingInvoices,
}

function getSubscriptions(query = {}) {
	return axios({
		url: `${config.apiBase}/subscriptions`,
		method: 'GET',
		params: query,
	})
}

function createSubscription(data) {
	return axios({
		url: `${config.apiBase}/subscriptions`,
		method: 'POST',
		data: data,
	})
}

function updateSubscription(id, data) {
	return axios({
		url: `${config.apiBase}/subscriptions/${id}`,
		method: 'PUT',
		data: data,
	})
}

function deleteSubscription(id) {
	return axios({
		url: `${config.apiBase}/subscriptions/${id}`,
		method: 'DELETE',
	})
}

function getUpcomingInvoices(id, query = {}) {
	return axios({
		url: `${config.apiBase}/subscriptions/${id}/upcoming_invoices`,
		method: 'GET',
		params: query,
	})
}
