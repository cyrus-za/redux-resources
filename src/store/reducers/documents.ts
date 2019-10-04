import { fromJS } from 'immutable'
import { documentActions } from '../actions'
import stateUtility from '../../utilities/stateUtility'

const initialState = fromJS({
	list: stateUtility.getPaginationInitialState(),
	download: stateUtility.getObserverInitialState(),
})

export default (state = initialState, action) => {
	switch (action.type) {
		//  list
		case documentActions.GET_DOCUMENTS_LOADING:
			return state.merge({
				list: stateUtility.getPaginationLoading(),
			})
		case documentActions.GET_DOCUMENTS_FULFILLED:
			return state.merge({
				list: stateUtility.getPaginationFulfilled(action.payload.data),
			})
		case documentActions.GET_DOCUMENTS_REJECTED:
			return state.merge({
				list: stateUtility.getPaginationRejected(action.payload),
			})

		//	download
		case documentActions.DOWNLOAD_DOCUMENT_LOADING:
			return state.merge({
				download: stateUtility.getObserverLoading(),
			})
		case documentActions.DOWNLOAD_DOCUMENT_FULFILLED:
			return state.merge({
				download: stateUtility.getObserverFulfilled(),
			})
		case documentActions.DOWNLOAD_DOCUMENT_REJECTED:
			return state.merge({
				download: stateUtility.getObserverRejected(action.payload),
			})

		default:
			return state
	}
}
