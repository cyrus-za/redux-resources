"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var config_1 = require("../config");
exports.connectedServiceApi = {
    getConnectedServices: getConnectedServices,
    createConnectedService: createConnectedService,
    updateConnectedService: updateConnectedService,
    getConnectedAccount: getConnectedAccount,
    deleteConnectedService: deleteConnectedService,
};
function getConnectedServices(query) {
    if (query === void 0) { query = {}; }
    return axios_1.default({
        url: config_1.default.apiBase + "/connected_services",
        method: 'GET',
        params: query,
    });
}
function createConnectedService(data) {
    return axios_1.default({
        url: config_1.default.apiBase + "/connected_services",
        method: 'POST',
        data: data,
    });
}
function updateConnectedService(id, data) {
    return axios_1.default({
        url: config_1.default.apiBase + "/connected_services/" + id,
        method: 'PUT',
        data: data,
    });
}
function getConnectedAccount(provider, data) {
    return axios_1.default({
        url: config_1.default.apiBase + "/connected_services/" + provider + "/social_user",
        method: 'GET',
        params: data,
    });
}
function deleteConnectedService(id, scopes) {
    if (scopes === void 0) { scopes = undefined; }
    return axios_1.default({
        url: scopes === undefined
            ? config_1.default.apiBase + "/connected_services/" + id
            : config_1.default.apiBase + "/connected_services/" + id + "/" + scopes,
        method: 'DELETE',
    });
}
