import axios from 'axios'
import config from '../config'

export default {
	getCards: (params = {}) => {
		return axios({
			url: `${config.apiBase}/cards`,
			method: 'GET',
			params,
		})
	},
	deleteCard: id => {
		return axios({
			url: `${config.apiBase}/cards/${id}`,
			method: 'DELETE',
		})
	},
	createCard: data => {
		return axios({
			url: `${config.apiBase}/cards`,
			method: 'POST',
			data,
		})
	},
	updateCard: (id, data) => {
		return axios({
			url: `${config.apiBase}/cards/${id}`,
			method: 'PUT',
			data,
		})
	},
	setDefaultCard: id => {
		return axios({
			url: `${config.apiBase}/cards/${id}/default`,
			method: 'PUT',
		})
	},
}

