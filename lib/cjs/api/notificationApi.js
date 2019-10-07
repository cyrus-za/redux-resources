"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var config_1 = require("../config");
exports.notificationApi = {
    getNotifications: getNotifications,
    deleteNotification: deleteNotification,
    update: update,
};
function getNotifications(query) {
    if (query === void 0) { query = {}; }
    return axios_1.default({
        url: config_1.default.apiBase + "/notifications",
        method: 'GET',
        params: query,
    });
}
function update(id, notification) {
    return axios_1.default({
        url: config_1.default.apiBase + "/notifications/" + id,
        method: 'PUT',
        data: notification,
    });
}
function deleteNotification(id) {
    return axios_1.default({
        url: config_1.default.apiBase + "/notifications/" + id,
        method: 'DELETE',
    });
}
