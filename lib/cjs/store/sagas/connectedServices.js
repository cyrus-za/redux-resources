"use strict";
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var actions_1 = require("../actions");
var effects_1 = require("redux-saga/effects");
var api_1 = require("../../api");
function getConnectedServices(_a) {
    var getConnectedServicesResponse, list, data, error_1;
    var _b = _a.query, query = _b === void 0 ? {} : _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 6, , 8]);
                return [4 /*yield*/, effects_1.put(actions_1.connectedServiceActions.setConnectedServicesLoading())];
            case 1:
                _c.sent();
                return [4 /*yield*/, effects_1.call(api_1.connectedServiceApi.getConnectedServices, query)];
            case 2:
                getConnectedServicesResponse = _c.sent();
                return [4 /*yield*/, effects_1.put(actions_1.connectedServiceActions.setConnectedServicesFulfilled(getConnectedServicesResponse))];
            case 3:
                _c.sent();
                list = getConnectedServicesResponse.data;
                data = {
                    connected: list.data,
                    available: list.data,
                };
                return [4 /*yield*/, effects_1.put(actions_1.connectedServiceActions.setConnectedServices(data.connected))];
            case 4:
                _c.sent();
                return [4 /*yield*/, effects_1.put(actions_1.connectedServiceActions.setAvailableServices(data.available))];
            case 5:
                _c.sent();
                return [3 /*break*/, 8];
            case 6:
                error_1 = _c.sent();
                return [4 /*yield*/, effects_1.put(actions_1.connectedServiceActions.setConnectedServicesRejected(error_1))];
            case 7:
                _c.sent();
                return [3 /*break*/, 8];
            case 8: return [2 /*return*/];
        }
    });
}
function createConnectedService(_a) {
    var provider, getConnectedServicesResponse, error_2;
    var data = _a.data, successCb = _a.successCb, errorCb = _a.errorCb;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                provider = data.provider;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 6, , 8]);
                return [4 /*yield*/, effects_1.put(actions_1.connectedServiceActions.createConnectedServiceLoading())];
            case 2:
                _b.sent();
                return [4 /*yield*/, effects_1.call(api_1.connectedServiceApi.createConnectedService, data)];
            case 3:
                getConnectedServicesResponse = _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.connectedServiceActions.createConnectedServiceFulfilled(getConnectedServicesResponse))];
            case 4:
                _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.notificationActions.displaySnackbarMessage(provider + " account now linked!", 2000))];
            case 5:
                _b.sent();
                successCb && successCb();
                return [3 /*break*/, 8];
            case 6:
                error_2 = _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.connectedServiceActions.createConnectedServiceRejected(error_2))];
            case 7:
                _b.sent();
                errorCb && errorCb();
                return [3 /*break*/, 8];
            case 8: return [2 /*return*/];
        }
    });
}
function updateConnectedService(_a) {
    var getConnectedServicesResponse, error_3;
    var id = _a.id, data = _a.data, successCb = _a.successCb, errorCb = _a.errorCb;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 5, , 7]);
                return [4 /*yield*/, effects_1.put(actions_1.connectedServiceActions.updateConnectedServiceLoading())];
            case 1:
                _b.sent();
                return [4 /*yield*/, effects_1.call(api_1.connectedServiceApi.updateConnectedService, id, data)];
            case 2:
                getConnectedServicesResponse = _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.connectedServiceActions.updateConnectedServiceFulfilled(getConnectedServicesResponse))];
            case 3:
                _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.notificationActions.displaySnackbarMessage("Service updated!", 2000))];
            case 4:
                _b.sent();
                successCb && successCb();
                return [3 /*break*/, 7];
            case 5:
                error_3 = _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.connectedServiceActions.updateConnectedServiceRejected(error_3))];
            case 6:
                _b.sent();
                errorCb && errorCb();
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}
function deleteConnectedService(_a) {
    var getConnectedServicesResponse, error_4;
    var id = _a.id, _b = _a.scopes, scopes = _b === void 0 ? undefined : _b, successCb = _a.successCb, errorCb = _a.errorCb;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 5, , 7]);
                return [4 /*yield*/, effects_1.put(actions_1.connectedServiceActions.deleteConnectedServiceLoading())];
            case 1:
                _c.sent();
                return [4 /*yield*/, effects_1.call(api_1.connectedServiceApi.deleteConnectedService, id, scopes)];
            case 2:
                getConnectedServicesResponse = _c.sent();
                return [4 /*yield*/, effects_1.put(actions_1.connectedServiceActions.deleteConnectedServiceFulfilled(getConnectedServicesResponse))];
            case 3:
                _c.sent();
                return [4 /*yield*/, effects_1.put(actions_1.notificationActions.displaySnackbarMessage("Service deleted!", 2000))];
            case 4:
                _c.sent();
                successCb && successCb();
                return [3 /*break*/, 7];
            case 5:
                error_4 = _c.sent();
                return [4 /*yield*/, effects_1.put(actions_1.connectedServiceActions.deleteConnectedServiceRejected(error_4))];
            case 6:
                _c.sent();
                errorCb && errorCb();
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}
function setConnectedServicesInitialState() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, effects_1.put(actions_1.connectedServiceActions.setConnectedServicesInitialState())];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
exports.setConnectedServicesInitialState = setConnectedServicesInitialState;
function rootSaga() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, effects_1.takeEvery(actions_1.connectedServiceActions.GET_CONNECTED_SERVICES, getConnectedServices)];
            case 1:
                _a.sent();
                return [4 /*yield*/, effects_1.takeEvery(actions_1.connectedServiceActions.SET_CONNECTED_SERVICES_INITIAL_STATE, setConnectedServicesInitialState)];
            case 2:
                _a.sent();
                return [4 /*yield*/, effects_1.takeEvery(actions_1.connectedServiceActions.CREATE_CONNECTED_SERVICE, createConnectedService)];
            case 3:
                _a.sent();
                return [4 /*yield*/, effects_1.takeEvery(actions_1.connectedServiceActions.UPDATE_CONNECTED_SERVICE, updateConnectedService)];
            case 4:
                _a.sent();
                return [4 /*yield*/, effects_1.takeEvery(actions_1.connectedServiceActions.DELETE_CONNECTED_SERVICE, deleteConnectedService)];
            case 5:
                _a.sent();
                return [4 /*yield*/, effects_1.takeEvery(actions_1.connectedServiceActions.DELETE_CONNECTED_SERVICE_FULFILLED, getConnectedServices)];
            case 6:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
exports.default = rootSaga;
