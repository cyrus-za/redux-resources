import axios from 'axios'
import config from '../config'

export default {
	getPlans,
}

function getPlans(query = {}) {
	return axios({
		url: `${config.apiBase}/plans`,
		method: 'GET',
		params: query,
	})
}
