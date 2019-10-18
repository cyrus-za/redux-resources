const types = {
	GET_CARDS: '[cards] GET_CARDS',
	GET_CARDS_INITIAL_STATE: '[cards] GET_CARDS_INITIAL_STATE',
	GET_CARDS_LOADING: '[cards] GET_CARDS_LOADING',
	GET_CARDS_FULFILLED: '[cards] GET_CARDS_FULFILLED',
	GET_CARDS_REJECTED: '[cards] GET_CARDS_REJECTED',

	CREATE_CARD: '[cards] CREATE_CARD',
	CREATE_CARD_INITIAL_STATE: '[cards] CREATE_CARD_INITIAL_STATE',
	CREATE_CARD_LOADING: '[cards] CREATE_CARD_LOADING',
	CREATE_CARD_FULFILLED: '[cards] CREATE_CARD_FULFILLED',
	CREATE_CARD_REJECTED: '[cards] CREATE_CARD_REJECTED',

	SHOW_CARD: '[cards] SHOW_CARD',
	SHOW_CARD_INITIAL_STATE: '[cards] SHOW_CARD_INITIAL_STATE',
	SHOW_CARD_LOADING: '[cards] SHOW_CARD_LOADING',
	SHOW_CARD_FULFILLED: '[cards] SHOW_CARD_FULFILLED',
	SHOW_CARD_REJECTED: '[cards] SHOW_CARD_REJECTED',

	UPDATE_CARD: '[cards] UPDATE_CARD',
	UPDATE_CARD_INITIAL_STATE: '[cards] UPDATE_CARD_INITIAL_STATE',
	UPDATE_CARD_LOADING: '[cards] UPDATE_CARD_LOADING',
	UPDATE_CARD_FULFILLED: '[cards] UPDATE_CARD_FULFILLED',
	UPDATE_CARD_REJECTED: '[cards] UPDATE_CARD_REJECTED',

	DELETE_CARD: '[cards] DELETE_CARD',
	DELETE_CARD_INITIAL_STATE: '[cards] DELETE_CARD_INITIAL_STATE',
	DELETE_CARD_LOADING: '[cards] DELETE_CARD_LOADING',
	DELETE_CARD_FULFILLED: '[cards] DELETE_CARD_FULFILLED',
	DELETE_CARD_REJECTED: '[cards] DELETE_CARD_REJECTED',

	SET_DEFAULT_CARD: '[cards] SET_DEFAULT_CARD',
	SET_DEFAULT_CARD_INITIAL_STATE: '[cards] SET_DEFAULT_CARD_INITIAL_STATE',
	SET_DEFAULT_CARD_LOADING: '[cards] SET_DEFAULT_CARD_LOADING',
	SET_DEFAULT_CARD_FULFILLED: '[cards] SET_DEFAULT_CARD_FULFILLED',
	SET_DEFAULT_CARD_REJECTED: '[cards] SET_DEFAULT_CARD_REJECTED',
}

export default {
	...types,
	getCards: (query) => ({
		type: types.GET_CARDS,
		payload: null,
		query,
	}),
	getCardsInitialState: () => ({
		type: types.GET_CARDS_INITIAL_STATE,
		payload: null,
	}),
	getCardsLoading: () => ({
		type: types.GET_CARDS_LOADING,
		payload: null,
	}),
	getCardsFulfilled: (response) => ({
		type: types.GET_CARDS_FULFILLED,
		payload: response,
	}),
	getCardsRejected: (response) => ({
		type: types.GET_CARDS_REJECTED,
		payload: response,
	}),

	createCard: (card, successCb, errorCb) => ({
		type: types.CREATE_CARD,
		payload: null,
		card,
		successCb,
		errorCb,
	}),
	createCardInitialState: () => ({
		type: types.CREATE_CARD_INITIAL_STATE,
		payload: null,
	}),
	createCardLoading: () => ({
		type: types.CREATE_CARD_LOADING,
		payload: null,
	}),
	createCardFulfilled: (response) => ({
		type: types.CREATE_CARD_FULFILLED,
		payload: response,
	}),
	createCardRejected: (response) => ({
		type: types.CREATE_CARD_REJECTED,
		payload: response,
	}),

	showCard: (id) => ({
		type: types.SHOW_CARD,
		payload: null,
		id,
	}),
	showCardInitialState: () => ({
		type: types.SHOW_CARD_INITIAL_STATE,
		payload: null,
	}),
	showCardLoading: () => ({
		type: types.SHOW_CARD_LOADING,
		payload: null,
	}),
	showCardFulfilled: (response) => ({
		type: types.SHOW_CARD_FULFILLED,
		payload: response,
	}),
	showCardRejected: (response) => ({
		type: types.SHOW_CARD_REJECTED,
		payload: response,
	}),

	updateCard: (id, card, successCb, errorCb) => ({
		type: types.UPDATE_CARD,
		payload: null,
		id,
		card,
		successCb,
		errorCb,
	}),
	updateCardInitialState: () => ({
		type: types.UPDATE_CARD_INITIAL_STATE,
		payload: null,
	}),
	updateCardLoading: () => ({
		type: types.UPDATE_CARD_LOADING,
		payload: null,
	}),
	updateCardFulfilled: (response) => ({
		type: types.UPDATE_CARD_FULFILLED,
		payload: response,
	}),
	updateCardRejected: (response) => ({
		type: types.UPDATE_CARD_REJECTED,
		payload: response,
	}),

	deleteCard: (card, successCb, errorCb) => ({
		type: types.DELETE_CARD,
		payload: null,
		card,
		successCb,
		errorCb,
	}),
	deleteCardInitialState: () => ({
		type: types.DELETE_CARD_INITIAL_STATE,
		payload: null,
	}),
	deleteCardLoading: () => ({
		type: types.DELETE_CARD_LOADING,
		payload: null,
	}),
	deleteCardFulfilled: (response) => ({
		type: types.DELETE_CARD_FULFILLED,
		payload: response,
	}),
	deleteCardRejected: (response) => ({
		type: types.DELETE_CARD_REJECTED,
		payload: response,
	}),

	setDefaultCard: (card) => ({
		type: types.SET_DEFAULT_CARD,
		payload: null,
		card,
	}),
	setDefaultCardInitialState: () => ({
		type: types.SET_DEFAULT_CARD_INITIAL_STATE,
		payload: null,
	}),
	setDefaultCardLoading: () => ({
		type: types.SET_DEFAULT_CARD_LOADING,
		payload: null,
	}),
	setDefaultCardFulfilled: (response) => ({
		type: types.SET_DEFAULT_CARD_FULFILLED,
		payload: response,
	}),
	setDefaultCardRejected: (response) => ({
		type: types.SET_DEFAULT_CARD_REJECTED,
		payload: response,
	}),
}
