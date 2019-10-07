"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var config_1 = require("../config");
exports.userApi = {
    createUser: createUser,
    me: me,
    getUserMeta: getUserMeta,
    updateUser: updateUser,
    updateUserPassword: updateUserPassword,
    resendEmailConfirmation: resendEmailConfirmation,
    getNotificationPreferences: getNotificationPreferences,
    updateNotificationPreferences: updateNotificationPreferences,
    updatePicture: updatePicture,
    confirmEmail: confirmEmail,
};
function updateUser(id, user) {
    return axios_1.default({
        url: config_1.default.apiBase + "/users/" + id,
        method: 'PUT',
        data: user,
    });
}
function updateUserPassword(id, payload) {
    return axios_1.default({
        url: config_1.default.apiBase + "/users/" + id + "/password",
        method: 'PUT',
        data: payload,
    });
}
function createUser(user) {
    return axios_1.default({
        url: config_1.default.apiBase + "/users",
        method: 'POST',
        data: user,
    });
}
function me() {
    return axios_1.default({
        url: config_1.default.apiBase + "/users/me",
        method: 'GET',
    });
}
function getUserMeta(userId) {
    return axios_1.default({
        url: config_1.default.apiBase + "/users/" + userId + "/meta",
        method: 'GET',
    });
}
function resendEmailConfirmation() {
    return axios_1.default({
        url: config_1.default.apiBase + "/users/email_confirmation",
        method: 'GET',
    });
}
function getNotificationPreferences(id) {
    return axios_1.default({
        url: config_1.default.apiBase + "/users/" + id + "/notification_preferences",
        method: 'GET',
    });
}
function updateNotificationPreferences(id, payload) {
    return axios_1.default({
        url: config_1.default.apiBase + "/users/" + id + "/notification_preferences",
        method: 'PUT',
        data: payload,
    });
}
function updatePicture(id, data) {
    return axios_1.default({
        url: config_1.default.apiBase + "/users/" + id + "/picture",
        method: 'POST',
        data: data,
    });
}
function confirmEmail(token) {
    return axios_1.default({
        url: config_1.default.apiBase + "/users/email_confirmation/" + token,
        method: 'PUT',
    });
}
