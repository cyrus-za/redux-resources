import axios from 'axios'
import config from '../config'

export default {
	getFieldTypes: (params = {}) => {
		return axios({
			url: `${config.apiBase}/field_types`,
			method: 'GET',
			params,
		})
	},
}
