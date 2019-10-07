import axios from 'axios'
import config from '../config'

export const accountApi = {
	getAccounts,
	getDefaultAccount,
	setDefaultAccount,
	getUsers,
	create,
	show,
	deleteAccountMember,
	updateAccountMember,
	update,
	updatePicture,
	getInvoices,
}

function getAccounts() {
	return axios({
		url: `${config.apiBase}/accounts`,
		method: 'GET',
	})
}

function create(account) {
	return axios({
		url: `${config.apiBase}/accounts`,
		method: 'POST',
		data: account,
	})
}

function getDefaultAccount() {
	return axios({
		url: `${config.apiBase}/accounts/default`,
		method: 'GET',
	})
}

function setDefaultAccount(id) {
	return axios({
		url: `${config.apiBase}/accounts/${id}/default`,
		method: 'PUT',
	})
}

function getUsers(id) {
	return axios({
		url: `${config.apiBase}/accounts/${id}/users`,
		method: 'GET',
	})
}

function show(id) {
	return axios({
		url: `${config.apiBase}/accounts/${id}`,
		method: 'GET',
	})
}

function update(id, data) {
	return axios({
		url: `${config.apiBase}/accounts/${id}`,
		method: 'PUT',
		data: data,
	})
}

function updatePicture(id, data) {
	return axios({
		url: `${config.apiBase}/accounts/${id}/picture`,
		method: 'POST',
		data: data,
	})
}

function deleteAccountMember(id, userId) {
	return axios({
		url: `${config.apiBase}/accounts/${id}/users/${userId}`,
		method: 'DELETE',
	})
}

function updateAccountMember(id, userId, data) {
	return axios({
		url: `${config.apiBase}/accounts/${id}/users/${userId}`,
		method: 'PUT',
		data: data,
	})
}

function getInvoices(id) {
	return axios({
		url: `${config.apiBase}/accounts/${id}/invoices`,
		method: 'GET',
	})
}
