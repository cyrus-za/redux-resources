"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
exports.keysToSnakeCase = function (object) { return lodash_1.mapKeys(object, function (v, k) { return lodash_1.snakeCase(k); }); };
exports.keysToCamelCase = function (object) { return lodash_1.mapKeys(object, function (v, k) { return lodash_1.camelCase(k); }); };
exports.deepKeysToCamelCase = function (object) {
    if (lodash_1.isArray(object))
        return object.map(exports.deepKeysToCamelCase);
    var obj = lodash_1.mapValues(object, function (v, k) { return (lodash_1.isObject(v) ? exports.deepKeysToCamelCase(v) : v); });
    return exports.keysToCamelCase(obj);
};
