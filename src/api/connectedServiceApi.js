import axios from 'axios'
import config from '../config'

export default {
	getConnectedServices,
	createConnectedService,
	updateConnectedService,
	getConnectedAccount,
	deleteConnectedService,
}

function getConnectedServices(query = {}) {
	return axios({
		url: `${config.apiBase}/connected_services`,
		method: 'GET',
		params: query,
	})
}

function createConnectedService(data) {
	return axios({
		url: `${config.apiBase}/connected_services`,
		method: 'POST',
		data: data,
	})
}

function updateConnectedService(id, data) {
	return axios({
		url: `${config.apiBase}/connected_services/${id}`,
		method: 'PUT',
		data: data,
	})
}

function getConnectedAccount(provider, data) {
	return axios({
		url: `${config.apiBase}/connected_services/${provider}/social_user`,
		method: 'GET',
		params: data,
	})
}

function deleteConnectedService(id, scopes = undefined) {
	return axios({
		url:
			scopes === undefined
				? `${config.apiBase}/connected_services/${id}`
				: `${config.apiBase}/connected_services/${id}/${scopes}`,
		method: 'DELETE',
	})
}
