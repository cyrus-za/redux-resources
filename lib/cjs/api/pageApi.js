"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var config_1 = require("../config");
exports.pageApi = {
    getPages: getPages,
    getPageImage: getPageImage,
};
function getPages(packageId, documentId) {
    return axios_1.default({
        url: config_1.default.apiBase + "/packages/" + packageId + "/documents/" + documentId + "/pages",
        method: 'GET',
        params: {
            per_page: 1000,
        },
    });
}
function getPageImage(image_url) {
    return axios_1.default({
        url: image_url,
        method: 'GET',
        headers: { Accept: 'image/png' },
    });
}
