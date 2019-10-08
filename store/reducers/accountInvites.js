import { fromJS } from 'immutable'
import { accountInviteActions } from '../actions'
import stateUtility from '../../utilities/stateUtility'

const initialState = fromJS({
	list: stateUtility.getPaginationInitialState(),

	getMyAccountInvites: stateUtility.getPaginationInitialState(),

	item: stateUtility.getItemInitialState(),

	deleteAccountInvite: stateUtility.getObserverInitialState(),

	acceptAccountInvite: stateUtility.getObserverInitialState(),

	createAccountInvite: stateUtility.getItemInitialState(),
})

export default (state = initialState, action) => {
	switch (action.type) {
		//  list
		case accountInviteActions.GET_ACCOUNT_INVITES_INITIAL_STATE:
			return state.merge({
				list: stateUtility.getPaginationInitialState(),
			})
		case accountInviteActions.GET_ACCOUNT_INVITES_LOADING:
			return state.merge({
				list: stateUtility.getPaginationLoading(),
			})
		case accountInviteActions.GET_ACCOUNT_INVITES_FULFILLED:
			const list = action.payload.data
			return state.merge({
				list: stateUtility.getPaginationFulfilled(list),
			})
		case accountInviteActions.GET_ACCOUNT_INVITES_REJECTED:
			return state.merge({
				list: stateUtility.getPaginationRejected(action.payload),
			})

		//  getMyAccountInvites
		case accountInviteActions.GET_MY_ACCOUNT_INVITES_INITIAL_STATE:
			return state.merge({
				getMyAccountInvites: stateUtility.getPaginationInitialState(),
			})
		case accountInviteActions.GET_MY_ACCOUNT_INVITES_LOADING:
			return state.merge({
				getMyAccountInvites: stateUtility.getPaginationLoading(),
			})
		case accountInviteActions.GET_MY_ACCOUNT_INVITES_FULFILLED:
			const getMyAccountInvites = action.payload.data
			return state.merge({
				getMyAccountInvites: stateUtility.getPaginationFulfilled(getMyAccountInvites),
			})
		case accountInviteActions.GET_MY_ACCOUNT_INVITES_REJECTED:
			return state.merge({
				getMyAccountInvites: stateUtility.getPaginationRejected(action.payload),
			})

		//  deleteAccountInvite
		case accountInviteActions.DELETE_ACCOUNT_INVITE_INITIAL_STATE:
			return state.merge({
				deleteAccountInvite: stateUtility.getObserverInitialState(),
			})
		case accountInviteActions.DELETE_ACCOUNT_INVITE_LOADING:
			return state.merge({
				deleteAccountInvite: stateUtility.getObserverLoading(),
			})
		case accountInviteActions.DELETE_ACCOUNT_INVITE_FULFILLED:
			return state.merge({
				deleteAccountInvite: stateUtility.getObserverFulfilled(),
			})
		case accountInviteActions.DELETE_ACCOUNT_INVITE_REJECTED:
			return state.merge({
				deleteAccountInvite: stateUtility.getObserverRejected(action.payload),
			})

		//  acceptAccountInvite
		case accountInviteActions.ACCEPT_ACCOUNT_INVITE_INITIAL_STATE:
			return state.merge({
				acceptAccountInvite: stateUtility.getObserverInitialState(),
			})
		case accountInviteActions.ACCEPT_ACCOUNT_INVITE_LOADING:
			return state.merge({
				acceptAccountInvite: stateUtility.getObserverLoading(),
			})
		case accountInviteActions.ACCEPT_ACCOUNT_INVITE_FULFILLED:
			const acceptedAccountInvite = action.payload.data
			return state.merge({
				acceptAccountInvite: stateUtility.getObserverFulfilled(),
				item: stateUtility.getItemFulfilled(acceptedAccountInvite),
			})
		case accountInviteActions.ACCEPT_ACCOUNT_INVITE_REJECTED:
			return state.merge({
				acceptAccountInvite: stateUtility.getObserverRejected(action.payload),
			})

		//  createAccountInvite
		case accountInviteActions.CREATE_ACCOUNT_INVITE_INITIAL_STATE:
			return state.merge({
				createAccountInvite: stateUtility.getItemInitialState(),
			})
		case accountInviteActions.CREATE_ACCOUNT_INVITE_LOADING:
			return state.merge({
				createAccountInvite: stateUtility.getItemLoading(),
			})
		case accountInviteActions.CREATE_ACCOUNT_INVITE_FULFILLED:
			const createResponse = action.payload.data
			return state.merge({
				createAccountInvite: stateUtility.getItemFulfilled(createResponse),
			})
		case accountInviteActions.CREATE_ACCOUNT_INVITE_REJECTED:
			return state.merge({
				createAccountInvite: stateUtility.getItemRejected(action.payload),
			})

		default:
			return state
	}
}
