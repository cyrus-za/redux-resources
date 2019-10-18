import axios from 'axios'
import config from '../config'

export default {
	getPlans: (params = {}) => {
		return axios({
			url: `${config.apiBase}/plans`,
			method: 'GET',
			params,
		})
	},
}
