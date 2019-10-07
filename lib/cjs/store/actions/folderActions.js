"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var types = {
    GET_FOLDERS: '[folders] GET_FOLDERS',
    GET_FOLDERS_INITIAL_STATE: '[folders] GET_FOLDERS_INITIAL_STATE',
    GET_FOLDERS_LOADING: '[folders] GET_FOLDERS_LOADING',
    GET_FOLDERS_FULFILLED: '[folders] GET_FOLDERS_FULFILLED',
    GET_FOLDERS_REJECTED: '[folders] GET_FOLDERS_REJECTED',
    CREATE_FOLDER: '[folders] CREATE_FOLDER',
    CREATE_FOLDER_INITIAL_STATE: '[folders] CREATE_FOLDER_INITIAL_STATE',
    CREATE_FOLDER_LOADING: '[folders] CREATE_FOLDER_LOADING',
    CREATE_FOLDER_FULFILLED: '[folders] CREATE_FOLDER_FULFILLED',
    CREATE_FOLDER_REJECTED: '[folders] CREATE_FOLDER_REJECTED',
    UPDATE_FOLDER: '[folders] UPDATE_FOLDER',
    UPDATE_FOLDER_INITIAL_STATE: '[folders] UPDATE_FOLDER_INITIAL_STATE',
    UPDATE_FOLDER_LOADING: '[folders] UPDATE_FOLDER_LOADING',
    UPDATE_FOLDER_FULFILLED: '[folders] UPDATE_FOLDER_FULFILLED',
    UPDATE_FOLDER_REJECTED: '[folders] UPDATE_FOLDER_REJECTED',
};
exports.folderActions = __assign(__assign({}, types), { getFolders: function (query) {
        if (query === void 0) { query = {}; }
        return ({
            type: types.GET_FOLDERS,
            payload: null,
            query: query,
        });
    }, getFoldersInitialState: function () { return ({
        type: types.GET_FOLDERS_INITIAL_STATE,
        payload: null,
    }); }, getFoldersLoading: function () { return ({
        type: types.GET_FOLDERS_LOADING,
        payload: null,
    }); }, getFoldersFulfilled: function (response) { return ({
        type: types.GET_FOLDERS_FULFILLED,
        payload: response,
    }); }, getFoldersRejected: function (response) { return ({
        type: types.GET_FOLDERS_REJECTED,
        payload: response,
    }); }, createFolder: function (data, successCb, errorCb) {
        if (successCb === void 0) { successCb = undefined; }
        if (errorCb === void 0) { errorCb = undefined; }
        return ({
            type: types.CREATE_FOLDER,
            payload: null,
            data: data,
            successCb: successCb,
            errorCb: errorCb,
        });
    }, createFolderInitialState: function () { return ({
        type: types.CREATE_FOLDER_INITIAL_STATE,
        payload: null,
    }); }, createFolderLoading: function () { return ({
        type: types.CREATE_FOLDER_LOADING,
        payload: null,
    }); }, createFolderFulfilled: function (response) { return ({
        type: types.CREATE_FOLDER_FULFILLED,
        payload: response,
    }); }, createFolderRejected: function (response) { return ({
        type: types.CREATE_FOLDER_REJECTED,
        payload: response,
    }); }, updateFolder: function (id, data) { return ({
        type: types.UPDATE_FOLDER,
        payload: null,
        id: id,
        data: data,
    }); }, updateFolderInitialState: function () { return ({
        type: types.UPDATE_FOLDER_INITIAL_STATE,
        payload: null,
    }); }, updateFolderLoading: function () { return ({
        type: types.UPDATE_FOLDER_LOADING,
        payload: null,
    }); }, updateFolderFulfilled: function (response) { return ({
        type: types.UPDATE_FOLDER_FULFILLED,
        payload: response,
    }); }, updateFolderRejected: function (response) { return ({
        type: types.UPDATE_FOLDER_REJECTED,
        payload: response,
    }); } });
