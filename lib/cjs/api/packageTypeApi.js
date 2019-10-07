"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var config_1 = require("../config");
exports.packageTypeApi = {
    getPackageTypes: getPackageTypes,
};
function getPackageTypes(query) {
    return axios_1.default({
        url: config_1.default.apiBase + "/package_types",
        method: 'GET',
        params: query,
    });
}
