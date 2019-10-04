import axios from 'axios'
import config from '../config'
import queryString from 'query-string'

export const packageTypeApi = {
	getPackageTypes,
}

function getPackageTypes(query) {
	return axios({
		url: `${config.apiBase}/package_types?${queryString.stringify(query)}`,
		method: 'GET',
	})
}
