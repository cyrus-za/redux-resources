"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var immutable_1 = require("immutable");
var actions_1 = require("../actions");
var stateUtility_1 = require("../../utilities/stateUtility");
var initialState = immutable_1.fromJS({
    list: stateUtility_1.default.getPaginationInitialState(),
    item: stateUtility_1.default.getObserverInitialState(),
    createCard: stateUtility_1.default.getObserverInitialState(),
    updateCard: stateUtility_1.default.getObserverInitialState(),
    deleteCard: stateUtility_1.default.getObserverInitialState(),
    setDefaultCard: stateUtility_1.default.getObserverInitialState(),
});
exports.default = (function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        //  list
        case actions_1.cardActions.GET_CARDS_INITIAL_STATE:
            return state.merge({
                list: stateUtility_1.default.getPaginationInitialState(),
            });
        case actions_1.cardActions.GET_CARDS_LOADING:
            return state.merge({
                list: stateUtility_1.default.getPaginationLoading(),
            });
        case actions_1.cardActions.GET_CARDS_FULFILLED:
            var list = action.payload.data;
            return state.merge({
                list: stateUtility_1.default.getPaginationFulfilled(list),
            });
        case actions_1.cardActions.GET_CARDS_REJECTED:
            return state.merge({
                list: stateUtility_1.default.getPaginationRejected(action.payload),
            });
        //  createCard
        case actions_1.cardActions.CREATE_CARD_INITIAL_STATE:
            return state.merge({
                createCard: stateUtility_1.default.getObserverInitialState(),
            });
        case actions_1.cardActions.CREATE_CARD_LOADING:
            return state.merge({
                createCard: stateUtility_1.default.getObserverLoading(),
            });
        case actions_1.cardActions.CREATE_CARD_FULFILLED:
            var createCardResponse = action.payload.data;
            return state.merge({
                createCard: stateUtility_1.default.getObserverFulfilled(),
                item: stateUtility_1.default.getItemFulfilled(createCardResponse),
            });
        case actions_1.cardActions.CREATE_CARD_REJECTED:
            return state.merge({
                createCard: stateUtility_1.default.getObserverRejected(action.payload),
            });
        //  showCard
        case actions_1.cardActions.SHOW_CARD_INITIAL_STATE:
            return state.merge({
                showCard: stateUtility_1.default.getObserverInitialState(),
            });
        case actions_1.cardActions.SHOW_CARD_LOADING:
            return state.merge({
                showCard: stateUtility_1.default.getObserverLoading(),
            });
        case actions_1.cardActions.SHOW_CARD_FULFILLED:
            var showCardResponse = action.payload.data;
            return state.merge({
                showCard: stateUtility_1.default.getObserverFulfilled(),
                item: stateUtility_1.default.getItemFulfilled(showCardResponse),
            });
        case actions_1.cardActions.SHOW_CARD_REJECTED:
            return state.merge({
                showCard: stateUtility_1.default.getObserverRejected(action.payload),
            });
        //  updateCard
        case actions_1.cardActions.UPDATE_CARD_INITIAL_STATE:
            return state.merge({
                updateCard: stateUtility_1.default.getObserverInitialState(),
            });
        case actions_1.cardActions.UPDATE_CARD_LOADING:
            return state.merge({
                updateCard: stateUtility_1.default.getObserverLoading(),
            });
        case actions_1.cardActions.UPDATE_CARD_FULFILLED:
            var updateCardResponse = action.payload.data;
            return state.merge({
                updateCard: stateUtility_1.default.getObserverFulfilled(),
                item: stateUtility_1.default.getItemFulfilled(updateCardResponse),
            });
        case actions_1.cardActions.UPDATE_CARD_REJECTED:
            return state.merge({
                updateCard: stateUtility_1.default.getObserverRejected(action.payload),
            });
        //  deleteCard
        case actions_1.cardActions.DELETE_CARD_INITIAL_STATE:
            return state.merge({
                deleteCard: stateUtility_1.default.getObserverInitialState(),
            });
        case actions_1.cardActions.DELETE_CARD_LOADING:
            return state.merge({
                deleteCard: stateUtility_1.default.getObserverLoading(),
            });
        case actions_1.cardActions.DELETE_CARD_FULFILLED:
            return state.merge({
                deleteCard: stateUtility_1.default.getObserverFulfilled(),
            });
        case actions_1.cardActions.DELETE_CARD_REJECTED:
            return state.merge({
                deleteCard: stateUtility_1.default.getObserverRejected(action.payload),
            });
        //  setDefaultCard
        case actions_1.cardActions.SET_DEFAULT_CARD_INITIAL_STATE:
            return state.merge({
                setDefaultCard: stateUtility_1.default.getObserverInitialState(),
            });
        case actions_1.cardActions.SET_DEFAULT_CARD_LOADING:
            return state.merge({
                setDefaultCard: stateUtility_1.default.getObserverLoading(),
            });
        case actions_1.cardActions.SET_DEFAULT_CARD_FULFILLED:
            var setDefaultCardResponse = action.payload.data;
            return state.merge({
                setDefaultCard: stateUtility_1.default.getObserverFulfilled(),
                item: stateUtility_1.default.getItemFulfilled(setDefaultCardResponse),
            });
        case actions_1.cardActions.SET_DEFAULT_CARD_REJECTED:
            return state.merge({
                setDefaultCard: stateUtility_1.default.getObserverRejected(action.payload),
            });
        default:
            return state;
    }
});
