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
    GET_CARDS: '[cards] GET_CARDS',
    GET_CARDS_INITIAL_STATE: '[cards] GET_CARDS_INITIAL_STATE',
    GET_CARDS_LOADING: '[cards] GET_CARDS_LOADING',
    GET_CARDS_FULFILLED: '[cards] GET_CARDS_FULFILLED',
    GET_CARDS_REJECTED: '[cards] GET_CARDS_REJECTED',
    CREATE_CARD: '[cards] CREATE_CARD',
    CREATE_CARD_INITIAL_STATE: '[cards] CREATE_CARD_INITIAL_STATE',
    CREATE_CARD_LOADING: '[cards] CREATE_CARD_LOADING',
    CREATE_CARD_FULFILLED: '[cards] CREATE_CARD_FULFILLED',
    CREATE_CARD_REJECTED: '[cards] CREATE_CARD_REJECTED',
    SHOW_CARD: '[cards] SHOW_CARD',
    SHOW_CARD_INITIAL_STATE: '[cards] SHOW_CARD_INITIAL_STATE',
    SHOW_CARD_LOADING: '[cards] SHOW_CARD_LOADING',
    SHOW_CARD_FULFILLED: '[cards] SHOW_CARD_FULFILLED',
    SHOW_CARD_REJECTED: '[cards] SHOW_CARD_REJECTED',
    UPDATE_CARD: '[cards] UPDATE_CARD',
    UPDATE_CARD_INITIAL_STATE: '[cards] UPDATE_CARD_INITIAL_STATE',
    UPDATE_CARD_LOADING: '[cards] UPDATE_CARD_LOADING',
    UPDATE_CARD_FULFILLED: '[cards] UPDATE_CARD_FULFILLED',
    UPDATE_CARD_REJECTED: '[cards] UPDATE_CARD_REJECTED',
    DELETE_CARD: '[cards] DELETE_CARD',
    DELETE_CARD_INITIAL_STATE: '[cards] DELETE_CARD_INITIAL_STATE',
    DELETE_CARD_LOADING: '[cards] DELETE_CARD_LOADING',
    DELETE_CARD_FULFILLED: '[cards] DELETE_CARD_FULFILLED',
    DELETE_CARD_REJECTED: '[cards] DELETE_CARD_REJECTED',
    SET_DEFAULT_CARD: '[cards] SET_DEFAULT_CARD',
    SET_DEFAULT_CARD_INITIAL_STATE: '[cards] SET_DEFAULT_CARD_INITIAL_STATE',
    SET_DEFAULT_CARD_LOADING: '[cards] SET_DEFAULT_CARD_LOADING',
    SET_DEFAULT_CARD_FULFILLED: '[cards] SET_DEFAULT_CARD_FULFILLED',
    SET_DEFAULT_CARD_REJECTED: '[cards] SET_DEFAULT_CARD_REJECTED',
};
exports.cardActions = __assign(__assign({}, types), { getCards: function (query) { return ({
        type: types.GET_CARDS,
        payload: null,
        query: query,
    }); }, getCardsInitialState: function () { return ({
        type: types.GET_CARDS_INITIAL_STATE,
        payload: null,
    }); }, getCardsLoading: function () { return ({
        type: types.GET_CARDS_LOADING,
        payload: null,
    }); }, getCardsFulfilled: function (response) { return ({
        type: types.GET_CARDS_FULFILLED,
        payload: response,
    }); }, getCardsRejected: function (response) { return ({
        type: types.GET_CARDS_REJECTED,
        payload: response,
    }); }, createCard: function (card, successCb, errorCb) { return ({
        type: types.CREATE_CARD,
        payload: null,
        card: card,
        successCb: successCb,
        errorCb: errorCb,
    }); }, createCardInitialState: function () { return ({
        type: types.CREATE_CARD_INITIAL_STATE,
        payload: null,
    }); }, createCardLoading: function () { return ({
        type: types.CREATE_CARD_LOADING,
        payload: null,
    }); }, createCardFulfilled: function (response) { return ({
        type: types.CREATE_CARD_FULFILLED,
        payload: response,
    }); }, createCardRejected: function (response) { return ({
        type: types.CREATE_CARD_REJECTED,
        payload: response,
    }); }, showCard: function (id) { return ({
        type: types.SHOW_CARD,
        payload: null,
        id: id,
    }); }, showCardInitialState: function () { return ({
        type: types.SHOW_CARD_INITIAL_STATE,
        payload: null,
    }); }, showCardLoading: function () { return ({
        type: types.SHOW_CARD_LOADING,
        payload: null,
    }); }, showCardFulfilled: function (response) { return ({
        type: types.SHOW_CARD_FULFILLED,
        payload: response,
    }); }, showCardRejected: function (response) { return ({
        type: types.SHOW_CARD_REJECTED,
        payload: response,
    }); }, updateCard: function (id, card, successCb, errorCb) { return ({
        type: types.UPDATE_CARD,
        payload: null,
        id: id,
        card: card,
        successCb: successCb,
        errorCb: errorCb,
    }); }, updateCardInitialState: function () { return ({
        type: types.UPDATE_CARD_INITIAL_STATE,
        payload: null,
    }); }, updateCardLoading: function () { return ({
        type: types.UPDATE_CARD_LOADING,
        payload: null,
    }); }, updateCardFulfilled: function (response) { return ({
        type: types.UPDATE_CARD_FULFILLED,
        payload: response,
    }); }, updateCardRejected: function (response) { return ({
        type: types.UPDATE_CARD_REJECTED,
        payload: response,
    }); }, deleteCard: function (card, successCb, errorCb) { return ({
        type: types.DELETE_CARD,
        payload: null,
        card: card,
        successCb: successCb,
        errorCb: errorCb,
    }); }, deleteCardInitialState: function () { return ({
        type: types.DELETE_CARD_INITIAL_STATE,
        payload: null,
    }); }, deleteCardLoading: function () { return ({
        type: types.DELETE_CARD_LOADING,
        payload: null,
    }); }, deleteCardFulfilled: function (response) { return ({
        type: types.DELETE_CARD_FULFILLED,
        payload: response,
    }); }, deleteCardRejected: function (response) { return ({
        type: types.DELETE_CARD_REJECTED,
        payload: response,
    }); }, setDefaultCard: function (card) { return ({
        type: types.SET_DEFAULT_CARD,
        payload: null,
        card: card,
    }); }, setDefaultCardInitialState: function () { return ({
        type: types.SET_DEFAULT_CARD_INITIAL_STATE,
        payload: null,
    }); }, setDefaultCardLoading: function () { return ({
        type: types.SET_DEFAULT_CARD_LOADING,
        payload: null,
    }); }, setDefaultCardFulfilled: function (response) { return ({
        type: types.SET_DEFAULT_CARD_FULFILLED,
        payload: response,
    }); }, setDefaultCardRejected: function (response) { return ({
        type: types.SET_DEFAULT_CARD_REJECTED,
        payload: response,
    }); } });
