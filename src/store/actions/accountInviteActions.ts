const types = {
	GET_MY_ACCOUNT_INVITES: '[account_invites] GET_MY_ACCOUNT_INVITES',
	GET_MY_ACCOUNT_INVITES_INITIAL_STATE: '[account_invites] GET_MY_ACCOUNT_INVITES_INITIAL_STATE',
	GET_MY_ACCOUNT_INVITES_LOADING: '[account_invites] GET_MY_ACCOUNT_INVITES_LOADING',
	GET_MY_ACCOUNT_INVITES_FULFILLED: '[account_invites] GET_MY_ACCOUNT_INVITES_FULFILLED',
	GET_MY_ACCOUNT_INVITES_REJECTED: '[account_invites] GET_MY_ACCOUNT_INVITES_REJECTED',
	GET_ACCOUNT_INVITES: '[account_invites] GET_ACCOUNT_INVITES',
	GET_ACCOUNT_INVITES_INITIAL_STATE: '[account_invites] GET_ACCOUNT_INVITES_INITIAL_STATE',
	GET_ACCOUNT_INVITES_LOADING: '[account_invites] GET_ACCOUNT_INVITES_LOADING',
	GET_ACCOUNT_INVITES_FULFILLED: '[account_invites] GET_ACCOUNT_INVITES_FULFILLED',
	GET_ACCOUNT_INVITES_REJECTED: '[account_invites] GET_ACCOUNT_INVITES_REJECTED',
	DELETE_MY_ACCOUNT_INVITE: '[account_invites] DELETE_MY_ACCOUNT_INVITE',
	DELETE_ACCOUNT_INVITE: '[account_invites] DELETE_ACCOUNT_INVITE',
	DELETE_ACCOUNT_INVITE_INITIAL_STATE: '[account_invites] DELETE_ACCOUNT_INVITE_INITIAL_STATE',
	DELETE_ACCOUNT_INVITE_LOADING: '[account_invites] DELETE_ACCOUNT_INVITE_LOADING',
	DELETE_ACCOUNT_INVITE_FULFILLED: '[account_invites] DELETE_ACCOUNT_INVITE_FULFILLED',
	DELETE_ACCOUNT_INVITE_REJECTED: '[account_invites] DELETE_ACCOUNT_INVITE_REJECTED',
	CREATE_ACCOUNT_INVITE: '[account_invites] CREATE_ACCOUNT_INVITE',
	CREATE_ACCOUNT_INVITE_INITIAL_STATE: '[account_invites] CREATE_ACCOUNT_INVITE_INITIAL_STATE',
	CREATE_ACCOUNT_INVITE_LOADING: '[account_invites] CREATE_ACCOUNT_INVITE_LOADING',
	CREATE_ACCOUNT_INVITE_FULFILLED: '[account_invites] CREATE_ACCOUNT_INVITE_FULFILLED',
	CREATE_ACCOUNT_INVITE_REJECTED: '[account_invites] CREATE_ACCOUNT_INVITE_REJECTED',
	ACCEPT_ACCOUNT_INVITE: '[account_invites] ACCEPT_ACCOUNT_INVITE',
	ACCEPT_ACCOUNT_INVITE_INITIAL_STATE: '[account_invites] ACCEPT_ACCOUNT_INVITE_INITIAL_STATE',
	ACCEPT_ACCOUNT_INVITE_LOADING: '[account_invites] ACCEPT_ACCOUNT_INVITE_LOADING',
	ACCEPT_ACCOUNT_INVITE_FULFILLED: '[account_invites] ACCEPT_ACCOUNT_INVITE_FULFILLED',
	ACCEPT_ACCOUNT_INVITE_REJECTED: '[account_invites] ACCEPT_ACCOUNT_INVITE_REJECTED',
}

export default {
	...types,
	getMyAccountInvites: () => ({
		type: types.GET_MY_ACCOUNT_INVITES,
		payload: null,
	}),
	getMyAccountInvitesInitialState: () => ({
		type: types.GET_MY_ACCOUNT_INVITES_INITIAL_STATE,
		payload: null,
	}),
	getMyAccountInvitesLoading: () => ({
		type: types.GET_MY_ACCOUNT_INVITES_LOADING,
		payload: null,
	}),
	getMyAccountInvitesFulfilled: (response) => ({
		type: types.GET_MY_ACCOUNT_INVITES_FULFILLED,
		payload: response,
	}),
	getMyAccountInvitesRejected: (response) => ({
		type: types.GET_MY_ACCOUNT_INVITES_REJECTED,
		payload: response,
	}),

	getAccountInvites: (query) => ({
		type: types.GET_ACCOUNT_INVITES,
		payload: null,
		query,
	}),
	accountInvitesInitialState: () => ({
		type: types.GET_ACCOUNT_INVITES_INITIAL_STATE,
		payload: null,
	}),
	accountInvitesLoading: () => ({
		type: types.GET_ACCOUNT_INVITES_LOADING,
		payload: null,
	}),
	accountInvitesFulfilled: (response) => ({
		type: types.GET_ACCOUNT_INVITES_FULFILLED,
		payload: response,
	}),
	accountInvitesRejected: (response) => ({
		type: types.GET_ACCOUNT_INVITES_REJECTED,
		payload: response,
	}),

	deleteMyAccountInvite: (invite) => ({
		type: types.DELETE_MY_ACCOUNT_INVITE,
		payload: null,
		invite,
	}),

	deleteAccountInvite: (invite, successCb, errorCb) => ({
		type: types.DELETE_ACCOUNT_INVITE,
		payload: null,
		invite,
		successCb,
		errorCb,
	}),
	deleteAccountInviteInitialState: () => ({
		type: types.DELETE_ACCOUNT_INVITE_INITIAL_STATE,
		payload: null,
	}),
	deleteAccountInviteLoading: () => ({
		type: types.DELETE_ACCOUNT_INVITE_LOADING,
		payload: null,
	}),
	deleteAccountInviteFulfilled: (response) => ({
		type: types.DELETE_ACCOUNT_INVITE_FULFILLED,
		payload: response,
	}),
	deleteAccountInviteRejected: (response) => ({
		type: types.DELETE_ACCOUNT_INVITE_REJECTED,
		payload: response,
	}),

	createAccountInvite: (invite, successCb, errorCb) => ({
		type: types.CREATE_ACCOUNT_INVITE,
		payload: null,
		invite,
		successCb,
		errorCb,
	}),
	createAccountInviteInitialState: () => ({
		type: types.CREATE_ACCOUNT_INVITE_INITIAL_STATE,
		payload: null,
	}),
	createAccountInviteLoading: () => ({
		type: types.CREATE_ACCOUNT_INVITE_LOADING,
		payload: null,
	}),
	createAccountInviteFulfilled: (response) => ({
		type: types.CREATE_ACCOUNT_INVITE_FULFILLED,
		payload: response,
	}),
	createAccountInviteRejected: (response) => ({
		type: types.CREATE_ACCOUNT_INVITE_REJECTED,
		payload: response,
	}),

	acceptAccountInvite: (invite) => ({
		type: types.ACCEPT_ACCOUNT_INVITE,
		payload: null,
		invite,
	}),
	acceptAccountInviteInitialState: () => ({
		type: types.ACCEPT_ACCOUNT_INVITE_INITIAL_STATE,
		payload: null,
	}),
	acceptAccountInviteLoading: () => ({
		type: types.ACCEPT_ACCOUNT_INVITE_LOADING,
		payload: null,
	}),
	acceptAccountInviteFulfilled: (response) => ({
		type: types.ACCEPT_ACCOUNT_INVITE_FULFILLED,
		payload: response,
	}),
	acceptAccountInviteRejected: (response) => ({
		type: types.ACCEPT_ACCOUNT_INVITE_REJECTED,
		payload: response,
	}),
}
