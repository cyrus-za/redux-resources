import { fromJS } from 'immutable'
import { folderActions } from '../actions'
import stateUtility from '../../utilities/stateUtility'

const initialState = fromJS({
	list: stateUtility.getPaginationInitialState(),

	item: stateUtility.getObserverInitialState(),

	createFolder: stateUtility.getObserverInitialState(),

	updateFolder: stateUtility.getObserverInitialState(),
})

export default (state = initialState, action) => {
	switch (action.type) {
		//  list
		case folderActions.GET_FOLDERS_INITIAL_STATE:
			return state.merge({
				list: stateUtility.getPaginationInitialState(),
			})
		case folderActions.GET_FOLDERS_LOADING:
			return state.merge({
				list: stateUtility.getPaginationLoading(),
			})
		case folderActions.GET_FOLDERS_FULFILLED:
			const list = action.payload.data
			return state.merge({
				list: stateUtility.getPaginationFulfilled(list),
			})
		case folderActions.GET_FOLDERS_REJECTED:
			return state.merge({
				list: stateUtility.getPaginationRejected(action.payload),
			})

		//  createFolder
		case folderActions.CREATE_FOLDER_INITIAL_STATE:
			return state.merge({
				createFolder: stateUtility.getObserverInitialState(),
			})
		case folderActions.CREATE_FOLDER_LOADING:
			return state.merge({
				createFolder: stateUtility.getObserverLoading(),
			})
		case folderActions.CREATE_FOLDER_FULFILLED:
			const createCardResponse = action.payload.data
			return state.merge({
				createFolder: stateUtility.getObserverFulfilled(),
				item: stateUtility.getItemFulfilled(createCardResponse),
			})
		case folderActions.CREATE_FOLDER_REJECTED:
			return state.merge({
				createFolder: stateUtility.getObserverRejected(action.payload),
			})

		//  updateFolder
		case folderActions.UPDATE_FOLDER_INITIAL_STATE:
			return state.merge({
				updateFolder: stateUtility.getObserverInitialState(),
			})
		case folderActions.UPDATE_FOLDER_LOADING:
			return state.merge({
				updateFolder: stateUtility.getObserverLoading(),
			})
		case folderActions.UPDATE_FOLDER_FULFILLED:
			const updateFolderResponse = action.payload.data
			return state.merge({
				updateFolder: stateUtility.getObserverFulfilled(),
				item: stateUtility.getItemFulfilled(updateFolderResponse),
			})
		case folderActions.UPDATE_FOLDER_REJECTED:
			return state.merge({
				updateFolder: stateUtility.getObserverRejected(action.payload),
			})

		default:
			return state
	}
}
