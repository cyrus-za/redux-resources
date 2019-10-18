import axios from 'axios'
import config from '../config'
import { keysToSnakeCase } from '../utilities/helpers'

export default {
	getPackages: params => {
		return axios({
			url: `${config.apiBase}/packages`,
			method: 'GET',
			params,
		})
	},
	getPackageLexicon: params => {
		return axios({
			url: `${config.apiBase}/packages/lexicon`,
			method: 'GET',
			params,
		})
	},
	showPackage: id => {
		return axios({
			url: `${config.apiBase}/packages/${id}`,
			method: 'GET',
		})
	},
	deletePackage: id => {
		return axios({
			url: `${config.apiBase}/packages/${id}`,
			method: 'DELETE',
		})
	},
	createPackage: data => {
		return axios({
			url: `${config.apiBase}/packages`,
			method: 'POST',
			data,
		})
	},
	updatePackage: (id, data) => {
		return axios({
			url: `${config.apiBase}/packages/${id}`,
			method: 'PUT',
			data,
		})
	},
	getRecipients: (id, params = {}) => {
		return axios({
			url: `${config.apiBase}/packages/${id}/recipients`,
			method: 'GET',
			params,
		})
	},
	createRecipient: (id, data) => {
		return axios({
			url: `${config.apiBase}/packages/${id}/recipients`,
			method: 'POST',
			data: keysToSnakeCase(data),
		})
	},
	updateRecipient: (id, recipientId, data) => {
		return axios({
			url: `${config.apiBase}/packages/${id}/recipients/${recipientId}`,
			method: 'PUT',
			data: keysToSnakeCase(data),
		})
	},
	getDocuments: (id, params = {}) => {
		return axios({
			url: `${config.apiBase}/packages/${id}/documents`,
			method: 'GET',
			params,
		})
	},
	getPages: (packageId, params = {}) => {
		return axios({
			url: `${config.apiBase}/packages/${packageId}/pages`,
			method: 'GET',
			params,
		})
	},
	getFields: (packageId, params = {}) => {
		return axios({
			url: `${config.apiBase}/packages/${packageId}/fields`,
			method: 'GET',
			params,
		})
	},
	createDocuments: (id, data) => {
		return axios({
			url: `${config.apiBase}/packages/${id}/documents`,
			method: 'POST',
			data,
		})
	},
	updateDocument: (packageId, documentId, data) => {
		return axios({
			url: `${config.apiBase}/packages/${packageId}/documents/${documentId}`,
			method: 'PUT',
			data,
		})
	},
	createDocumentFromSocialAccount: (id, socialAccountId, externalFileId) => {
		return axios({
			url: `${config.apiBase}/packages/${id}/documents/connected_services/${socialAccountId}`,
			method: 'POST',
			data: {
				external_file_id: externalFileId,
			},
		})
	},
	downloadDocument: (id, documentId) => {
		return axios({
			url: `${config.apiBase}/packages/${id}/documents/${documentId}`,
			method: 'GET',
			headers: { Accept: 'application/pdf' },
			responseType: 'blob',
		})
	},
	getDocumentPageImageUrl: url => {
		return axios({
			url,
			method: 'GET',
			headers: { Accept: 'image/png' },
		})
	},
	deleteDocument: (id, documentId) => {
		return axios({
			url: `${config.apiBase}/packages/${id}/documents/${documentId}`,
			method: 'DELETE',
		})
	},
	deleteRecipient: (id, recipientId) => {
		return axios({
			url: `${config.apiBase}/packages/${id}/recipients/${recipientId}`,
			method: 'DELETE',
		})
	},
	publish: id => {
		return axios({
			url: `${config.apiBase}/packages/${id}/publish`,
			method: 'PUT',
		})
	},
}
