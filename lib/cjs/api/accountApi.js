"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var config_1 = require("../config");
exports.accountApi = {
    getAccounts: getAccounts,
    getDefaultAccount: getDefaultAccount,
    setDefaultAccount: setDefaultAccount,
    getUsers: getUsers,
    create: create,
    show: show,
    deleteAccountMember: deleteAccountMember,
    updateAccountMember: updateAccountMember,
    update: update,
    updatePicture: updatePicture,
    getInvoices: getInvoices,
};
function getAccounts() {
    return axios_1.default({
        url: config_1.default.apiBase + "/accounts",
        method: 'GET',
    });
}
function create(account) {
    return axios_1.default({
        url: config_1.default.apiBase + "/accounts",
        method: 'POST',
        data: account,
    });
}
function getDefaultAccount() {
    return axios_1.default({
        url: config_1.default.apiBase + "/accounts/default",
        method: 'GET',
    });
}
function setDefaultAccount(id) {
    return axios_1.default({
        url: config_1.default.apiBase + "/accounts/" + id + "/default",
        method: 'PUT',
    });
}
function getUsers(id) {
    return axios_1.default({
        url: config_1.default.apiBase + "/accounts/" + id + "/users",
        method: 'GET',
    });
}
function show(id) {
    return axios_1.default({
        url: config_1.default.apiBase + "/accounts/" + id,
        method: 'GET',
    });
}
function update(id, data) {
    return axios_1.default({
        url: config_1.default.apiBase + "/accounts/" + id,
        method: 'PUT',
        data: data,
    });
}
function updatePicture(id, data) {
    return axios_1.default({
        url: config_1.default.apiBase + "/accounts/" + id + "/picture",
        method: 'POST',
        data: data,
    });
}
function deleteAccountMember(id, userId) {
    return axios_1.default({
        url: config_1.default.apiBase + "/accounts/" + id + "/users/" + userId,
        method: 'DELETE',
    });
}
function updateAccountMember(id, userId, data) {
    return axios_1.default({
        url: config_1.default.apiBase + "/accounts/" + id + "/users/" + userId,
        method: 'PUT',
        data: data,
    });
}
function getInvoices(id) {
    return axios_1.default({
        url: config_1.default.apiBase + "/accounts/" + id + "/invoices",
        method: 'GET',
    });
}
