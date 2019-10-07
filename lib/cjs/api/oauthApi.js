"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var config_1 = require("../config");
exports.oauthApi = {
    createAccessToken: createAccessToken,
    createSocialAccessToken: createSocialAccessToken,
    createClient: createClient,
    deleteClient: deleteClient,
    authorizeClient: authorizeClient,
};
function createAccessToken(user) {
    return axios_1.default({
        url: config_1.default.apiBase + "/oauth/token",
        method: 'POST',
        data: {
            grant_type: 'password',
            username: user.email,
            password: user.password,
        },
    });
}
function createSocialAccessToken(provider, access_token, token_secret) {
    return axios_1.default({
        url: config_1.default.apiBase + "/oauth/token",
        method: 'POST',
        data: {
            grant_type: 'social',
            provider: provider,
            access_token: access_token,
            token_secret: token_secret,
        },
    });
}
function createClient(data) {
    return axios_1.default({
        url: config_1.default.apiBase + "/oauth/clients",
        method: 'POST',
        data: data,
    });
}
function deleteClient(id) {
    return axios_1.default({
        url: config_1.default.apiBase + "/oauth/clients/" + id,
        method: 'DELETE',
    });
}
function authorizeClient(params) {
    return axios_1.default({
        url: config_1.default.apiBase + "/oauth/authorize",
        method: 'GET',
        params: params,
    });
}
