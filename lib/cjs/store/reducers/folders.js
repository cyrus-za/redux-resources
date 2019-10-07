"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var immutable_1 = require("immutable");
var actions_1 = require("../actions");
var stateUtility_1 = require("../../utilities/stateUtility");
var initialState = immutable_1.fromJS({
    list: stateUtility_1.default.getPaginationInitialState(),
    item: stateUtility_1.default.getObserverInitialState(),
    createFolder: stateUtility_1.default.getObserverInitialState(),
    updateFolder: stateUtility_1.default.getObserverInitialState(),
});
exports.default = (function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        //  list
        case actions_1.folderActions.GET_FOLDERS_INITIAL_STATE:
            return state.merge({
                list: stateUtility_1.default.getPaginationInitialState(),
            });
        case actions_1.folderActions.GET_FOLDERS_LOADING:
            return state.merge({
                list: stateUtility_1.default.getPaginationLoading(),
            });
        case actions_1.folderActions.GET_FOLDERS_FULFILLED:
            var list = action.payload.data;
            return state.merge({
                list: stateUtility_1.default.getPaginationFulfilled(list),
            });
        case actions_1.folderActions.GET_FOLDERS_REJECTED:
            return state.merge({
                list: stateUtility_1.default.getPaginationRejected(action.payload),
            });
        //  createFolder
        case actions_1.folderActions.CREATE_FOLDER_INITIAL_STATE:
            return state.merge({
                createFolder: stateUtility_1.default.getObserverInitialState(),
            });
        case actions_1.folderActions.CREATE_FOLDER_LOADING:
            return state.merge({
                createFolder: stateUtility_1.default.getObserverLoading(),
            });
        case actions_1.folderActions.CREATE_FOLDER_FULFILLED:
            var createCardResponse = action.payload.data;
            return state.merge({
                createFolder: stateUtility_1.default.getObserverFulfilled(),
                item: stateUtility_1.default.getItemFulfilled(createCardResponse),
            });
        case actions_1.folderActions.CREATE_FOLDER_REJECTED:
            return state.merge({
                createFolder: stateUtility_1.default.getObserverRejected(action.payload),
            });
        //  updateFolder
        case actions_1.folderActions.UPDATE_FOLDER_INITIAL_STATE:
            return state.merge({
                updateFolder: stateUtility_1.default.getObserverInitialState(),
            });
        case actions_1.folderActions.UPDATE_FOLDER_LOADING:
            return state.merge({
                updateFolder: stateUtility_1.default.getObserverLoading(),
            });
        case actions_1.folderActions.UPDATE_FOLDER_FULFILLED:
            var updateFolderResponse = action.payload.data;
            return state.merge({
                updateFolder: stateUtility_1.default.getObserverFulfilled(),
                item: stateUtility_1.default.getItemFulfilled(updateFolderResponse),
            });
        case actions_1.folderActions.UPDATE_FOLDER_REJECTED:
            return state.merge({
                updateFolder: stateUtility_1.default.getObserverRejected(action.payload),
            });
        default:
            return state;
    }
});
