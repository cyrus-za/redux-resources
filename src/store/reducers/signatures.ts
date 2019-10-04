import { fromJS } from 'immutable'
import { signatureActions } from '../actions'
import stateUtility from '../../utilities/stateUtility'

const initialState = fromJS({
	list: stateUtility.getPaginationInitialState(),
	item: stateUtility.getItemInitialState(),
})

export default (state = initialState, action) => {
	//  list
	switch (action.type) {
		case signatureActions.SIGNATURES_LOADING:
			return state.merge({
				list: stateUtility.getPaginationLoading(),
			})
		case signatureActions.SIGNATURES_FULFILLED:
			return state.merge({
				list: stateUtility.getPaginationFulfilled(action.payload.data),
			})
		case signatureActions.SET_SIGNATURES_REJECTED:
			return state.merge({
				list: stateUtility.getPaginationRejected(action.payload),
			})

		//  create
		case signatureActions.CREATE_SIGNATURE_LOADING:
			return state.merge({
				item: stateUtility.getObserverLoading(),
			})
		case signatureActions.CREATE_SIGNATURE_FULFILLED:
			return state.merge({
				item: stateUtility.getItemFulfilled(action.payload.data),
			})
		case signatureActions.CREATE_SIGNATURE_REJECTED:
			return state.merge({
				item: stateUtility.getObserverRejected(action.payload),
			})

		default:
			return state
	}
}
