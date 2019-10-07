"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var config_1 = require("../config");
exports.documentApi = {
    getDocuments: getDocuments,
    downloadDocument: downloadDocument,
};
function getDocuments(query) {
    if (query === void 0) { query = {}; }
    return axios_1.default({
        url: config_1.default.apiBase + "/documents",
        method: 'GET',
        params: query,
    });
}
function downloadDocument(id, provider) {
    return axios_1.default({
        url: config_1.default.apiBase + "/documents/" + id,
        method: 'GET',
        headers: { Accept: 'application/pdf' },
        responseType: 'blob',
        params: { provider: provider },
    });
}
