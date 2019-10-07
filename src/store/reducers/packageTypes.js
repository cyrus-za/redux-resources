import { fromJS } from 'immutable'
import { packageTypeActions } from '../actions/index'
import stateUtility from '../../utilities/stateUtility'

const initialState = fromJS({
	list: stateUtility.getPaginationInitialState(),
})

export default (state = initialState, action) => {
	//  list
	switch (action.type) {
		case packageTypeActions.PACKAGE_TYPES_LOADING:
			return state.merge({
				list: stateUtility.getPaginationLoading(),
			})
		case packageTypeActions.PACKAGE_TYPES_FULFILLED:
			return state.merge({
				list: stateUtility.getPaginationFulfilled(action.payload.data),
			})
		case packageTypeActions.SET_PACKAGE_TYPES_REJECTED:
			return state.merge({
				list: stateUtility.getPaginationRejected(action.payload),
			})
		default:
			return state
	}
}
