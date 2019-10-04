import axios from 'axios'
import config from '../config'

export const folderApi = {
	getFolders,
	showFolder,
	createFolder,
	updateFolder,
}

function getFolders(query = {}) {
	return axios({
		url: `${config.apiBase}/folders`,
		method: 'GET',
		params: query,
	})
}

function showFolder(id) {
	return axios({
		url: `${config.apiBase}/folders/${id}`,
		method: 'GET',
	})
}

function createFolder(data) {
	return axios({
		url: `${config.apiBase}/folders`,
		method: 'POST',
		data: data,
	})
}

function updateFolder(id) {
	return axios({
		url: `${config.apiBase}/folders/${id}`,
		method: 'PUT',
	})
}
