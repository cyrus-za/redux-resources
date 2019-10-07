"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getPaginationFromLocalStorage = function (name) {
    var value = window.localStorage.getItem(name);
    if (value === null) {
        return getPaginationInitialState();
    }
    else {
        var parsed = JSON.parse(value);
        return getPaginationFulfilled(parsed);
    }
};
var getPaginationInitialState = function () {
    return {
        ui: {
            loaded: false,
            loading: false,
        },
        meta: {
            total: 0,
        },
        data: [],
        error: null,
    };
};
var getPaginationLoading = function () {
    return {
        ui: {
            loaded: false,
            loading: true,
        },
        meta: {
            total: 0,
        },
        data: [],
        error: null,
    };
};
var getPaginationFulfilled = function (data) {
    return {
        ui: {
            loaded: true,
            loading: false,
        },
        meta: {
            total: data.total,
            per_page: data.per_page,
            current_page: data.current_page,
            last_page: data.last_page,
            from: data.from,
            to: data.to,
        },
        data: data.data,
        error: null,
    };
};
var addItemToPagination = function (list, data, prepend) {
    if (prepend === void 0) { prepend = true; }
    return {
        ui: {
            loaded: true,
            loading: false,
        },
        meta: {
            total: list.meta.total + 1,
            per_page: list.meta.per_page,
            current_page: list.meta.current_page,
            last_page: list.meta.last_page,
            from: list.meta.from,
            to: list.meta.to,
        },
        data: prepend === true ? [data].concat(list.data) : list.data.concat([data]),
        error: null,
    };
};
var removeItemFromPagination = function (list, resourceId) {
    return {
        ui: {
            loaded: true,
            loading: false,
        },
        meta: {
            total: list.meta.total - 1,
            per_page: list.meta.per_page,
            current_page: list.meta.current_page,
            last_page: list.meta.last_page,
            from: list.meta.from,
            to: list.meta.to,
        },
        data: list.data.filter(function (item) { return item.id !== resourceId; }),
        error: null,
    };
};
var getPaginationRejected = function (error) {
    return {
        ui: {
            loaded: false,
            loading: false,
        },
        meta: {
            total: 0,
        },
        data: [],
        error: error,
    };
};
var getStringFromLocalStorage = function (name) {
    var value = window.localStorage.getItem(name);
    if (value === null) {
        return getItemInitialState();
    }
    else {
        return getItemFulfilled(value);
    }
};
var getItemFromLocalStorage = function (name) {
    var value = window.localStorage.getItem(name);
    if (value === null) {
        return getItemInitialState();
    }
    else {
        var parsed = JSON.parse(value);
        return getItemFulfilled(parsed);
    }
};
var getItemInitialState = function (data) {
    if (data === void 0) { data = null; }
    return {
        ui: {
            loaded: false,
            loading: false,
        },
        data: data,
        error: null,
    };
};
var getItemLoading = function (data) {
    if (data === void 0) { data = null; }
    return {
        ui: {
            loaded: false,
            loading: true,
        },
        data: data,
        error: null,
    };
};
var getItemFulfilled = function (data) {
    if (data === void 0) { data = {}; }
    return {
        ui: {
            loaded: true,
            loading: false,
        },
        data: data,
        error: null,
    };
};
var getItemRejected = function (error, data) {
    if (data === void 0) { data = null; }
    return {
        ui: {
            loaded: true,
            loading: false,
        },
        data: data,
        error: error,
    };
};
var getObserverInitialState = function () {
    return {
        ui: {
            loaded: false,
            loading: false,
        },
        error: null,
    };
};
var getObserverLoading = function () {
    return {
        ui: {
            loaded: false,
            loading: true,
        },
        error: null,
    };
};
var getObserverFulfilled = function () {
    return {
        ui: {
            loaded: true,
            loading: false,
        },
        error: null,
    };
};
var getObserverRejected = function (error) {
    return {
        ui: {
            loaded: true,
            loading: false,
        },
        error: error,
    };
};
exports.default = {
    getPaginationFromLocalStorage: getPaginationFromLocalStorage,
    getPaginationInitialState: getPaginationInitialState,
    getPaginationLoading: getPaginationLoading,
    getPaginationFulfilled: getPaginationFulfilled,
    addItemToPagination: addItemToPagination,
    removeItemFromPagination: removeItemFromPagination,
    getPaginationRejected: getPaginationRejected,
    getStringFromLocalStorage: getStringFromLocalStorage,
    getItemFromLocalStorage: getItemFromLocalStorage,
    getItemInitialState: getItemInitialState,
    getItemLoading: getItemLoading,
    getItemFulfilled: getItemFulfilled,
    getItemRejected: getItemRejected,
    getObserverInitialState: getObserverInitialState,
    getObserverLoading: getObserverLoading,
    getObserverFulfilled: getObserverFulfilled,
    getObserverRejected: getObserverRejected,
};
