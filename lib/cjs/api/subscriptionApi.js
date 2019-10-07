"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var config_1 = require("../config");
exports.subscriptionApi = {
    getSubscriptions: getSubscriptions,
    createSubscription: createSubscription,
    updateSubscription: updateSubscription,
    deleteSubscription: deleteSubscription,
    getUpcomingInvoices: getUpcomingInvoices,
};
function getSubscriptions(query) {
    if (query === void 0) { query = {}; }
    return axios_1.default({
        url: config_1.default.apiBase + "/subscriptions",
        method: 'GET',
        params: query,
    });
}
function createSubscription(data) {
    return axios_1.default({
        url: config_1.default.apiBase + "/subscriptions",
        method: 'POST',
        data: data,
    });
}
function updateSubscription(id, data) {
    return axios_1.default({
        url: config_1.default.apiBase + "/subscriptions/" + id,
        method: 'PUT',
        data: data,
    });
}
function deleteSubscription(id) {
    return axios_1.default({
        url: config_1.default.apiBase + "/subscriptions/" + id,
        method: 'DELETE',
    });
}
function getUpcomingInvoices(id, query) {
    if (query === void 0) { query = {}; }
    return axios_1.default({
        url: config_1.default.apiBase + "/subscriptions/" + id + "/upcoming_invoices",
        method: 'GET',
        params: query,
    });
}
