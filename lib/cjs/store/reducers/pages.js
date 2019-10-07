"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var immutable_1 = require("immutable");
var actions_1 = require("../actions");
var stateUtility_1 = require("../../utilities/stateUtility");
var initialState = immutable_1.fromJS({
    list: stateUtility_1.default.getPaginationInitialState(),
});
exports.default = (function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        //  list
        case actions_1.pageActions.GET_PAGES_LOADING:
            return state.merge({
                list: stateUtility_1.default.getPaginationLoading(),
            });
        case actions_1.pageActions.GET_PAGES_FULFILLED:
            return state.merge({
                list: stateUtility_1.default.getPaginationFulfilled(action.payload.data),
            });
        case actions_1.pageActions.GET_PAGES_REJECTED:
            return state.merge({
                list: stateUtility_1.default.getPaginationRejected(action.payload),
            });
        case actions_1.pageActions.SET_PAGE_IMAGE:
            var pageId_1 = action.pageId, image = action.image;
            var pages = state.toJS().list;
            var pageIndex = pages.data.findIndex(function (page) { return page.id === pageId_1; });
            pages.data[pageIndex].images.push(image.data);
            return state.merge({
                list: pages,
            });
        default:
            return state;
    }
});
