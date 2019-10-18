import axios from 'axios'
import config from '../config'

export default {
	getAccountInvites: (params = {}) => {
		return axios({
			url: `${config.apiBase}/account_invites`,
			method: 'GET',
			params,
		})
	},
	deleteAccountInvite: id => {
		return axios({
			url: `${config.apiBase}/account_invites/${id}`,
			method: 'DELETE',
		})
	},
	create: data => {
		return axios({
			url: `${config.apiBase}/account_invites`,
			method: 'POST',
			data,
		})
	},
	accept: id => {
		return axios({
			url: `${config.apiBase}/account_invites/${id}/accept`,
			method: 'PUT',
		})
	},
}

