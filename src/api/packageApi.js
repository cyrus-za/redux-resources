import axios from 'axios'
import config from '../config'
import { keysToSnakeCase } from '../utilities/helpers'

export const packageApi = {
	getPackages,
	getPackageLexicon,
	showPackage,
	deletePackage,
	createPackage,
	updatePackage,
	getRecipients,
	createRecipient,
	updateRecipient,
	getDocuments,
	getPages,
	getFields,
	createDocuments,
	updateDocument,
	createDocumentFromSocialAccount,
	downloadDocument,
	getDocumentPageImageUrl,
	deleteDocument,
	deleteRecipient,
	publish,
}

function getPackages(query) {
	return axios({
		url: `${config.apiBase}/packages`,
		method: 'GET',
		params: query,
	})
}

function getPackageLexicon(query) {
	return axios({
		url: `${config.apiBase}/packages/lexicon`,
		method: 'GET',
		params: query,
	})
}

function showPackage(id) {
	return axios({
		url: `${config.apiBase}/packages/${id}`,
		method: 'GET',
	})
}

function deletePackage(id) {
	return axios({
		url: `${config.apiBase}/packages/${id}`,
		method: 'DELETE',
	})
}

function createPackage(data) {
	return axios({
		url: `${config.apiBase}/packages`,
		method: 'POST',
		data: data,
	})
}

function updatePackage(id, data) {
	return axios({
		url: `${config.apiBase}/packages/${id}`,
		method: 'PUT',
		data: data,
	})
}

function getRecipients(id, query = {}) {
	return axios({
		url: `${config.apiBase}/packages/${id}/recipients`,
		method: 'GET',
		params: query,
	})
}

function createRecipient(id, data) {
	return axios({
		url: `${config.apiBase}/packages/${id}/recipients`,
		method: 'POST',
		data: keysToSnakeCase(data),
	})
}

function updateRecipient(id, recipientId, data) {
	return axios({
		url: `${config.apiBase}/packages/${id}/recipients/${recipientId}`,
		method: 'PUT',
		data: keysToSnakeCase(data),
	})
}

function getDocuments(id, query = {}) {
	return axios({
		url: `${config.apiBase}/packages/${id}/documents`,
		method: 'GET',
		params: query,
	})
}

function getPages(packageId, query = {}) {
	return axios({
		url: `${config.apiBase}/packages/${packageId}/pages`,
		method: 'GET',
		params: query,
	})
}

function getFields(packageId, query = {}) {
	return axios({
		url: `${config.apiBase}/packages/${packageId}/fields`,
		method: 'GET',
		params: query,
	})
}

function createDocuments(id, data) {
	return axios({
		url: `${config.apiBase}/packages/${id}/documents`,
		method: 'POST',
		data: data,
	})
}

function updateDocument(packageId, documentId, data) {
	return axios({
		url: `${config.apiBase}/packages/${packageId}/documents/${documentId}`,
		method: 'PUT',
		data: data,
	})
}

function createDocumentFromSocialAccount(id, socialAccountId, externalFileId) {
	return axios({
		url: `${config.apiBase}/packages/${id}/documents/connected_services/${socialAccountId}`,
		method: 'POST',
		data: {
			external_file_id: externalFileId,
		},
	})
}

function downloadDocument(id, documentId) {
	return axios({
		url: `${config.apiBase}/packages/${id}/documents/${documentId}`,
		method: 'GET',
		headers: { Accept: 'application/pdf' },
		responseType: 'blob',
	})
}

function getDocumentPageImageUrl(image) {
	return axios({
		url: image,
		method: 'GET',
		headers: { Accept: 'image/png' },
	})
}

function deleteDocument(id, documentId) {
	return axios({
		url: `${config.apiBase}/packages/${id}/documents/${documentId}`,
		method: 'DELETE',
	})
}

function deleteRecipient(id, recipientId) {
	return axios({
		url: `${config.apiBase}/packages/${id}/recipients/${recipientId}`,
		method: 'DELETE',
	})
}

function publish(id) {
	return axios({
		url: `${config.apiBase}/packages/${id}/publish`,
		method: 'PUT',
	})
}
