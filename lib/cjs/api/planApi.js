"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var config_1 = require("../config");
exports.planApi = {
    getPlans: getPlans,
};
function getPlans(query) {
    if (query === void 0) { query = {}; }
    return axios_1.default({
        url: config_1.default.apiBase + "/plans",
        method: 'GET',
        params: query,
    });
}
