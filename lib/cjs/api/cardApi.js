"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var config_1 = require("../config");
exports.cardApi = {
    getCards: getCards,
    deleteCard: deleteCard,
    createCard: createCard,
    updateCard: updateCard,
    setDefaultCard: setDefaultCard,
};
function getCards(query) {
    if (query === void 0) { query = {}; }
    return axios_1.default({
        url: config_1.default.apiBase + "/cards",
        method: 'GET',
        params: query,
    });
}
function deleteCard(id) {
    return axios_1.default({
        url: config_1.default.apiBase + "/cards/" + id,
        method: 'DELETE',
    });
}
function setDefaultCard(id) {
    return axios_1.default({
        url: config_1.default.apiBase + "/cards/" + id + "/default",
        method: 'PUT',
    });
}
function createCard(data) {
    return axios_1.default({
        url: config_1.default.apiBase + "/cards",
        method: 'POST',
        data: data,
    });
}
function updateCard(id, data) {
    return axios_1.default({
        url: config_1.default.apiBase + "/cards/" + id,
        method: 'PUT',
        data: data,
    });
}
