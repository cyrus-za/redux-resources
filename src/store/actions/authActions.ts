const types = {
	LOG_USER_IN: '[auth] LOG_USER_IN',
	LOG_USER_OUT: '[auth] LOG_USER_OUT',

	CREATE_SOCIAL_ACCESS_TOKEN: '[auth] CREATE_SOCIAL_ACCESS_TOKEN',

	CREATE_USER: '[auth] CREATE_USER',
	CREATE_USER_INITIAL_STATE: '[auth] CREATE_USER_INITIAL_STATE',
	CREATE_USER_LOADING: '[auth] CREATE_USER_LOADING',
	CREATE_USER_FULFILLED: '[auth] CREATE_USER_FULFILLED',
	CREATE_USER_REJECTED: '[auth] CREATE_USER_REJECTED',

	CREATE_AUTH_ACCESS_TOKEN: '[auth] CREATE_AUTH_ACCESS_TOKEN',
	CREATE_AUTH_ACCESS_TOKEN_INITIAL_STATE: '[auth] CREATE_AUTH_ACCESS_TOKEN_INITIAL_STATE',
	CREATE_AUTH_ACCESS_TOKEN_LOADING: '[auth] CREATE_AUTH_ACCESS_TOKEN_LOADING',
	CREATE_AUTH_ACCESS_TOKEN_FULFILLED: '[auth] CREATE_AUTH_ACCESS_TOKEN_FULFILLED',
	CREATE_AUTH_ACCESS_TOKEN_REJECTED: '[auth] CREATE_AUTH_ACCESS_TOKEN_REJECTED',

	LOAD_AUTH_USER_META: '[auth] LOAD_AUTH_USER_META',
	LOAD_AUTH_USER_META_INITIAL_STATE: '[auth] LOAD_AUTH_USER_META_INITIAL_STATE',
	LOAD_AUTH_USER_META_LOADING: '[auth] LOAD_AUTH_USER_META_LOADING',
	LOAD_AUTH_USER_META_FULFILLED: '[auth] LOAD_AUTH_USER_META_FULFILLED',
	LOAD_AUTH_USER_META_REJECTED: '[auth] LOAD_AUTH_USER_META_REJECTED',

	UPDATE_AUTH_USER: '[auth] UPDATE_AUTH_USER',
	UPDATE_AUTH_USER_INITIAL_STATE: '[auth] UPDATE_AUTH_USER_INITIAL_STATE',
	UPDATE_AUTH_USER_LOADING: '[auth] UPDATE_AUTH_USER_LOADING',
	UPDATE_AUTH_USER_FULFILLED: '[auth] UPDATE_AUTH_USER_FULFILLED',
	UPDATE_AUTH_USER_REJECTED: '[auth] UPDATE_AUTH_USER_REJECTED',

	AUTH_USER_LOADING: '[auth] AUTH_USER_LOADING',
	AUTH_USER_LOADED: '[auth] AUTH_USER_LOADED',
	AUTH_USER_NOT_LOADED: '[auth] AUTH_USER_NOT_LOADED',
	AUTH_USER_DATA: '[auth] AUTH_USER_DATA',
	AUTH_USER_ERROR: '[auth] AUTH_USER_ERROR',
	AUTH_USER_INITIAL_STATE: '[auth] AUTH_USER_INITIAL_STATE',

	UPDATE_AUTH_PHOTO: '[auth] UPDATE_AUTH_PHOTO',
	UPDATE_AUTH_PHOTO_INITIAL_STATE: '[auth] UPDATE_AUTH_PHOTO_INITIAL_STATE',
	UPDATE_AUTH_PHOTO_LOADING: '[auth] UPDATE_AUTH_PHOTO_LOADING',
	UPDATE_AUTH_PHOTO_FULFILLED: '[auth] UPDATE_AUTH_PHOTO_FULFILLED',
	UPDATE_AUTH_PHOTO_REJECTED: '[auth] UPDATE_AUTH_PHOTO_REJECTED',
}

export const authActions = {
	...types,
	authUserInitialState: () => ({
		type: types.AUTH_USER_INITIAL_STATE,
		payload: null,
	}),
	authUserLoading: () => ({
		type: types.AUTH_USER_LOADING,
		payload: null,
	}),
	authUserLoaded: () => ({
		type: types.AUTH_USER_LOADED,
		payload: null,
	}),
	authUserNotLoaded: () => ({
		type: types.AUTH_USER_NOT_LOADED,
		payload: null,
	}),
	authUserData: (data) => ({
		type: types.AUTH_USER_DATA,
		payload: data,
	}),
	authUserError: (response) => ({
		type: types.AUTH_USER_ERROR,
		payload: response,
	}),
	handleLogin: (user) => ({
		type: types.LOG_USER_IN,
		payload: null,
		user,
	}),
	logUserOut: () => ({
		type: types.LOG_USER_OUT,
		payload: null,
	}),
	createSocialAccessToken: (provider, access_token, token_secret) => ({
		type: types.CREATE_SOCIAL_ACCESS_TOKEN,
		payload: null,
		provider,
		access_token,
		token_secret,
	}),

	createUser: (user) => ({
		type: types.CREATE_USER,
		payload: null,
		user,
	}),
	createUserInitialState: () => ({
		type: types.CREATE_USER_INITIAL_STATE,
		payload: null,
	}),
	createUserLoading: () => ({
		type: types.CREATE_USER_LOADING,
		payload: null,
	}),
	createUserFulfilled: (response, user) => ({
		type: types.CREATE_USER_FULFILLED,
		payload: response,
		user: user,
	}),
	createUserRejected: (response) => ({
		type: types.CREATE_USER_REJECTED,
		payload: response,
	}),

	createAccessToken: () => ({
		type: types.CREATE_AUTH_ACCESS_TOKEN,
		payload: null,
	}),
	createAccessTokenInitialState: () => ({
		type: types.CREATE_AUTH_ACCESS_TOKEN_INITIAL_STATE,
		payload: null,
	}),
	createAccessTokenLoading: () => ({
		type: types.CREATE_AUTH_ACCESS_TOKEN_LOADING,
		payload: null,
	}),
	createAccessTokenFulfilled: (response) => ({
		type: types.CREATE_AUTH_ACCESS_TOKEN_FULFILLED,
		payload: response,
	}),
	createAccessTokenRejected: (response) => ({
		type: types.CREATE_AUTH_ACCESS_TOKEN_REJECTED,
		payload: response,
	}),

	authMeta: () => ({
		type: types.LOAD_AUTH_USER_META,
		payload: null,
	}),
	authMetaInitialState: () => ({
		type: types.LOAD_AUTH_USER_META_INITIAL_STATE,
		payload: null,
	}),
	authMetaLoading: () => ({
		type: types.LOAD_AUTH_USER_META_LOADING,
		payload: null,
	}),
	authMetaFulfilled: (response) => ({
		type: types.LOAD_AUTH_USER_META_FULFILLED,
		payload: response,
	}),
	authMetaRejected: (response) => ({
		type: types.LOAD_AUTH_USER_META_REJECTED,
		payload: response,
	}),

	updateAuthUser: (id, user) => ({
		type: types.UPDATE_AUTH_USER,
		payload: null,
		id,
		user,
	}),
	updateAuthUserInitialState: () => ({
		type: types.UPDATE_AUTH_USER_INITIAL_STATE,
		payload: null,
	}),
	updateAuthUserLoading: () => ({
		type: types.UPDATE_AUTH_USER_LOADING,
		payload: null,
	}),
	updateAuthUserFulfilled: (response) => ({
		type: types.UPDATE_AUTH_USER_FULFILLED,
		payload: response,
	}),
	updateAuthUserRejected: (response) => ({
		type: types.UPDATE_AUTH_USER_REJECTED,
		payload: response,
	}),

	updateAuthPhoto: (id, data, successCb = undefined, errorCb = undefined) => ({
		type: types.UPDATE_AUTH_PHOTO,
		payload: data,
		id,
		successCb,
		errorCb,
	}),
	updateAuthPhotoInitialState: () => ({
		type: types.UPDATE_AUTH_PHOTO_INITIAL_STATE,
		payload: null,
	}),
	updateAuthPhotoLoading: () => ({
		type: types.UPDATE_AUTH_PHOTO_LOADING,
		payload: null,
	}),
	updateAuthPhotoFulfilled: (response) => ({
		type: types.UPDATE_AUTH_PHOTO_FULFILLED,
		payload: response,
	}),
	updateAuthPhotoRejected: (response) => ({
		type: types.UPDATE_AUTH_PHOTO_REJECTED,
		payload: response,
	}),
}
