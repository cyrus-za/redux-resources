"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var config_1 = require("../config");
exports.feedbackApi = {
    sendFeedback: sendFeedback,
};
function sendFeedback(data) {
    return axios_1.default({
        url: config_1.default.apiBase + "/feedback",
        method: 'POST',
        data: data,
    });
}
