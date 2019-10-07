import axios from 'axios'
import config from '../config'

export default {
	getPackageTypes,
}

function getPackageTypes(query) {
	return axios({
		url: `${config.apiBase}/package_types`,
		method: 'GET',
		params: query,
	})
}
