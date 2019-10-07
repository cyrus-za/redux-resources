import { fromJS } from 'immutable'
import { connectedServiceActions } from '../actions/index'
import stateUtility from '../../utilities/stateUtility'

const initialState = fromJS({
	list: stateUtility.getPaginationInitialState(),
	item: stateUtility.getItemInitialState(),
	connected: [],
	available: [],
})

export default (state = initialState, action) => {
	switch (action.type) {
		//  list
		case connectedServiceActions.SET_CONNECTED_SERVICES_INITIAL_STATE:
			return state.merge({
				list: stateUtility.getPaginationInitialState(),
			})
		case connectedServiceActions.SET_CONNECTED_SERVICES_LOADING:
			return state.merge({
				list: stateUtility.getPaginationLoading(),
			})
		case connectedServiceActions.SET_CONNECTED_SERVICES_FULFILLED:
			const listResponse = action.payload.data
			return state.merge({
				list: stateUtility.getPaginationFulfilled(listResponse),
			})
		case connectedServiceActions.SET_CONNECTED_SERVICES_REJECTED:
			return state.merge({
				list: stateUtility.getPaginationRejected(action.payload),
			})

		//	Create
		case connectedServiceActions.CREATE_CONNECTED_SERVICE:
			return state.merge({
				item: stateUtility.getItemInitialState(),
			})
		case connectedServiceActions.CREATE_CONNECTED_SERVICE_LOADING:
			return state.merge({
				item: stateUtility.getItemLoading(),
			})
		case connectedServiceActions.CREATE_CONNECTED_SERVICE_FULFILLED:
			return state.merge({
				item: stateUtility.getItemFulfilled(action.payload.data),
			})
		case connectedServiceActions.CREATE_CONNECTED_SERVICE_REJECTED:
			return state.merge({
				item: stateUtility.getItemRejected(action.payload),
			})

		//	UPDATE
		case connectedServiceActions.UPDATE_CONNECTED_SERVICE_LOADING:
			return state.merge({
				item: stateUtility.getItemLoading(),
			})
		case connectedServiceActions.UPDATE_CONNECTED_SERVICE_FULFILLED:
			return state.merge({
				item: stateUtility.getItemFulfilled(action.payload.data),
			})
		case connectedServiceActions.UPDATE_CONNECTED_SERVICE_REJECTED:
			return state.merge({
				item: stateUtility.getItemRejected(action.payload),
			})

		//	DELETE
		case connectedServiceActions.DELETE_CONNECTED_SERVICE_LOADING:
			return state.merge({
				item: stateUtility.getItemLoading(),
			})
		case connectedServiceActions.DELETE_CONNECTED_SERVICE_FULFILLED:
			return state.merge({
				item: stateUtility.getItemFulfilled(null),
			})
		case connectedServiceActions.DELETE_CONNECTED_SERVICE_REJECTED:
			return state.merge({
				item: stateUtility.getItemRejected(action.payload),
			})

		case connectedServiceActions.SET_CONNECTED_SERVICES:
			return state.merge({
				connected: action.payload,
			})
		case connectedServiceActions.SET_AVAILABLE_SERVICES:
			return state.merge({
				available: action.payload,
			})
		default:
			return state
	}
}
