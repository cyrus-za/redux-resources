"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var config_1 = require("../config");
exports.folderApi = {
    getFolders: getFolders,
    showFolder: showFolder,
    createFolder: createFolder,
    updateFolder: updateFolder,
};
function getFolders(query) {
    if (query === void 0) { query = {}; }
    return axios_1.default({
        url: config_1.default.apiBase + "/folders",
        method: 'GET',
        params: query,
    });
}
function showFolder(id) {
    return axios_1.default({
        url: config_1.default.apiBase + "/folders/" + id,
        method: 'GET',
    });
}
function createFolder(data) {
    return axios_1.default({
        url: config_1.default.apiBase + "/folders",
        method: 'POST',
        data: data,
    });
}
function updateFolder(id) {
    return axios_1.default({
        url: config_1.default.apiBase + "/folders/" + id,
        method: 'PUT',
    });
}
