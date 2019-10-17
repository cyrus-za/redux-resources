import { fromJS } from 'immutable'
import { planActions } from '../actions'
import stateUtility from '../../utilities/stateUtility'

const initialState = fromJS({
	list: stateUtility.getPaginationInitialState(),
})

export default (state = initialState, action) => {
	//  list
	switch (action.type) {
		//  list
		case planActions.SET_PLANS_INITIAL_STATE:
			return state.merge({
				list: stateUtility.getPaginationInitialState(),
			})
		case planActions.SET_PLANS_LOADING:
			return state.merge({
				list: stateUtility.getPaginationLoading(),
			})
		case planActions.SET_PLANS_FULFILLED:
			const listResponse = action.payload.data
			return state.merge({
				list: stateUtility.getPaginationFulfilled(listResponse),
			})
		case planActions.SET_PLANS_REJECTED:
			return state.merge({
				list: stateUtility.getPaginationRejected(action.payload),
			})
		default:
			return state
	}
}
