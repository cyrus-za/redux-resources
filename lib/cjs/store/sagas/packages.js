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
var js_file_download_1 = require("js-file-download");
function getPackages(_a) {
    var getPackagesResponse, error_1;
    var query = _a.query, successCb = _a.successCb, errorCb = _a.errorCb;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 5, , 7]);
                return [4 /*yield*/, effects_1.put(actions_1.packageActions.getPackagesInitialState())];
            case 1:
                _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.packageActions.getPackagesLoading())];
            case 2:
                _b.sent();
                return [4 /*yield*/, effects_1.call(api_1.packageApi.getPackages, query)];
            case 3:
                getPackagesResponse = _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.packageActions.getPackagesFulfilled(getPackagesResponse))];
            case 4:
                _b.sent();
                successCb !== undefined && successCb();
                return [3 /*break*/, 7];
            case 5:
                error_1 = _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.packageActions.getPackagesRejected(error_1))];
            case 6:
                _b.sent();
                errorCb !== undefined && errorCb();
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}
function getPackageLexicon(_a) {
    var getPackageLexiconResponse, error_2;
    var query = _a.query, successCb = _a.successCb, errorCb = _a.errorCb;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 5, , 7]);
                return [4 /*yield*/, effects_1.put(actions_1.packageActions.getPackageLexiconInitialState())];
            case 1:
                _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.packageActions.getPackageLexiconLoading())];
            case 2:
                _b.sent();
                return [4 /*yield*/, effects_1.call(api_1.packageApi.getPackageLexicon, query)];
            case 3:
                getPackageLexiconResponse = _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.packageActions.getPackageLexiconFulfilled(getPackageLexiconResponse))];
            case 4:
                _b.sent();
                successCb !== undefined && successCb();
                return [3 /*break*/, 7];
            case 5:
                error_2 = _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.packageActions.getPackageLexiconRejected(error_2))];
            case 6:
                _b.sent();
                errorCb !== undefined && errorCb();
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}
function showPackage(_a) {
    var showPackageResponse, error_3;
    var id = _a.id, successCb = _a.successCb, errorCb = _a.errorCb;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 5, , 7]);
                return [4 /*yield*/, effects_1.put(actions_1.packageActions.showPackageInitialState())];
            case 1:
                _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.packageActions.showPackageLoading())];
            case 2:
                _b.sent();
                return [4 /*yield*/, effects_1.call(api_1.packageApi.showPackage, id)];
            case 3:
                showPackageResponse = _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.packageActions.showPackageFulfilled(showPackageResponse))];
            case 4:
                _b.sent();
                successCb !== undefined && successCb();
                return [3 /*break*/, 7];
            case 5:
                error_3 = _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.packageActions.showPackageRejected(error_3))];
            case 6:
                _b.sent();
                errorCb !== undefined && errorCb();
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}
function deletePackage(_a) {
    var error_4;
    var id = _a.id, successCb = _a.successCb, errorCb = _a.errorCb;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 5]);
                //	yield put(packageActions.deletePackageInitialState())
                //	yield put(packageActions.deletePackageLoading())
                return [4 /*yield*/, effects_1.call(api_1.packageApi.deletePackage, id)
                    //	yield put(packageActions.deletePackageFulfilled())
                ];
            case 1:
                //	yield put(packageActions.deletePackageInitialState())
                //	yield put(packageActions.deletePackageLoading())
                _b.sent();
                //	yield put(packageActions.deletePackageFulfilled())
                return [4 /*yield*/, effects_1.put(actions_1.notificationActions.displaySnackbarMessage('Package deleted', 2000))];
            case 2:
                //	yield put(packageActions.deletePackageFulfilled())
                _b.sent();
                successCb !== undefined && successCb();
                return [3 /*break*/, 5];
            case 3:
                error_4 = _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.packageActions.deletePackageRejected(error_4))];
            case 4:
                _b.sent();
                errorCb !== undefined && errorCb();
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}
function createPackage(_a) {
    var createPackageResponse, error_5;
    var data = _a.data, successCb = _a.successCb, errorCb = _a.errorCb;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 6, , 8]);
                return [4 /*yield*/, effects_1.put(actions_1.packageActions.createPackageInitialState())];
            case 1:
                _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.packageActions.createPackageLoading())];
            case 2:
                _b.sent();
                return [4 /*yield*/, effects_1.call(api_1.packageApi.createPackage, data)];
            case 3:
                createPackageResponse = _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.packageActions.createPackageFulfilled(createPackageResponse))];
            case 4:
                _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.notificationActions.displaySnackbarMessage('Package created', 2000))];
            case 5:
                _b.sent();
                successCb !== undefined && successCb();
                return [3 /*break*/, 8];
            case 6:
                error_5 = _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.packageActions.createPackageRejected(error_5))];
            case 7:
                _b.sent();
                errorCb !== undefined && errorCb();
                return [3 /*break*/, 8];
            case 8: return [2 /*return*/];
        }
    });
}
function updatePackage(_a) {
    var updatePackageResponse, error_6;
    var id = _a.id, data = _a.data, successCb = _a.successCb, errorCb = _a.errorCb;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 5, , 7]);
                return [4 /*yield*/, effects_1.put(actions_1.packageActions.updatePackageInitialState())];
            case 1:
                _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.packageActions.updatePackageLoading())];
            case 2:
                _b.sent();
                return [4 /*yield*/, effects_1.call(api_1.packageApi.updatePackage, id, data)];
            case 3:
                updatePackageResponse = _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.packageActions.updatePackageFulfilled(updatePackageResponse))];
            case 4:
                _b.sent();
                successCb !== undefined && successCb();
                return [3 /*break*/, 7];
            case 5:
                error_6 = _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.packageActions.updatePackageRejected(error_6))];
            case 6:
                _b.sent();
                errorCb !== undefined && errorCb();
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}
function getRecipients(_a) {
    var getPackageRecipientsResponse, error_7;
    var id = _a.id, _b = _a.query, query = _b === void 0 ? {} : _b, successCb = _a.successCb, errorCb = _a.errorCb;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 5, , 7]);
                return [4 /*yield*/, effects_1.put(actions_1.packageActions.getPackageRecipientsInitialState())];
            case 1:
                _c.sent();
                return [4 /*yield*/, effects_1.put(actions_1.packageActions.getPackageRecipientsLoading())];
            case 2:
                _c.sent();
                return [4 /*yield*/, effects_1.call(api_1.packageApi.getRecipients, id, query)];
            case 3:
                getPackageRecipientsResponse = _c.sent();
                return [4 /*yield*/, effects_1.put(actions_1.packageActions.getPackageRecipientsFulfilled(getPackageRecipientsResponse))];
            case 4:
                _c.sent();
                successCb && successCb();
                return [3 /*break*/, 7];
            case 5:
                error_7 = _c.sent();
                return [4 /*yield*/, effects_1.put(actions_1.packageActions.getPackageRecipientsRejected(error_7))];
            case 6:
                _c.sent();
                errorCb && errorCb();
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}
function createRecipient(_a) {
    var createPackageRecipientResponse, error_8;
    var id = _a.id, data = _a.data, successCb = _a.successCb, errorCb = _a.errorCb;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 5, , 7]);
                return [4 /*yield*/, effects_1.put(actions_1.packageActions.createPackageRecipientInitialState())];
            case 1:
                _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.packageActions.createPackageRecipientLoading())];
            case 2:
                _b.sent();
                return [4 /*yield*/, effects_1.call(api_1.packageApi.createRecipient, id, data)];
            case 3:
                createPackageRecipientResponse = _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.packageActions.createPackageRecipientFulfilled(createPackageRecipientResponse))];
            case 4:
                _b.sent();
                successCb !== undefined && successCb();
                return [3 /*break*/, 7];
            case 5:
                error_8 = _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.packageActions.createPackageRecipientRejected(error_8))];
            case 6:
                _b.sent();
                errorCb !== undefined && errorCb();
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}
function updateRecipient(_a) {
    var updatePackageRecipientResponse, error_9;
    var id = _a.id, recipientId = _a.recipientId, data = _a.data, successCb = _a.successCb, errorCb = _a.errorCb;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 5, , 7]);
                return [4 /*yield*/, effects_1.put(actions_1.packageActions.updatePackageRecipientInitialState())];
            case 1:
                _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.packageActions.updatePackageRecipientLoading())];
            case 2:
                _b.sent();
                return [4 /*yield*/, effects_1.call(api_1.packageApi.updateRecipient, id, recipientId, data)];
            case 3:
                updatePackageRecipientResponse = _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.packageActions.updatePackageRecipientFulfilled(updatePackageRecipientResponse))];
            case 4:
                _b.sent();
                successCb !== undefined && successCb();
                return [3 /*break*/, 7];
            case 5:
                error_9 = _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.packageActions.updatePackageRecipientRejected(error_9))];
            case 6:
                _b.sent();
                errorCb !== undefined && errorCb();
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}
function getDocuments(_a) {
    var getPackageDocumentsResponse, error_10;
    var id = _a.id, _b = _a.query, query = _b === void 0 ? {} : _b, _c = _a.successCb, successCb = _c === void 0 ? undefined : _c, _d = _a.errorCb, errorCb = _d === void 0 ? undefined : _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _e.trys.push([0, 5, , 7]);
                return [4 /*yield*/, effects_1.put(actions_1.packageActions.getPackageDocumentsInitialState())];
            case 1:
                _e.sent();
                return [4 /*yield*/, effects_1.put(actions_1.packageActions.getPackageDocumentsLoading())];
            case 2:
                _e.sent();
                return [4 /*yield*/, effects_1.call(api_1.packageApi.getDocuments, id, query)];
            case 3:
                getPackageDocumentsResponse = _e.sent();
                return [4 /*yield*/, effects_1.put(actions_1.packageActions.getPackageDocumentsFulfilled(getPackageDocumentsResponse))];
            case 4:
                _e.sent();
                successCb && successCb();
                return [3 /*break*/, 7];
            case 5:
                error_10 = _e.sent();
                return [4 /*yield*/, effects_1.put(actions_1.packageActions.getPackageDocumentsRejected(error_10))];
            case 6:
                _e.sent();
                errorCb && errorCb();
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}
function getPages(_a) {
    var response, error_11;
    var packageId = _a.packageId, _b = _a.query, query = _b === void 0 ? {} : _b, successCb = _a.successCb, errorCb = _a.errorCb;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 5, , 7]);
                return [4 /*yield*/, effects_1.put(actions_1.packageActions.getPagesInitialState())];
            case 1:
                _c.sent();
                return [4 /*yield*/, effects_1.put(actions_1.packageActions.getPagesLoading())];
            case 2:
                _c.sent();
                return [4 /*yield*/, effects_1.call(api_1.packageApi.getPages, packageId, query)];
            case 3:
                response = _c.sent();
                return [4 /*yield*/, effects_1.put(actions_1.packageActions.getPagesFulfilled(response))];
            case 4:
                _c.sent();
                successCb !== undefined && successCb();
                return [3 /*break*/, 7];
            case 5:
                error_11 = _c.sent();
                return [4 /*yield*/, effects_1.put(actions_1.packageActions.getPagesRejected(error_11))];
            case 6:
                _c.sent();
                errorCb !== undefined && errorCb();
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}
function createDocuments(_a) {
    var createPackageDocumentsResponse, error_12;
    var id = _a.id, data = _a.data, successCb = _a.successCb, errorCb = _a.errorCb;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 5, , 7]);
                return [4 /*yield*/, effects_1.put(actions_1.packageActions.createPackageDocumentsInitialState())];
            case 1:
                _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.packageActions.createPackageDocumentsLoading())];
            case 2:
                _b.sent();
                return [4 /*yield*/, effects_1.call(api_1.packageApi.createDocuments, id, data)];
            case 3:
                createPackageDocumentsResponse = _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.packageActions.createPackageDocumentsFulfilled(createPackageDocumentsResponse))];
            case 4:
                _b.sent();
                successCb !== undefined && successCb();
                return [3 /*break*/, 7];
            case 5:
                error_12 = _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.packageActions.createPackageDocumentsRejected(error_12))];
            case 6:
                _b.sent();
                errorCb !== undefined && errorCb();
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}
function updateDocument(_a) {
    var updatePackageRecipientResponse, error_13;
    var packageId = _a.packageId, documentId = _a.documentId, data = _a.data, successCb = _a.successCb, errorCb = _a.errorCb;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 6, , 9]);
                return [4 /*yield*/, effects_1.put(actions_1.packageActions.updateDocumentInitialState())];
            case 1:
                _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.packageActions.updateDocumentLoading())];
            case 2:
                _b.sent();
                return [4 /*yield*/, effects_1.call(api_1.packageApi.updateDocument, packageId, documentId, data)];
            case 3:
                updatePackageRecipientResponse = _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.packageActions.updateDocumentFulfilled(updatePackageRecipientResponse))];
            case 4:
                _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.notificationActions.displaySnackbarMessage('Document name updated', 2000))];
            case 5:
                _b.sent();
                successCb !== undefined && successCb();
                return [3 /*break*/, 9];
            case 6:
                error_13 = _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.packageActions.updateDocumentRejected(error_13))];
            case 7:
                _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.notificationActions.displaySnackbarMessage('Failed to update name', 2000))];
            case 8:
                _b.sent();
                errorCb !== undefined && errorCb();
                return [3 /*break*/, 9];
            case 9: return [2 /*return*/];
        }
    });
}
function createDocumentFromSocialAccount(_a) {
    var createDocumentFromSocialAccountResponse, error_14;
    var id = _a.id, socialAccountId = _a.socialAccountId, externalFileId = _a.externalFileId, successCb = _a.successCb, errorCb = _a.errorCb;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 6, , 8]);
                return [4 /*yield*/, effects_1.put(actions_1.packageActions.createDocumentFromSocialAccountInitialState())];
            case 1:
                _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.packageActions.createDocumentFromSocialAccountLoading())];
            case 2:
                _b.sent();
                return [4 /*yield*/, effects_1.call(api_1.packageApi.createDocumentFromSocialAccount, id, socialAccountId, externalFileId)];
            case 3:
                createDocumentFromSocialAccountResponse = _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.packageActions.createDocumentFromSocialAccountFulfilled(createDocumentFromSocialAccountResponse))];
            case 4:
                _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.notificationActions.displaySnackbarMessage('Document imported!', 2000))];
            case 5:
                _b.sent();
                successCb !== undefined && successCb();
                return [3 /*break*/, 8];
            case 6:
                error_14 = _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.packageActions.createDocumentFromSocialAccountRejected(error_14))];
            case 7:
                _b.sent();
                errorCb !== undefined && errorCb();
                return [3 /*break*/, 8];
            case 8: return [2 /*return*/];
        }
    });
}
function downloadPackageDocument(_a) {
    var downloadResponse, fileName, error_15;
    var id = _a.id, documentId = _a.documentId, successCb = _a.successCb, errorCb = _a.errorCb;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 4]);
                return [4 /*yield*/, effects_1.call(api_1.packageApi.downloadDocument, id, documentId)];
            case 1:
                downloadResponse = _b.sent();
                fileName = downloadResponse.headers['content-disposition'].replace('attachment; filename=', '');
                js_file_download_1.default(downloadResponse.data, fileName, downloadResponse.headers['content-type']);
                successCb !== undefined && successCb();
                return [3 /*break*/, 4];
            case 2:
                error_15 = _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.packageActions.deleteDocumentRejected(error_15))];
            case 3:
                _b.sent();
                errorCb !== undefined && errorCb();
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}
function getPackageImageUrl(_a) {
    var imageUrl, error_16;
    var id = _a.id, image_url = _a.image_url, successCb = _a.successCb, errorCb = _a.errorCb;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                return [4 /*yield*/, effects_1.call(api_1.packageApi.getDocumentPageImageUrl, image_url)];
            case 1:
                imageUrl = _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.packageActions.setPackageImageUrl(id, imageUrl))];
            case 2:
                _b.sent();
                successCb !== undefined && successCb();
                return [3 /*break*/, 4];
            case 3:
                error_16 = _b.sent();
                //  yield put(packageActions.deleteDocumentRejected(error))
                errorCb !== undefined && errorCb();
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}
function getDocumentImageUrl(_a) {
    var imageUrl, error_17;
    var documentId = _a.documentId, image_url = _a.image_url, successCb = _a.successCb, errorCb = _a.errorCb;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                return [4 /*yield*/, effects_1.call(api_1.packageApi.getDocumentPageImageUrl, image_url)];
            case 1:
                imageUrl = _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.packageActions.setDocumentImageUrl(documentId, imageUrl))];
            case 2:
                _b.sent();
                successCb !== undefined && successCb();
                return [3 /*break*/, 4];
            case 3:
                error_17 = _b.sent();
                //  yield put(packageActions.deleteDocumentRejected(error))
                errorCb !== undefined && errorCb();
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}
function getDocumentPageImageUrl(_a) {
    var imageUrl, error_18;
    var documentId = _a.documentId, pageId = _a.pageId, image_url = _a.image_url, successCb = _a.successCb, errorCb = _a.errorCb;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                return [4 /*yield*/, effects_1.call(api_1.packageApi.getDocumentPageImageUrl, image_url)];
            case 1:
                imageUrl = _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.packageActions.setDocumentPageImageUrl(documentId, pageId, imageUrl))];
            case 2:
                _b.sent();
                successCb !== undefined && successCb();
                return [3 /*break*/, 4];
            case 3:
                error_18 = _b.sent();
                //  yield put(packageActions.deleteDocumentRejected(error))
                errorCb !== undefined && errorCb();
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}
function publish(_a) {
    var data, error_19;
    var packageId = _a.packageId, successCb = _a.successCb, errorCb = _a.errorCb;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 4, , 7]);
                return [4 /*yield*/, effects_1.call(api_1.packageApi.publish, packageId)];
            case 1:
                data = _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.packageActions.showPackageFulfilled(data))];
            case 2:
                _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.notificationActions.displaySnackbarMessage('Package published!', 2000))];
            case 3:
                _b.sent();
                successCb !== undefined && successCb();
                return [3 /*break*/, 7];
            case 4:
                error_19 = _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.packageActions.showPackageRejected(error_19))];
            case 5:
                _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.notificationActions.displaySnackbarMessage(error_19.message, 2000))];
            case 6:
                _b.sent();
                errorCb !== undefined && errorCb();
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}
function deleteDocument(_a) {
    var error_20;
    var id = _a.id, documentId = _a.documentId, successCb = _a.successCb, errorCb = _a.errorCb;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 6, , 8]);
                return [4 /*yield*/, effects_1.put(actions_1.packageActions.deleteDocumentInitialState())];
            case 1:
                _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.packageActions.deleteDocumentLoading())];
            case 2:
                _b.sent();
                return [4 /*yield*/, effects_1.call(api_1.packageApi.deleteDocument, id, documentId)];
            case 3:
                _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.packageActions.deleteDocumentFulfilled(documentId))];
            case 4:
                _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.notificationActions.displaySnackbarMessage('Document deleted', 2000))];
            case 5:
                _b.sent();
                successCb !== undefined && successCb();
                return [3 /*break*/, 8];
            case 6:
                error_20 = _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.packageActions.deleteDocumentRejected(error_20))];
            case 7:
                _b.sent();
                errorCb !== undefined && errorCb();
                return [3 /*break*/, 8];
            case 8: return [2 /*return*/];
        }
    });
}
function deleteRecipient(_a) {
    var error_21;
    var id = _a.id, recipientId = _a.recipientId, successCb = _a.successCb, errorCb = _a.errorCb;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 5, , 7]);
                return [4 /*yield*/, effects_1.put(actions_1.packageActions.deletePackageRecipientInitialState())];
            case 1:
                _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.packageActions.deletePackageRecipientLoading())];
            case 2:
                _b.sent();
                return [4 /*yield*/, effects_1.call(api_1.packageApi.deleteRecipient, id, recipientId)];
            case 3:
                _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.packageActions.deletePackageRecipientFulfilled())];
            case 4:
                _b.sent();
                successCb !== undefined && successCb();
                return [3 /*break*/, 7];
            case 5:
                error_21 = _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.packageActions.deletePackageRecipientRejected(error_21))];
            case 6:
                _b.sent();
                errorCb !== undefined && errorCb();
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}
function rootSaga() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, effects_1.takeEvery(actions_1.packageActions.GET_PACKAGES, getPackages)];
            case 1:
                _a.sent();
                return [4 /*yield*/, effects_1.takeEvery(actions_1.packageActions.GET_PACKAGE_LEXICON, getPackageLexicon)];
            case 2:
                _a.sent();
                return [4 /*yield*/, effects_1.takeEvery(actions_1.packageActions.SHOW_PACKAGE, showPackage)];
            case 3:
                _a.sent();
                return [4 /*yield*/, effects_1.takeEvery(actions_1.packageActions.CREATE_PACKAGE, createPackage)];
            case 4:
                _a.sent();
                return [4 /*yield*/, effects_1.takeEvery(actions_1.packageActions.UPDATE_PACKAGE, updatePackage)];
            case 5:
                _a.sent();
                return [4 /*yield*/, effects_1.takeEvery(actions_1.packageActions.DELETE_PACKAGE, deletePackage)];
            case 6:
                _a.sent();
                return [4 /*yield*/, effects_1.takeEvery(actions_1.packageActions.DOWNLOAD_PACKAGE_DOCUMENT, downloadPackageDocument)];
            case 7:
                _a.sent();
                return [4 /*yield*/, effects_1.takeEvery(actions_1.packageActions.GET_PACKAGE_RECIPIENTS, getRecipients)];
            case 8:
                _a.sent();
                return [4 /*yield*/, effects_1.takeEvery(actions_1.packageActions.CREATE_PACKAGE_RECIPIENT, createRecipient)];
            case 9:
                _a.sent();
                return [4 /*yield*/, effects_1.takeEvery(actions_1.packageActions.UPDATE_PACKAGE_RECIPIENT, updateRecipient)];
            case 10:
                _a.sent();
                return [4 /*yield*/, effects_1.takeEvery(actions_1.packageActions.GET_PACKAGE_DOCUMENTS, getDocuments)];
            case 11:
                _a.sent();
                return [4 /*yield*/, effects_1.takeEvery(actions_1.packageActions.GET_PAGES, getPages)];
            case 12:
                _a.sent();
                return [4 /*yield*/, effects_1.takeEvery(actions_1.packageActions.CREATE_PACKAGE_DOCUMENTS, createDocuments)];
            case 13:
                _a.sent();
                return [4 /*yield*/, effects_1.takeEvery(actions_1.packageActions.UPDATE_DOCUMENT, updateDocument)];
            case 14:
                _a.sent();
                return [4 /*yield*/, effects_1.takeEvery(actions_1.packageActions.CREATE_DOCUMENT_FROM_CONNECTED_SERVICE, createDocumentFromSocialAccount)];
            case 15:
                _a.sent();
                return [4 /*yield*/, effects_1.takeEvery(actions_1.packageActions.DELETE_DOCUMENT, deleteDocument)];
            case 16:
                _a.sent();
                return [4 /*yield*/, effects_1.takeEvery(actions_1.packageActions.DELETE_PACKAGE_RECIPIENT, deleteRecipient)];
            case 17:
                _a.sent();
                return [4 /*yield*/, effects_1.takeEvery(actions_1.packageActions.GET_PACKAGE_IMAGE_URL, getPackageImageUrl)];
            case 18:
                _a.sent();
                return [4 /*yield*/, effects_1.takeEvery(actions_1.packageActions.GET_DOCUMENT_IMAGE_URL, getDocumentImageUrl)];
            case 19:
                _a.sent();
                return [4 /*yield*/, effects_1.takeEvery(actions_1.packageActions.GET_DOCUMENT_PAGE_IMAGE_URL, getDocumentPageImageUrl)];
            case 20:
                _a.sent();
                return [4 /*yield*/, effects_1.takeEvery(actions_1.packageActions.PUBLISH, publish)];
            case 21:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
exports.default = rootSaga;
