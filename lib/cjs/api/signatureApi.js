"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var config_1 = require("../config");
exports.signatureApi = {
    getSignatures: getSignatures,
    createSignature: createSignature,
};
function getSignatures() {
    return axios_1.default({
        url: config_1.default.apiBase + "/signatures",
        method: 'GET',
    });
}
function createSignature(data) {
    return axios_1.default({
        url: config_1.default.apiBase + "/signatures",
        method: 'POST',
        data: data,
    });
}
