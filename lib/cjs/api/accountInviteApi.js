"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var config_1 = require("../config");
exports.accountInviteApi = {
    getAccountInvites: getAccountInvites,
    deleteAccountInvite: deleteAccountInvite,
    create: create,
    accept: accept,
};
function getAccountInvites(query) {
    if (query === void 0) { query = {}; }
    return axios_1.default({
        url: config_1.default.apiBase + "/account_invites",
        method: 'GET',
        params: query,
    });
}
function deleteAccountInvite(id) {
    return axios_1.default({
        url: config_1.default.apiBase + "/account_invites/" + id,
        method: 'DELETE',
    });
}
function create(data) {
    return axios_1.default({
        url: config_1.default.apiBase + "/account_invites",
        method: 'POST',
        data: data,
    });
}
function accept(id) {
    return axios_1.default({
        url: config_1.default.apiBase + "/account_invites/" + id + "/accept",
        method: 'PUT',
    });
}
