"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var config_1 = require("../config");
exports.fieldApi = {
    getFields: getFields,
    createField: createField,
    updateField: updateField,
    deleteField: deleteField,
};
function getFields(packageId, query) {
    if (query === void 0) { query = {}; }
    return axios_1.default({
        url: config_1.default.apiBase + "/packages/" + packageId + "/fields",
        method: 'GET',
        params: query,
    });
}
function createField(packageId, data) {
    return axios_1.default({
        url: config_1.default.apiBase + "/packages/" + packageId + "/fields",
        method: 'POST',
        data: data,
    });
}
function updateField(packageId, fieldId, data) {
    return axios_1.default({
        url: config_1.default.apiBase + "/packages/" + packageId + "/fields/" + fieldId,
        method: 'PUT',
        data: data,
    });
}
function deleteField(packageId, fieldId) {
    return axios_1.default({
        url: config_1.default.apiBase + "/packages/" + packageId + "/fields/" + fieldId,
        method: 'DELETE',
    });
}
