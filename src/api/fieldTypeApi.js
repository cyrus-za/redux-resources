import axios from 'axios'
import config from '../config'

export default {
	getFieldTypes,
}

function getFieldTypes(query = {}) {
	return axios({
		url: `${config.apiBase}/field_types`,
		method: 'GET',
		params: query,
	})
}
