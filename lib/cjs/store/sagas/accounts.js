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
function getAccounts() {
    var response, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, , 6]);
                //	yield put(accountActions.accountsInitialState())
                return [4 /*yield*/, effects_1.put(actions_1.accountActions.accountsLoading())];
            case 1:
                //	yield put(accountActions.accountsInitialState())
                _a.sent();
                return [4 /*yield*/, effects_1.call(api_1.accountApi.getAccounts)];
            case 2:
                response = _a.sent();
                return [4 /*yield*/, effects_1.put(actions_1.accountActions.accountsFulfilled(response))];
            case 3:
                _a.sent();
                return [3 /*break*/, 6];
            case 4:
                error_1 = _a.sent();
                return [4 /*yield*/, effects_1.put(actions_1.accountActions.accountsRejected(error_1))];
            case 5:
                _a.sent();
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}
exports.getAccounts = getAccounts;
function getDefaultAccount() {
    var response, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, , 6]);
                //	yield put(accountActions.getDefaultAccountInitialState())
                return [4 /*yield*/, effects_1.put(actions_1.accountActions.getDefaultAccountLoading())];
            case 1:
                //	yield put(accountActions.getDefaultAccountInitialState())
                _a.sent();
                return [4 /*yield*/, effects_1.call(api_1.accountApi.getDefaultAccount)];
            case 2:
                response = _a.sent();
                return [4 /*yield*/, effects_1.put(actions_1.accountActions.getDefaultAccountFulfilled(response))];
            case 3:
                _a.sent();
                return [3 /*break*/, 6];
            case 4:
                error_2 = _a.sent();
                return [4 /*yield*/, effects_1.put(actions_1.accountActions.getDefaultAccountRejected(error_2))];
            case 5:
                _a.sent();
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}
exports.getDefaultAccount = getDefaultAccount;
function setDefaultAccount(_a) {
    var response, error_3;
    var id = _a.id;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 6, , 8]);
                return [4 /*yield*/, effects_1.put(actions_1.accountActions.setDefaultAccountInitialState())];
            case 1:
                _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.accountActions.setDefaultAccountLoading())];
            case 2:
                _b.sent();
                return [4 /*yield*/, effects_1.call(api_1.accountApi.setDefaultAccount, id)];
            case 3:
                response = _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.accountActions.setDefaultAccountFulfilled(response))];
            case 4:
                _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.notificationActions.displaySnackbarMessage('Default account updated!', 2000))];
            case 5:
                _b.sent();
                return [3 /*break*/, 8];
            case 6:
                error_3 = _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.accountActions.setDefaultAccountRejected(error_3))];
            case 7:
                _b.sent();
                return [3 /*break*/, 8];
            case 8: return [2 /*return*/];
        }
    });
}
exports.setDefaultAccount = setDefaultAccount;
function showAccount(_a) {
    var response, error_4;
    var id = _a.id;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 5, , 7]);
                return [4 /*yield*/, effects_1.put(actions_1.accountActions.showAccountInitialState())];
            case 1:
                _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.accountActions.showAccountLoading())];
            case 2:
                _b.sent();
                return [4 /*yield*/, effects_1.call(api_1.accountApi.show, id)];
            case 3:
                response = _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.accountActions.showAccountFulfilled(response))];
            case 4:
                _b.sent();
                return [3 /*break*/, 7];
            case 5:
                error_4 = _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.accountActions.showAccountRejected(error_4))];
            case 6:
                _b.sent();
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}
exports.showAccount = showAccount;
function getAccountUsers(_a) {
    var response, error_5;
    var id = _a.id;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 5, , 7]);
                return [4 /*yield*/, effects_1.put(actions_1.accountActions.accountUsersInitialState())];
            case 1:
                _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.accountActions.accountUsersLoading())];
            case 2:
                _b.sent();
                return [4 /*yield*/, effects_1.call(api_1.accountApi.getUsers, id)];
            case 3:
                response = _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.accountActions.accountUsersFulfilled(response))];
            case 4:
                _b.sent();
                return [3 /*break*/, 7];
            case 5:
                error_5 = _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.accountActions.accountUsersRejected(error_5))];
            case 6:
                _b.sent();
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}
exports.getAccountUsers = getAccountUsers;
function createAccount(_a) {
    var response, error_6;
    var account = _a.account, successCb = _a.successCb, errorCb = _a.errorCb;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 7, , 9]);
                return [4 /*yield*/, effects_1.put(actions_1.accountActions.createAccountInitialState())];
            case 1:
                _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.accountActions.createAccountLoading())];
            case 2:
                _b.sent();
                return [4 /*yield*/, effects_1.call(api_1.accountApi.create, account)];
            case 3:
                response = _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.accountActions.createAccountFulfilled(response))];
            case 4:
                _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.notificationActions.displaySnackbarMessage('Account created!', 2000))];
            case 5:
                _b.sent();
                return [4 /*yield*/, effects_1.call(getAccounts)];
            case 6:
                _b.sent();
                successCb && successCb();
                return [3 /*break*/, 9];
            case 7:
                error_6 = _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.accountActions.createAccountRejected(error_6))];
            case 8:
                _b.sent();
                errorCb && errorCb();
                return [3 /*break*/, 9];
            case 9: return [2 /*return*/];
        }
    });
}
exports.createAccount = createAccount;
function deleteAccountMember(_a) {
    var response, error_7;
    var account = _a.account, member = _a.member, successCb = _a.successCb, errorCb = _a.errorCb;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 7, , 9]);
                return [4 /*yield*/, effects_1.put(actions_1.accountActions.deleteAccountMemberInitialState())];
            case 1:
                _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.accountActions.deleteAccountMemberLoading())];
            case 2:
                _b.sent();
                return [4 /*yield*/, effects_1.call(api_1.accountApi.deleteAccountMember, account.id, member.id)];
            case 3:
                response = _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.accountActions.deleteAccountMemberFulfilled(response))];
            case 4:
                _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.notificationActions.displaySnackbarMessage('Account member deleted!', 2000))];
            case 5:
                _b.sent();
                return [4 /*yield*/, effects_1.call(getAccountUsers, { id: account.id })];
            case 6:
                _b.sent();
                successCb && successCb();
                return [3 /*break*/, 9];
            case 7:
                error_7 = _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.accountActions.deleteAccountMemberRejected(error_7))];
            case 8:
                _b.sent();
                errorCb && errorCb();
                return [3 /*break*/, 9];
            case 9: return [2 /*return*/];
        }
    });
}
exports.deleteAccountMember = deleteAccountMember;
function updateAccountMember(_a) {
    var response, error_8;
    var account = _a.account, member = _a.member, data = _a.data, successCb = _a.successCb, errorCb = _a.errorCb;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 7, , 9]);
                return [4 /*yield*/, effects_1.put(actions_1.accountActions.updateAccountMemberInitialState())];
            case 1:
                _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.accountActions.updateAccountMemberLoading())];
            case 2:
                _b.sent();
                return [4 /*yield*/, effects_1.call(api_1.accountApi.updateAccountMember, account.id, member.id, data)];
            case 3:
                response = _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.accountActions.updateAccountMemberFulfilled(response))];
            case 4:
                _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.notificationActions.displaySnackbarMessage('Account member updated!', 2000))];
            case 5:
                _b.sent();
                return [4 /*yield*/, effects_1.call(getAccountUsers, { id: account.id })];
            case 6:
                _b.sent();
                successCb && successCb();
                return [3 /*break*/, 9];
            case 7:
                error_8 = _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.accountActions.updateAccountMemberRejected(error_8))];
            case 8:
                _b.sent();
                errorCb && errorCb();
                return [3 /*break*/, 9];
            case 9: return [2 /*return*/];
        }
    });
}
exports.updateAccountMember = updateAccountMember;
function updateAccount(_a) {
    var response, error_9;
    var account = _a.account, data = _a.data, successCb = _a.successCb, errorCb = _a.errorCb;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 6, , 8]);
                return [4 /*yield*/, effects_1.put(actions_1.accountActions.updateAccountInitialState())];
            case 1:
                _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.accountActions.updateAccountLoading())];
            case 2:
                _b.sent();
                return [4 /*yield*/, effects_1.call(api_1.accountApi.update, account.id, data)];
            case 3:
                response = _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.accountActions.updateAccountFulfilled(response))];
            case 4:
                _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.notificationActions.displaySnackbarMessage('Account updated!', 2000))];
            case 5:
                _b.sent();
                successCb && successCb();
                return [3 /*break*/, 8];
            case 6:
                error_9 = _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.accountActions.updateAccountRejected(error_9))];
            case 7:
                _b.sent();
                errorCb && errorCb();
                return [3 /*break*/, 8];
            case 8: return [2 /*return*/];
        }
    });
}
exports.updateAccount = updateAccount;
function updateAccountPhoto(_a) {
    var response, error_10;
    var id = _a.id, payload = _a.payload, successCb = _a.successCb, errorCb = _a.errorCb;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 6, , 8]);
                return [4 /*yield*/, effects_1.put(actions_1.accountActions.updateAccountPhotoInitialState())];
            case 1:
                _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.accountActions.updateAccountPhotoLoading())];
            case 2:
                _b.sent();
                return [4 /*yield*/, effects_1.call(api_1.accountApi.updatePicture, id, payload)];
            case 3:
                response = _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.accountActions.updateAccountPhotoFulfilled(response))];
            case 4:
                _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.notificationActions.displaySnackbarMessage('Account photo updated!', 2000))];
            case 5:
                _b.sent();
                successCb && successCb();
                return [3 /*break*/, 8];
            case 6:
                error_10 = _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.accountActions.updateAccountPhotoRejected(error_10))];
            case 7:
                _b.sent();
                errorCb && errorCb();
                return [3 /*break*/, 8];
            case 8: return [2 /*return*/];
        }
    });
}
function getInvoices(_a) {
    var response, error_11;
    var account = _a.account;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 5, , 7]);
                return [4 /*yield*/, effects_1.put(actions_1.accountActions.getInvoicesInitialState())];
            case 1:
                _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.accountActions.getInvoicesLoading())];
            case 2:
                _b.sent();
                return [4 /*yield*/, effects_1.call(api_1.accountApi.getInvoices, account.id)];
            case 3:
                response = _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.accountActions.getInvoicesFulfilled(response))];
            case 4:
                _b.sent();
                return [3 /*break*/, 7];
            case 5:
                error_11 = _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.accountActions.getInvoicesRejected(error_11))];
            case 6:
                _b.sent();
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}
function rootSaga() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, effects_1.takeEvery(actions_1.accountActions.LOAD_ACCOUNTS, getAccounts)];
            case 1:
                _a.sent();
                return [4 /*yield*/, effects_1.takeEvery(actions_1.accountInviteActions.ACCEPT_ACCOUNT_INVITE_FULFILLED, getAccounts)];
            case 2:
                _a.sent();
                return [4 /*yield*/, effects_1.takeEvery(actions_1.accountActions.LOAD_DEFAULT_ACCOUNT, getDefaultAccount)];
            case 3:
                _a.sent();
                return [4 /*yield*/, effects_1.takeEvery(actions_1.accountActions.SET_DEFAULT_ACCOUNT, setDefaultAccount)];
            case 4:
                _a.sent();
                return [4 /*yield*/, effects_1.takeEvery(actions_1.accountActions.CREATE_ACCOUNT, createAccount)];
            case 5:
                _a.sent();
                return [4 /*yield*/, effects_1.takeEvery(actions_1.accountActions.SHOW_ACCOUNT, showAccount)];
            case 6:
                _a.sent();
                return [4 /*yield*/, effects_1.takeEvery(actions_1.accountActions.LOAD_ACCOUNT_USERS, getAccountUsers)];
            case 7:
                _a.sent();
                return [4 /*yield*/, effects_1.takeEvery(actions_1.accountActions.DELETE_ACCOUNT_MEMBER, deleteAccountMember)];
            case 8:
                _a.sent();
                return [4 /*yield*/, effects_1.takeEvery(actions_1.accountActions.UPDATE_ACCOUNT_MEMBER, updateAccountMember)];
            case 9:
                _a.sent();
                return [4 /*yield*/, effects_1.takeEvery(actions_1.accountActions.UPDATE_ACCOUNT, updateAccount)];
            case 10:
                _a.sent();
                return [4 /*yield*/, effects_1.takeEvery(actions_1.accountActions.UPDATE_ACCOUNT_PHOTO, updateAccountPhoto)];
            case 11:
                _a.sent();
                return [4 /*yield*/, effects_1.takeEvery(actions_1.accountActions.GET_INVOICES, getInvoices)];
            case 12:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
exports.default = rootSaga;
