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
var accounts_1 = require("./accounts");
var selectors_1 = require("../selectors");
function getAuthUser() {
    var meResponse, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 5, , 8]);
                return [4 /*yield*/, effects_1.put(actions_1.authActions.authUserLoading())];
            case 1:
                _a.sent();
                return [4 /*yield*/, effects_1.call(api_1.userApi.me)];
            case 2:
                meResponse = _a.sent();
                return [4 /*yield*/, effects_1.put(actions_1.authActions.authUserData(meResponse.data))];
            case 3:
                _a.sent();
                return [4 /*yield*/, effects_1.put(actions_1.authActions.authUserLoaded())];
            case 4:
                _a.sent();
                return [3 /*break*/, 8];
            case 5:
                error_1 = _a.sent();
                return [4 /*yield*/, effects_1.put(actions_1.authActions.authUserError(error_1))];
            case 6:
                _a.sent();
                return [4 /*yield*/, effects_1.put(actions_1.authActions.authUserNotLoaded())];
            case 7:
                _a.sent();
                return [3 /*break*/, 8];
            case 8: return [2 /*return*/];
        }
    });
}
exports.getAuthUser = getAuthUser;
function authUserInitialState() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, effects_1.put(actions_1.authActions.authUserData(null))];
            case 1:
                _a.sent();
                return [4 /*yield*/, effects_1.put(actions_1.authActions.authUserError(null))];
            case 2:
                _a.sent();
                return [4 /*yield*/, effects_1.put(actions_1.authActions.authUserNotLoaded())];
            case 3:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
exports.authUserInitialState = authUserInitialState;
function login(_a) {
    var userResponse, _b, error_2;
    var user = _a.user, _c = _a.provider, provider = _c === void 0 ? null : _c, _d = _a.access_token, access_token = _d === void 0 ? null : _d, _e = _a.token_secret, token_secret = _e === void 0 ? null : _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _f.trys.push([0, 9, , 12]);
                return [4 /*yield*/, effects_1.put(actions_1.authActions.createAccessTokenInitialState())];
            case 1:
                _f.sent();
                return [4 /*yield*/, effects_1.put(actions_1.authActions.createAccessToken())];
            case 2:
                _f.sent();
                return [4 /*yield*/, effects_1.put(actions_1.authActions.createAccessTokenLoading())];
            case 3:
                _f.sent();
                if (!(user !== undefined)) return [3 /*break*/, 5];
                return [4 /*yield*/, effects_1.call(api_1.oauthApi.createAccessToken, user)];
            case 4:
                _b = _f.sent();
                return [3 /*break*/, 7];
            case 5: return [4 /*yield*/, effects_1.call(api_1.oauthApi.createSocialAccessToken, provider, access_token, token_secret)];
            case 6:
                _b = _f.sent();
                _f.label = 7;
            case 7:
                userResponse = _b;
                return [4 /*yield*/, effects_1.put(actions_1.authActions.createAccessTokenFulfilled(userResponse))];
            case 8:
                _f.sent();
                return [3 /*break*/, 12];
            case 9:
                error_2 = _f.sent();
                return [4 /*yield*/, effects_1.put(actions_1.authActions.createAccessTokenRejected(error_2))];
            case 10:
                _f.sent();
                return [4 /*yield*/, effects_1.put(actions_1.notificationActions.displaySnackbarMessage(error_2.message, 2000))];
            case 11:
                _f.sent();
                return [3 /*break*/, 12];
            case 12: return [2 /*return*/];
        }
    });
}
exports.login = login;
function logout(_a) {
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                //  auth
                window.localStorage.removeItem('accessToken');
                return [4 /*yield*/, effects_1.put(actions_1.authActions.createAccessTokenInitialState())];
            case 1:
                _b.sent();
                window.localStorage.removeItem('userMeta');
                return [4 /*yield*/, effects_1.put(actions_1.authActions.authUserInitialState())];
            case 2:
                _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.authActions.authMetaInitialState())
                    //  accounts
                ];
            case 3:
                _b.sent();
                //  accounts
                window.localStorage.removeItem('defaultAccount');
                window.localStorage.removeItem('accountList');
                return [4 /*yield*/, effects_1.put(actions_1.accountActions.getDefaultAccountInitialState())];
            case 4:
                _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.accountActions.accountsInitialState())
                    // disconnect from pusher
                ];
            case 5:
                _b.sent();
                // disconnect from pusher
                return [4 /*yield*/, effects_1.put(actions_1.notificationActions.disconnectFromNotificationService())];
            case 6:
                // disconnect from pusher
                _b.sent();
                return [2 /*return*/];
        }
    });
}
exports.logout = logout;
function getAuthMeta() {
    var state, user, meResponse, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 6, , 8]);
                return [4 /*yield*/, effects_1.select()];
            case 1:
                state = _a.sent();
                user = selectors_1.authUser(state);
                return [4 /*yield*/, effects_1.put(actions_1.authActions.authMetaInitialState())];
            case 2:
                _a.sent();
                return [4 /*yield*/, effects_1.put(actions_1.authActions.authMetaLoading())];
            case 3:
                _a.sent();
                return [4 /*yield*/, effects_1.call(api_1.userApi.getUserMeta, user.data.id)];
            case 4:
                meResponse = _a.sent();
                return [4 /*yield*/, effects_1.put(actions_1.authActions.authMetaFulfilled(meResponse))];
            case 5:
                _a.sent();
                return [3 /*break*/, 8];
            case 6:
                error_3 = _a.sent();
                return [4 /*yield*/, effects_1.put(actions_1.authActions.authMetaRejected(error_3))];
            case 7:
                _a.sent();
                return [3 /*break*/, 8];
            case 8: return [2 /*return*/];
        }
    });
}
exports.getAuthMeta = getAuthMeta;
function update(_a) {
    var userResponse, error_4;
    var id = _a.id, user = _a.user;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 6, , 8]);
                return [4 /*yield*/, effects_1.put(actions_1.authActions.updateAuthUserInitialState())];
            case 1:
                _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.authActions.updateAuthUserLoading())];
            case 2:
                _b.sent();
                return [4 /*yield*/, effects_1.call(api_1.userApi.updateUser, id, user)];
            case 3:
                userResponse = _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.authActions.updateAuthUserFulfilled(userResponse))];
            case 4:
                _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.notificationActions.displaySnackbarMessage('Profile updated', 2000))];
            case 5:
                _b.sent();
                return [3 /*break*/, 8];
            case 6:
                error_4 = _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.authActions.updateAuthUserRejected(error_4))];
            case 7:
                _b.sent();
                return [3 /*break*/, 8];
            case 8: return [2 /*return*/];
        }
    });
}
exports.update = update;
function create(_a) {
    var userResponse, error_5;
    var user = _a.user;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 6, , 8]);
                return [4 /*yield*/, effects_1.put(actions_1.authActions.createUserInitialState())];
            case 1:
                _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.authActions.createUserLoading())];
            case 2:
                _b.sent();
                return [4 /*yield*/, effects_1.call(api_1.userApi.createUser, user)];
            case 3:
                userResponse = _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.authActions.createUserFulfilled(userResponse, user))];
            case 4:
                _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.notificationActions.displaySnackbarMessage('User registered', 4000))];
            case 5:
                _b.sent();
                return [3 /*break*/, 8];
            case 6:
                error_5 = _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.authActions.createUserRejected(error_5))];
            case 7:
                _b.sent();
                return [3 /*break*/, 8];
            case 8: return [2 /*return*/];
        }
    });
}
exports.create = create;
function updatePhoto(_a) {
    var response, error_6;
    var id = _a.id, payload = _a.payload, successCb = _a.successCb, errorCb = _a.errorCb;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 6, , 8]);
                return [4 /*yield*/, effects_1.put(actions_1.authActions.updateAuthPhotoInitialState())];
            case 1:
                _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.authActions.updateAuthPhotoLoading())];
            case 2:
                _b.sent();
                return [4 /*yield*/, effects_1.call(api_1.userApi.updatePicture, id, payload)];
            case 3:
                response = _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.authActions.updateAuthPhotoFulfilled(response))];
            case 4:
                _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.notificationActions.displaySnackbarMessage('Profile photo updated!', 2000))];
            case 5:
                _b.sent();
                successCb !== undefined && successCb();
                return [3 /*break*/, 8];
            case 6:
                error_6 = _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.authActions.updateAuthPhotoRejected(error_6))];
            case 7:
                _b.sent();
                errorCb !== undefined && errorCb();
                return [3 /*break*/, 8];
            case 8: return [2 /*return*/];
        }
    });
}
function loginSaga() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, effects_1.takeEvery(actions_1.authActions.LOG_USER_IN, login)];
            case 1:
                _a.sent();
                return [4 /*yield*/, effects_1.takeEvery(actions_1.authActions.CREATE_SOCIAL_ACCESS_TOKEN, login)];
            case 2:
                _a.sent();
                return [4 /*yield*/, effects_1.takeEvery(actions_1.authActions.CREATE_AUTH_ACCESS_TOKEN_FULFILLED, accounts_1.getAccounts)];
            case 3:
                _a.sent();
                return [4 /*yield*/, effects_1.takeEvery(actions_1.authActions.CREATE_AUTH_ACCESS_TOKEN_FULFILLED, accounts_1.getDefaultAccount)];
            case 4:
                _a.sent();
                return [4 /*yield*/, effects_1.takeEvery(actions_1.authActions.CREATE_AUTH_ACCESS_TOKEN_FULFILLED, getAuthUser)];
            case 5:
                _a.sent();
                return [4 /*yield*/, effects_1.takeEvery(actions_1.authActions.AUTH_USER_LOADED, getAuthMeta)];
            case 6:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
exports.loginSaga = loginSaga;
function logoutSaga() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, effects_1.takeEvery(actions_1.authActions.LOG_USER_OUT, logout)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
exports.logoutSaga = logoutSaga;
function rootSaga() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, effects_1.takeEvery(actions_1.authActions.AUTH_USER_INITIAL_STATE, authUserInitialState)];
            case 1:
                _a.sent();
                return [4 /*yield*/, effects_1.takeEvery(actions_1.authActions.UPDATE_AUTH_USER, update)];
            case 2:
                _a.sent();
                return [4 /*yield*/, effects_1.takeEvery(actions_1.authActions.CREATE_USER, create)];
            case 3:
                _a.sent();
                return [4 /*yield*/, effects_1.takeEvery(actions_1.authActions.CREATE_USER_FULFILLED, login)];
            case 4:
                _a.sent();
                return [4 /*yield*/, effects_1.takeEvery(actions_1.authActions.UPDATE_AUTH_PHOTO, updatePhoto)];
            case 5:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
exports.default = rootSaga;