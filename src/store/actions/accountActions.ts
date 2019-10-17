const types = {
	SHOW_ACCOUNT: '[accounts] SHOW_ACCOUNT',
	SHOW_ACCOUNT_INITIAL_STATE: '[accounts] SHOW_ACCOUNT_INITIAL_STATE',
	SHOW_ACCOUNT_LOADING: '[accounts] SHOW_ACCOUNT_LOADING',
	SHOW_ACCOUNT_FULFILLED: '[accounts] SHOW_ACCOUNT_FULFILLED',
	SHOW_ACCOUNT_REJECTED: '[accounts] SHOW_ACCOUNT_REJECTED',

	UPDATE_ACCOUNT: '[accounts] UPDATE_ACCOUNT',
	UPDATE_ACCOUNT_INITIAL_STATE: '[accounts] UPDATE_ACCOUNT_INITIAL_STATE',
	UPDATE_ACCOUNT_LOADING: '[accounts] UPDATE_ACCOUNT_LOADING',
	UPDATE_ACCOUNT_FULFILLED: '[accounts] UPDATE_ACCOUNT_FULFILLED',
	UPDATE_ACCOUNT_REJECTED: '[accounts] UPDATE_ACCOUNT_REJECTED',

	LOAD_ACCOUNTS: '[accounts] LOAD_ACCOUNTS',
	LOAD_ACCOUNTS_INITIAL_STATE: '[accounts] LOAD_ACCOUNTS_INITIAL_STATE',
	LOAD_ACCOUNTS_LOADING: '[accounts] LOAD_ACCOUNTS_LOADING',
	LOAD_ACCOUNTS_FULFILLED: '[accounts] LOAD_ACCOUNTS_FULFILLED',
	LOAD_ACCOUNTS_REJECTED: '[accounts] LOAD_ACCOUNTS_REJECTED',

	LOAD_ACCOUNT_USERS: '[accounts] LOAD_ACCOUNT_USERS',
	LOAD_ACCOUNT_USERS_INITIAL_STATE: '[accounts] LOAD_ACCOUNT_USERS_INITIAL_STATE',
	LOAD_ACCOUNT_USERS_LOADING: '[accounts] LOAD_ACCOUNT_USERS_LOADING',
	LOAD_ACCOUNT_USERS_FULFILLED: '[accounts] LOAD_ACCOUNT_USERS_FULFILLED',
	LOAD_ACCOUNT_USERS_REJECTED: '[accounts] LOAD_ACCOUNT_USERS_REJECTED',

	LOAD_DEFAULT_ACCOUNT: '[accounts] LOAD_DEFAULT_ACCOUNT',
	LOAD_DEFAULT_ACCOUNT_INITIAL_STATE: '[accounts] LOAD_DEFAULT_ACCOUNT_INITIAL_STATE',
	LOAD_DEFAULT_ACCOUNT_LOADING: '[accounts] LOAD_DEFAULT_ACCOUNT_LOADING',
	LOAD_DEFAULT_ACCOUNT_FULFILLED: '[accounts] LOAD_DEFAULT_ACCOUNT_FULFILLED',
	LOAD_DEFAULT_ACCOUNT_REJECTED: '[accounts] LOAD_DEFAULT_ACCOUNT_REJECTED',

	SET_DEFAULT_ACCOUNT: '[accounts] SET_DEFAULT_ACCOUNT',
	SET_DEFAULT_ACCOUNT_INITIAL_STATE: '[accounts] SET_DEFAULT_ACCOUNT_INITIAL_STATE',
	SET_DEFAULT_ACCOUNT_LOADING: '[accounts] SET_DEFAULT_ACCOUNT_LOADING',
	SET_DEFAULT_ACCOUNT_FULFILLED: '[accounts] SET_DEFAULT_ACCOUNT_FULFILLED',
	SET_DEFAULT_ACCOUNT_REJECTED: '[accounts] SET_DEFAULT_ACCOUNT_REJECTED',

	CREATE_ACCOUNT: '[accounts] CREATE_ACCOUNT',
	CREATE_ACCOUNT_INITIAL_STATE: '[accounts] CREATE_ACCOUNT_INITIAL_STATE',
	CREATE_ACCOUNT_LOADING: '[accounts] CREATE_ACCOUNT_LOADING',
	CREATE_ACCOUNT_FULFILLED: '[accounts] CREATE_ACCOUNT_FULFILLED',
	CREATE_ACCOUNT_REJECTED: '[accounts] CREATE_ACCOUNT_REJECTED',

	DELETE_ACCOUNT_MEMBER: '[accounts] DELETE_ACCOUNT_MEMBER',
	DELETE_ACCOUNT_MEMBER_INITIAL_STATE: '[accounts] DELETE_ACCOUNT_MEMBER_INITIAL_STATE',
	DELETE_ACCOUNT_MEMBER_LOADING: '[accounts] DELETE_ACCOUNT_MEMBER_LOADING',
	DELETE_ACCOUNT_MEMBER_FULFILLED: '[accounts] DELETE_ACCOUNT_MEMBER_FULFILLED',
	DELETE_ACCOUNT_MEMBER_REJECTED: '[accounts] DELETE_ACCOUNT_MEMBER_REJECTED',

	UPDATE_ACCOUNT_MEMBER: '[accounts] UPDATE_ACCOUNT_MEMBER',
	UPDATE_ACCOUNT_MEMBER_INITIAL_STATE: '[accounts] UPDATE_ACCOUNT_MEMBER_INITIAL_STATE',
	UPDATE_ACCOUNT_MEMBER_LOADING: '[accounts] UPDATE_ACCOUNT_MEMBER_LOADING',
	UPDATE_ACCOUNT_MEMBER_FULFILLED: '[accounts] UPDATE_ACCOUNT_MEMBER_FULFILLED',
	UPDATE_ACCOUNT_MEMBER_REJECTED: '[accounts] UPDATE_ACCOUNT_MEMBER_REJECTED',

	UPDATE_ACCOUNT_PHOTO: '[accounts] UPDATE_ACCOUNT_PHOTO',
	UPDATE_ACCOUNT_PHOTO_INITIAL_STATE: '[accounts] UPDATE_ACCOUNT_PHOTO_INITIAL_STATE',
	UPDATE_ACCOUNT_PHOTO_LOADING: '[accounts] UPDATE_ACCOUNT_PHOTO_LOADING',
	UPDATE_ACCOUNT_PHOTO_FULFILLED: '[accounts] UPDATE_ACCOUNT_PHOTO_FULFILLED',
	UPDATE_ACCOUNT_PHOTO_REJECTED: '[accounts] UPDATE_ACCOUNT_PHOTO_REJECTED',

	GET_INVOICES: '[accounts] GET_INVOICES',
	GET_INVOICES_INITIAL_STATE: '[accounts] GET_INVOICES_INITIAL_STATE',
	GET_INVOICES_LOADING: '[accounts] GET_INVOICES_LOADING',
	GET_INVOICES_FULFILLED: '[accounts] GET_INVOICES_FULFILLED',
	GET_INVOICES_REJECTED: '[accounts] GET_INVOICES_REJECTED',
}

export const accountActions = {
	...types,
	showAccount: (id) => ({
		type: types.SHOW_ACCOUNT,
		payload: null,
		id,
	}),
	showAccountInitialState: () => ({
		type: types.SHOW_ACCOUNT_INITIAL_STATE,
		payload: null,
	}),
	showAccountLoading: () => ({
		type: types.SHOW_ACCOUNT_LOADING,
		payload: null,
	}),
	showAccountFulfilled: (response) => ({
		type: types.SHOW_ACCOUNT_FULFILLED,
		payload: response,
	}),
	showAccountRejected: (response) => ({
		type: types.SHOW_ACCOUNT_REJECTED,
		payload: response,
	}),

	updateAccount: (account, data, successCb, errorCb) => ({
		type: types.UPDATE_ACCOUNT,
		payload: null,
		account,
		data,
		successCb,
		errorCb,
	}),
	updateAccountInitialState: () => ({
		type: types.UPDATE_ACCOUNT_INITIAL_STATE,
		payload: null,
	}),
	updateAccountLoading: () => ({
		type: types.UPDATE_ACCOUNT_LOADING,
		payload: null,
	}),
	updateAccountFulfilled: (response) => ({
		type: types.UPDATE_ACCOUNT_FULFILLED,
		payload: response,
	}),
	updateAccountRejected: (response) => ({
		type: types.UPDATE_ACCOUNT_REJECTED,
		payload: response,
	}),

	accountUsers: (id) => ({
		type: types.LOAD_ACCOUNT_USERS,
		payload: null,
		id,
	}),
	accountUsersInitialState: () => ({
		type: types.LOAD_ACCOUNT_USERS_INITIAL_STATE,
		payload: null,
	}),
	accountUsersLoading: () => ({
		type: types.LOAD_ACCOUNT_USERS_LOADING,
		payload: null,
	}),
	accountUsersFulfilled: (response) => ({
		type: types.LOAD_ACCOUNT_USERS_FULFILLED,
		payload: response,
	}),
	accountUsersRejected: (response) => ({
		type: types.LOAD_ACCOUNT_USERS_REJECTED,
		payload: response,
	}),

	accounts: () => ({
		type: types.LOAD_ACCOUNTS,
		payload: null,
	}),
	accountsInitialState: () => ({
		type: types.LOAD_ACCOUNTS_INITIAL_STATE,
		payload: null,
	}),
	accountsLoading: () => ({
		type: types.LOAD_ACCOUNTS_LOADING,
		payload: null,
	}),
	accountsFulfilled: (response) => ({
		type: types.LOAD_ACCOUNTS_FULFILLED,
		payload: response,
	}),
	accountsRejected: (response) => ({
		type: types.LOAD_ACCOUNTS_REJECTED,
		payload: response,
	}),

	getDefaultAccount: () => ({
		type: types.LOAD_DEFAULT_ACCOUNT,
		payload: null,
	}),
	getDefaultAccountInitialState: () => ({
		type: types.LOAD_DEFAULT_ACCOUNT_INITIAL_STATE,
		payload: null,
	}),
	getDefaultAccountLoading: () => ({
		type: types.LOAD_DEFAULT_ACCOUNT_LOADING,
		payload: null,
	}),
	getDefaultAccountFulfilled: (response) => ({
		type: types.LOAD_DEFAULT_ACCOUNT_FULFILLED,
		payload: response,
	}),
	getDefaultAccountRejected: (response) => ({
		type: types.LOAD_DEFAULT_ACCOUNT_REJECTED,
		payload: response,
	}),

	setDefaultAccount: (id) => ({
		type: types.SET_DEFAULT_ACCOUNT,
		payload: null,
		id,
	}),
	setDefaultAccountInitialState: () => ({
		type: types.SET_DEFAULT_ACCOUNT_INITIAL_STATE,
		payload: null,
	}),
	setDefaultAccountLoading: () => ({
		type: types.SET_DEFAULT_ACCOUNT_LOADING,
		payload: null,
	}),
	setDefaultAccountFulfilled: (response) => ({
		type: types.SET_DEFAULT_ACCOUNT_FULFILLED,
		payload: response,
	}),
	setDefaultAccountRejected: (response) => ({
		type: types.SET_DEFAULT_ACCOUNT_REJECTED,
		payload: response,
	}),

	createAccount: (account, successCb, errorCb) => ({
		type: types.CREATE_ACCOUNT,
		payload: null,
		account,
		successCb,
		errorCb,
	}),
	createAccountInitialState: () => ({
		type: types.CREATE_ACCOUNT_INITIAL_STATE,
		payload: null,
	}),
	createAccountLoading: () => ({
		type: types.CREATE_ACCOUNT_LOADING,
		payload: null,
	}),
	createAccountFulfilled: (response) => ({
		type: types.CREATE_ACCOUNT_FULFILLED,
		payload: response,
	}),
	createAccountRejected: (response) => ({
		type: types.CREATE_ACCOUNT_REJECTED,
		payload: response,
	}),

	deleteAccountMember: (account, member, successCb, errorCb) => ({
		type: types.DELETE_ACCOUNT_MEMBER,
		payload: null,
		account,
		member,
		successCb,
		errorCb,
	}),
	deleteAccountMemberInitialState: () => ({
		type: types.DELETE_ACCOUNT_MEMBER_INITIAL_STATE,
		payload: null,
	}),
	deleteAccountMemberLoading: () => ({
		type: types.DELETE_ACCOUNT_MEMBER_LOADING,
		payload: null,
	}),
	deleteAccountMemberFulfilled: (response) => ({
		type: types.DELETE_ACCOUNT_MEMBER_FULFILLED,
		payload: response,
	}),
	deleteAccountMemberRejected: (response) => ({
		type: types.DELETE_ACCOUNT_MEMBER_REJECTED,
		payload: response,
	}),

	updateAccountMember: (account, member, data, successCb, errorCb) => ({
		type: types.UPDATE_ACCOUNT_MEMBER,
		payload: null,
		account,
		member,
		data,
		successCb,
		errorCb,
	}),
	updateAccountMemberInitialState: () => ({
		type: types.UPDATE_ACCOUNT_MEMBER_INITIAL_STATE,
		payload: null,
	}),
	updateAccountMemberLoading: () => ({
		type: types.UPDATE_ACCOUNT_MEMBER_LOADING,
		payload: null,
	}),
	updateAccountMemberFulfilled: (response) => ({
		type: types.UPDATE_ACCOUNT_MEMBER_FULFILLED,
		payload: response,
	}),
	updateAccountMemberRejected: (response) => ({
		type: types.UPDATE_ACCOUNT_MEMBER_REJECTED,
		payload: response,
	}),

	updateAccountPhoto: (id, data, successCb, errorCb) => ({
		type: types.UPDATE_ACCOUNT_PHOTO,
		payload: data,
		id,
		successCb,
		errorCb,
	}),
	updateAccountPhotoInitialState: () => ({
		type: types.UPDATE_ACCOUNT_PHOTO_INITIAL_STATE,
		payload: null,
	}),
	updateAccountPhotoLoading: () => ({
		type: types.UPDATE_ACCOUNT_PHOTO_LOADING,
		payload: null,
	}),
	updateAccountPhotoFulfilled: (response) => ({
		type: types.UPDATE_ACCOUNT_PHOTO_FULFILLED,
		payload: response,
	}),
	updateAccountPhotoRejected: (response) => ({
		type: types.UPDATE_ACCOUNT_PHOTO_REJECTED,
		payload: response,
	}),

	getInvoices: (account) => ({
		type: types.GET_INVOICES,
		payload: null,
		account,
	}),
	getInvoicesInitialState: () => ({
		type: types.GET_INVOICES_INITIAL_STATE,
		payload: null,
	}),
	getInvoicesLoading: () => ({
		type: types.GET_INVOICES_LOADING,
		payload: null,
	}),
	getInvoicesFulfilled: (response) => ({
		type: types.GET_INVOICES_FULFILLED,
		payload: response,
	}),
	getInvoicesRejected: (response) => ({
		type: types.GET_INVOICES_REJECTED,
		payload: response,
	}),
}
