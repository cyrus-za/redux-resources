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
function getFolders(_a) {
    var getFoldersResponse, error_1;
    var query = _a.query;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 5, , 7]);
                return [4 /*yield*/, effects_1.put(actions_1.folderActions.getFoldersInitialState())];
            case 1:
                _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.folderActions.getFoldersLoading())];
            case 2:
                _b.sent();
                return [4 /*yield*/, effects_1.call(api_1.folderApi.getFolders, query)];
            case 3:
                getFoldersResponse = _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.folderActions.getFoldersFulfilled(getFoldersResponse))];
            case 4:
                _b.sent();
                return [3 /*break*/, 7];
            case 5:
                error_1 = _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.folderActions.getFoldersRejected(error_1))];
            case 6:
                _b.sent();
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}
function createFolder(_a) {
    var createFolderResponse, query, error_2;
    var data = _a.data, successCb = _a.successCb, errorCb = _a.errorCb;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 7, , 9]);
                return [4 /*yield*/, effects_1.put(actions_1.folderActions.createFolderInitialState())];
            case 1:
                _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.folderActions.createFolderLoading())];
            case 2:
                _b.sent();
                return [4 /*yield*/, effects_1.call(api_1.folderApi.createFolder, data)];
            case 3:
                createFolderResponse = _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.folderActions.createFolderFulfilled(createFolderResponse))];
            case 4:
                _b.sent();
                successCb && successCb();
                return [4 /*yield*/, effects_1.put(actions_1.notificationActions.displaySnackbarMessage('Folder created!', 2000))];
            case 5:
                _b.sent();
                query = {
                    account_ids: createFolderResponse.data.account_id,
                };
                console.log(query);
                return [4 /*yield*/, effects_1.call(getFolders, { query: query })];
            case 6:
                _b.sent();
                return [3 /*break*/, 9];
            case 7:
                error_2 = _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.folderActions.createFolderRejected(error_2))];
            case 8:
                _b.sent();
                errorCb && errorCb();
                return [3 /*break*/, 9];
            case 9: return [2 /*return*/];
        }
    });
}
function updateFolder(_a) {
    var updateFolderResponse, query, error_3;
    var id = _a.id, data = _a.data, successCb = _a.successCb, errorCb = _a.errorCb;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 7, , 9]);
                return [4 /*yield*/, effects_1.put(actions_1.folderActions.updateFolderInitialState())];
            case 1:
                _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.folderActions.updateFolderLoading())];
            case 2:
                _b.sent();
                return [4 /*yield*/, effects_1.call(api_1.folderApi.updateFolder, id, data)];
            case 3:
                updateFolderResponse = _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.folderActions.updateFolderFulfilled(updateFolderResponse))];
            case 4:
                _b.sent();
                successCb && successCb();
                return [4 /*yield*/, effects_1.put(actions_1.notificationActions.displaySnackbarMessage('Folder updated!', 2000))];
            case 5:
                _b.sent();
                query = {
                    account_ids: updateFolderResponse.data.account_id,
                };
                return [4 /*yield*/, effects_1.call(getFolders, { query: query })];
            case 6:
                _b.sent();
                return [3 /*break*/, 9];
            case 7:
                error_3 = _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.folderActions.updateFolderRejected(error_3))];
            case 8:
                _b.sent();
                errorCb && errorCb();
                return [3 /*break*/, 9];
            case 9: return [2 /*return*/];
        }
    });
}
function rootSaga() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, effects_1.takeEvery(actions_1.folderActions.GET_FOLDERS, getFolders)];
            case 1:
                _a.sent();
                return [4 /*yield*/, effects_1.takeEvery(actions_1.folderActions.CREATE_FOLDER, createFolder)];
            case 2:
                _a.sent();
                return [4 /*yield*/, effects_1.takeEvery(actions_1.folderActions.UPDATE_FOLDER, updateFolder)];
            case 3:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
exports.default = rootSaga;
