import { fromJS } from 'immutable'
import { pageActions } from '../actions/index'
import stateUtility from '../../utilities/stateUtility'

const initialState = fromJS({
	list: stateUtility.getPaginationInitialState(),
})

export default (state = initialState, action) => {
	switch (action.type) {
		//  list
		case pageActions.GET_PAGES_LOADING:
			return state.merge({
				list: stateUtility.getPaginationLoading(),
			})
		case pageActions.GET_PAGES_FULFILLED:
			return state.merge({
				list: stateUtility.getPaginationFulfilled(action.payload.data),
			})
		case pageActions.GET_PAGES_REJECTED:
			return state.merge({
				list: stateUtility.getPaginationRejected(action.payload),
			})

		case pageActions.SET_PAGE_IMAGE:
			const { pageId, image } = action
			let pages = state.toJS().list
			const pageIndex = pages.data.findIndex((page) => page.id === pageId)
			pages.data[pageIndex].images.push(image.data)
			return state.merge({
				list: pages,
			})
		default:
			return state
	}
}
