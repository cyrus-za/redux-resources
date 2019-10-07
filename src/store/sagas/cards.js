import { cardActions, notificationActions } from '../actions'
import { put, takeEvery, call } from 'redux-saga/effects'
import { cardApi } from '../../api'

function* getCards({ query }) {
	try {
		yield put(cardActions.getCardsInitialState())
		yield put(cardActions.getCardsLoading())
		const getCardsResponse = yield call(cardApi.getCards, query)
		yield put(cardActions.getCardsFulfilled(getCardsResponse))
	} catch (error) {
		yield put(cardActions.getCardsRejected(error))
	}
}

function* createCard({ card, successCb, errorCb }) {
	try {
		yield put(cardActions.createCardInitialState())
		yield put(cardActions.createCardLoading())
		const createCardResponse = yield call(cardApi.createCard, card)
		yield put(cardActions.createCardFulfilled(createCardResponse))
		successCb && successCb()
		yield put(notificationActions.displaySnackbarMessage('Card created!', 2000))

		const query = {
			account_ids: card.account_id,
			order_by: 'is_default',
			direction: 'desc',
		}

		yield call(getCards, { query })
	} catch (error) {
		yield put(cardActions.createCardRejected(error))
		errorCb && errorCb()
	}
}

function* setDefaultCard({ card }) {
	try {
		yield put(cardActions.setDefaultCardInitialState())
		yield put(cardActions.setDefaultCardLoading())
		const setDefaultCardResponse = yield call(cardApi.setDefaultCard, card.id)
		yield put(cardActions.setDefaultCardFulfilled(setDefaultCardResponse))
		yield put(notificationActions.displaySnackbarMessage('Card set as default!', 2000))

		const query = {
			account_ids: card.account_id,
			order_by: 'is_default',
			direction: 'desc',
		}
		yield call(getCards, { query })
	} catch (error) {
		yield put(cardActions.setDefaultCardRejected(error))
	}
}

function* deleteCard({ card, successCb, errorCb }) {
	try {
		yield put(cardActions.deleteCardInitialState())
		yield put(cardActions.deleteCardLoading())
		const deleteCardResponse = yield call(cardApi.deleteCard, card.id)
		yield put(cardActions.deleteCardFulfilled(deleteCardResponse))
		successCb && successCb()
		yield put(notificationActions.displaySnackbarMessage('Card deleted!', 2000))

		const query = {
			account_ids: card.account_id,
			order_by: 'is_default',
			direction: 'desc',
		}
		yield call(getCards, { query })
	} catch (error) {
		yield put(cardActions.deleteCardRejected(error))
		errorCb && errorCb()
	}
}

function* updateCard({ id, card, successCb, errorCb }) {
	try {
		yield put(cardActions.updateCardInitialState())
		yield put(cardActions.updateCardLoading())
		const updateCardResponse = yield call(cardApi.updateCard, id, card)
		yield put(cardActions.updateCardFulfilled(updateCardResponse))
		successCb && successCb()
		yield put(notificationActions.displaySnackbarMessage('Card updated!', 2000))

		const query = {
			account_ids: card.account_id,
			order_by: 'is_default',
			direction: 'desc',
		}
		yield call(getCards, { query })
	} catch (error) {
		yield put(cardActions.updateCardRejected(error))
		errorCb && errorCb()
	}
}

export default function* rootSaga() {
	yield takeEvery(cardActions.GET_CARDS, getCards)
	yield takeEvery(cardActions.CREATE_CARD, createCard)
	yield takeEvery(cardActions.SET_DEFAULT_CARD, setDefaultCard)
	yield takeEvery(cardActions.DELETE_CARD, deleteCard)
	yield takeEvery(cardActions.UPDATE_CARD, updateCard)
}
