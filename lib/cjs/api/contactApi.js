"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var config_1 = require("../config");
exports.contactApi = {
    searchContact: searchContact,
};
function searchContact(data) {
    return axios_1.default({
        url: config_1.default.apiBase + "/contacts",
        method: 'GET',
        params: {
            first_names: data.firstName || '',
            last_names: data.lastName || '',
            emails: data.email || '',
        },
    })
        .then(function (res) { return res.data; })
        .then(function (data) {
        return data.map(function (c) { return ({
            firstName: c.first_name,
            lastName: c.last_name,
            email: c.email_addresses[0] && c.email_addresses[0].value,
            imageUrl: c.image_url,
        }); });
    });
}
