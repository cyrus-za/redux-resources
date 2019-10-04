import axios from 'axios'
import config from '../config'

export const cardApi = {
	getCards,
	deleteCard,
	createCard,
	updateCard,
	setDefaultCard,
}

function getCards(query = {}) {
	return axios({
		url: `${config.apiBase}/cards`,
		method: 'GET',
		params: query,
	})
}

function deleteCard(id) {
	return axios({
		url: `${config.apiBase}/cards/${id}`,
		method: 'DELETE',
	})
}

function setDefaultCard(id) {
	return axios({
		url: `${config.apiBase}/cards/${id}/default`,
		method: 'PUT',
	})
}

function createCard(data) {
	return axios({
		url: `${config.apiBase}/cards`,
		method: 'POST',
		data: data,
	})
}

function updateCard(id, data) {
	return axios({
		url: `${config.apiBase}/cards/${id}`,
		method: 'PUT',
		data: data,
	})
}
