import { fromJS } from 'immutable'
import { authActions } from '../actions/index'
import stateUtility from '../../utilities/stateUtility'

const initialState = fromJS({
	accessToken: stateUtility.getStringFromLocalStorage('accessToken'),

	user: stateUtility.getItemFromLocalStorage('authUser'),

	meta: stateUtility.getItemFromLocalStorage('userMeta'),

	updateUser: stateUtility.getObserverInitialState(),

	createUser: stateUtility.getObserverInitialState(),

	updatePhoto: stateUtility.getObserverInitialState(),
})

export default (state = initialState, action) => {
	//  log user out
	switch (action.type) {
		case authActions.AUTH_USER_LOADING:
			return state.merge({
				user: {
					...state.toJS().user,
					ui: { loading: true, loaded: false },
				},
			})
		case authActions.AUTH_USER_LOADED:
			return state.merge({
				user: {
					...state.toJS().user,
					ui: { loading: false, loaded: true },
				},
			})
		case authActions.AUTH_USER_NOT_LOADED:
			return state.merge({
				user: {
					...state.toJS().user,
					ui: { loading: false, loaded: false },
				},
			})
		case authActions.AUTH_USER_DATA:
			action.payload === null
				? window.localStorage.removeItem('authUser')
				: window.localStorage.setItem('authUser', JSON.stringify(action.payload))
			return state.merge({
				user: {
					...state.toJS().user,
					data: action.payload,
				},
			})
		case authActions.AUTH_USER_ERROR:
			return state.merge({
				user: {
					...state.toJS().user,
					data: action.payload,
				},
			})

		//  auth access token
		case authActions.CREATE_AUTH_ACCESS_TOKEN_INITIAL_STATE:
			return state.merge({
				accessToken: stateUtility.getItemInitialState(),
			})
		case authActions.CREATE_AUTH_ACCESS_TOKEN_LOADING:
			return state.merge({
				accessToken: stateUtility.getItemLoading(),
			})
		case authActions.CREATE_AUTH_ACCESS_TOKEN_FULFILLED:
			const access_token = action.payload.data.access_token
			window.localStorage.setItem('accessToken', access_token)
			return state.merge({
				accessToken: stateUtility.getItemFulfilled(access_token),
			})
		case authActions.CREATE_AUTH_ACCESS_TOKEN_REJECTED:
			return state.merge({
				accessToken: stateUtility.getItemRejected(action.payload),
			})

		//  meta
		case authActions.LOAD_AUTH_USER_META_INITIAL_STATE:
			return state.merge({
				meta: stateUtility.getItemInitialState(),
			})
		case authActions.LOAD_AUTH_USER_META_LOADING:
			return state.merge({
				meta: stateUtility.getItemLoading(),
			})
		case authActions.LOAD_AUTH_USER_META_FULFILLED:
			const userMeta = action.payload.data
			window.localStorage.setItem('userMeta', JSON.stringify(userMeta))
			return state.merge({
				meta: stateUtility.getItemFulfilled(userMeta),
			})
		case authActions.LOAD_AUTH_USER_META_REJECTED:
			return state.merge({
				meta: stateUtility.getItemRejected(action.payload),
			})

		//  updateUser
		case authActions.UPDATE_AUTH_USER_INITIAL_STATE:
			return state.merge({
				updateUser: stateUtility.getObserverInitialState(),
			})
		case authActions.UPDATE_AUTH_USER_LOADING:
			return state.merge({
				updateUser: stateUtility.getObserverLoading(),
			})
		case authActions.UPDATE_AUTH_USER_FULFILLED:
			const updateUserResponse = action.payload.data
			window.localStorage.setItem('authUser', JSON.stringify(updateUserResponse))
			return state.merge({
				updateUser: stateUtility.getObserverFulfilled(),
				user: stateUtility.getItemFulfilled(updateUserResponse),
			})
		case authActions.UPDATE_AUTH_USER_REJECTED:
			return state.merge({
				updateUser: stateUtility.getObserverRejected(action.payload),
			})

		//  createUser
		case authActions.CREATE_USER_INITIAL_STATE:
			return state.merge({
				createUser: stateUtility.getObserverInitialState(),
			})
		case authActions.CREATE_USER_LOADING:
			return state.merge({
				createUser: stateUtility.getObserverLoading(),
			})
		case authActions.CREATE_USER_FULFILLED:
			return state.merge({
				createUser: stateUtility.getObserverFulfilled(),
			})
		case authActions.CREATE_USER_REJECTED:
			return state.merge({
				createUser: stateUtility.getObserverRejected(action.payload),
			})

		//  updatePhoto
		case authActions.UPDATE_AUTH_PHOTO_INITIAL_STATE:
			return state.merge({
				updatePhoto: stateUtility.getObserverInitialState(),
			})
		case authActions.UPDATE_AUTH_PHOTO_LOADING:
			return state.merge({
				updatePhoto: stateUtility.getObserverLoading(),
			})
		case authActions.UPDATE_AUTH_PHOTO_FULFILLED:
			return state.merge({
				updatePhoto: stateUtility.getObserverFulfilled(),
			})
		case authActions.UPDATE_AUTH_PHOTO_REJECTED:
			return state.merge({
				updatePhoto: stateUtility.getObserverRejected(action.payload),
			})
		default:
			return state
	}
}
