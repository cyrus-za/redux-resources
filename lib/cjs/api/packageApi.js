"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var config_1 = require("../config");
var helpers_1 = require("../utilities/helpers");
exports.packageApi = {
    getPackages: getPackages,
    getPackageLexicon: getPackageLexicon,
    showPackage: showPackage,
    deletePackage: deletePackage,
    createPackage: createPackage,
    updatePackage: updatePackage,
    getRecipients: getRecipients,
    createRecipient: createRecipient,
    updateRecipient: updateRecipient,
    getDocuments: getDocuments,
    getPages: getPages,
    getFields: getFields,
    createDocuments: createDocuments,
    updateDocument: updateDocument,
    createDocumentFromSocialAccount: createDocumentFromSocialAccount,
    downloadDocument: downloadDocument,
    getDocumentPageImageUrl: getDocumentPageImageUrl,
    deleteDocument: deleteDocument,
    deleteRecipient: deleteRecipient,
    publish: publish,
};
function getPackages(query) {
    return axios_1.default({
        url: config_1.default.apiBase + "/packages",
        method: 'GET',
        params: query,
    });
}
function getPackageLexicon(query) {
    return axios_1.default({
        url: config_1.default.apiBase + "/packages/lexicon",
        method: 'GET',
        params: query,
    });
}
function showPackage(id) {
    return axios_1.default({
        url: config_1.default.apiBase + "/packages/" + id,
        method: 'GET',
    });
}
function deletePackage(id) {
    return axios_1.default({
        url: config_1.default.apiBase + "/packages/" + id,
        method: 'DELETE',
    });
}
function createPackage(data) {
    return axios_1.default({
        url: config_1.default.apiBase + "/packages",
        method: 'POST',
        data: data,
    });
}
function updatePackage(id, data) {
    return axios_1.default({
        url: config_1.default.apiBase + "/packages/" + id,
        method: 'PUT',
        data: data,
    });
}
function getRecipients(id, query) {
    if (query === void 0) { query = {}; }
    return axios_1.default({
        url: config_1.default.apiBase + "/packages/" + id + "/recipients",
        method: 'GET',
        params: query,
    });
}
function createRecipient(id, data) {
    return axios_1.default({
        url: config_1.default.apiBase + "/packages/" + id + "/recipients",
        method: 'POST',
        data: helpers_1.keysToSnakeCase(data),
    });
}
function updateRecipient(id, recipientId, data) {
    return axios_1.default({
        url: config_1.default.apiBase + "/packages/" + id + "/recipients/" + recipientId,
        method: 'PUT',
        data: helpers_1.keysToSnakeCase(data),
    });
}
function getDocuments(id, query) {
    if (query === void 0) { query = {}; }
    return axios_1.default({
        url: config_1.default.apiBase + "/packages/" + id + "/documents",
        method: 'GET',
        params: query,
    });
}
function getPages(packageId, query) {
    if (query === void 0) { query = {}; }
    return axios_1.default({
        url: config_1.default.apiBase + "/packages/" + packageId + "/pages",
        method: 'GET',
        params: query,
    });
}
function getFields(packageId, query) {
    if (query === void 0) { query = {}; }
    return axios_1.default({
        url: config_1.default.apiBase + "/packages/" + packageId + "/fields",
        method: 'GET',
        params: query,
    });
}
function createDocuments(id, data) {
    return axios_1.default({
        url: config_1.default.apiBase + "/packages/" + id + "/documents",
        method: 'POST',
        data: data,
    });
}
function updateDocument(packageId, documentId, data) {
    return axios_1.default({
        url: config_1.default.apiBase + "/packages/" + packageId + "/documents/" + documentId,
        method: 'PUT',
        data: data,
    });
}
function createDocumentFromSocialAccount(id, socialAccountId, externalFileId) {
    return axios_1.default({
        url: config_1.default.apiBase + "/packages/" + id + "/documents/connected_services/" + socialAccountId,
        method: 'POST',
        data: {
            external_file_id: externalFileId,
        },
    });
}
function downloadDocument(id, documentId) {
    return axios_1.default({
        url: config_1.default.apiBase + "/packages/" + id + "/documents/" + documentId,
        method: 'GET',
        headers: { Accept: 'application/pdf' },
        responseType: 'blob',
    });
}
function getDocumentPageImageUrl(image) {
    return axios_1.default({
        url: image,
        method: 'GET',
        headers: { Accept: 'image/png' },
    });
}
function deleteDocument(id, documentId) {
    return axios_1.default({
        url: config_1.default.apiBase + "/packages/" + id + "/documents/" + documentId,
        method: 'DELETE',
    });
}
function deleteRecipient(id, recipientId) {
    return axios_1.default({
        url: config_1.default.apiBase + "/packages/" + id + "/recipients/" + recipientId,
        method: 'DELETE',
    });
}
function publish(id) {
    return axios_1.default({
        url: config_1.default.apiBase + "/packages/" + id + "/publish",
        method: 'PUT',
    });
}
