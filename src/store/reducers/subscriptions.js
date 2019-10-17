import { fromJS } from 'immutable'
import { subscriptionActions } from '../actions'
import stateUtility from '../../utilities/stateUtility'

const initialState = fromJS({
	list: stateUtility.getPaginationInitialState(),
	item: stateUtility.getObserverInitialState(),
})

export default (state = initialState, action) => {
	//  list
	switch (action.type) {
		//  list
		case subscriptionActions.SET_SUBSCRIPTIONS_LOADING:
			return state.merge({
				list: stateUtility.getPaginationLoading(),
			})
		case subscriptionActions.SET_SUBSCRIPTIONS_FULFILLED:
			const listResponse = action.payload.data
			return state.merge({
				list: stateUtility.getPaginationFulfilled(listResponse),
			})
		case subscriptionActions.SET_SUBSCRIPTIONS_REJECTED:
			return state.merge({
				list: stateUtility.getPaginationRejected(action.payload),
			})

		//	create
		case subscriptionActions.SET_CREATE_SUBSCRIPTION_LOADING:
			return state.merge({
				item: stateUtility.getItemLoading(),
			})
		case subscriptionActions.SET_CREATE_SUBSCRIPTION_FULFILLED:
			return state.merge({
				item: stateUtility.getItemFulfilled(action.payload.data),
			})
		case subscriptionActions.SET_CREATE_SUBSCRIPTION_REJECTED:
			return state.merge({
				item: stateUtility.getItemRejected(action.payload),
			})

		//	update
		case subscriptionActions.SET_UPDATE_SUBSCRIPTION_LOADING:
			return state.merge({
				item: stateUtility.getItemLoading(),
			})
		case subscriptionActions.SET_UPDATE_SUBSCRIPTION_FULFILLED:
			return state.merge({
				item: stateUtility.getItemFulfilled(action.payload.data),
			})
		case subscriptionActions.SET_UPDATE_SUBSCRIPTION_REJECTED:
			return state.merge({
				item: stateUtility.getItemRejected(action.payload),
			})

		//	delete
		case subscriptionActions.SET_DELETE_SUBSCRIPTION_LOADING:
			return state.merge({
				item: stateUtility.getItemLoading(),
			})
		case subscriptionActions.SET_DELETE_SUBSCRIPTION_FULFILLED:
			return state.merge({
				item: stateUtility.getItemFulfilled({}),
			})
		case subscriptionActions.SET_DELETE_SUBSCRIPTION_REJECTED:
			return state.merge({
				item: stateUtility.getItemRejected(action.payload),
			})
		default:
			return state
	}
}
