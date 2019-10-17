import { fromJS } from 'immutable'
import { fieldActions } from '../actions'
import stateUtility from '../../utilities/stateUtility'

const initialState = fromJS({
	list: stateUtility.getPaginationInitialState(),
	item: stateUtility.getItemInitialState(),
})

export default (state = initialState, action) => {
	switch (action.type) {
		//  list
		case fieldActions.GET_FIELDS_LOADING:
			return state.merge({
				list: stateUtility.getPaginationLoading(),
			})
		case fieldActions.GET_FIELDS_FULFILLED:
			return state.merge({
				list: stateUtility.getPaginationFulfilled(action.payload.data),
			})
		case fieldActions.GET_FIELDS_REJECTED:
			return state.merge({
				list: stateUtility.getPaginationRejected(action.payload),
			})

		//  item
		case fieldActions.SET_ITEM_LOADING:
			return state.merge({
				item: stateUtility.getItemLoading(),
			})
		case fieldActions.SET_ITEM_FULFILLED:
			return state.merge({
				item: stateUtility.getItemFulfilled(action.payload.data),
			})
		case fieldActions.SET_ITEM_REJECTED:
			return state.merge({
				item: stateUtility.getItemRejected(action.payload),
			})
		default:
			return state
	}
}
