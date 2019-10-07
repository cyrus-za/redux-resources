var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];

      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;

        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };

        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;

        case 7:
          op = _.ops.pop();

          _.trys.pop();

          continue;

        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }

          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }

          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }

          if (t && _.label < t[2]) {
            _.label = t[2];

            _.ops.push(op);

            break;
          }

          if (t[2]) _.ops.pop();

          _.trys.pop();

          continue;
      }

      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

import { cardActions, notificationActions } from '../actions';
import { put, takeEvery, call } from 'redux-saga/effects';
import { cardApi } from '../../api';

function getCards(_a) {
  var getCardsResponse, error_1;
  var query = _a.query;
  return __generator(this, function (_b) {
    switch (_b.label) {
      case 0:
        _b.trys.push([0, 5,, 7]);

        return [4
        /*yield*/
        , put(cardActions.getCardsInitialState())];

      case 1:
        _b.sent();

        return [4
        /*yield*/
        , put(cardActions.getCardsLoading())];

      case 2:
        _b.sent();

        return [4
        /*yield*/
        , call(cardApi.getCards, query)];

      case 3:
        getCardsResponse = _b.sent();
        return [4
        /*yield*/
        , put(cardActions.getCardsFulfilled(getCardsResponse))];

      case 4:
        _b.sent();

        return [3
        /*break*/
        , 7];

      case 5:
        error_1 = _b.sent();
        return [4
        /*yield*/
        , put(cardActions.getCardsRejected(error_1))];

      case 6:
        _b.sent();

        return [3
        /*break*/
        , 7];

      case 7:
        return [2
        /*return*/
        ];
    }
  });
}

function createCard(_a) {
  var createCardResponse, query, error_2;
  var card = _a.card,
      successCb = _a.successCb,
      errorCb = _a.errorCb;
  return __generator(this, function (_b) {
    switch (_b.label) {
      case 0:
        _b.trys.push([0, 7,, 9]);

        return [4
        /*yield*/
        , put(cardActions.createCardInitialState())];

      case 1:
        _b.sent();

        return [4
        /*yield*/
        , put(cardActions.createCardLoading())];

      case 2:
        _b.sent();

        return [4
        /*yield*/
        , call(cardApi.createCard, card)];

      case 3:
        createCardResponse = _b.sent();
        return [4
        /*yield*/
        , put(cardActions.createCardFulfilled(createCardResponse))];

      case 4:
        _b.sent();

        successCb && successCb();
        return [4
        /*yield*/
        , put(notificationActions.displaySnackbarMessage('Card created!', 2000))];

      case 5:
        _b.sent();

        query = {
          account_ids: card.account_id,
          order_by: 'is_default',
          direction: 'desc'
        };
        return [4
        /*yield*/
        , call(getCards, {
          query: query
        })];

      case 6:
        _b.sent();

        return [3
        /*break*/
        , 9];

      case 7:
        error_2 = _b.sent();
        return [4
        /*yield*/
        , put(cardActions.createCardRejected(error_2))];

      case 8:
        _b.sent();

        errorCb && errorCb();
        return [3
        /*break*/
        , 9];

      case 9:
        return [2
        /*return*/
        ];
    }
  });
}

function setDefaultCard(_a) {
  var setDefaultCardResponse, query, error_3;
  var card = _a.card;
  return __generator(this, function (_b) {
    switch (_b.label) {
      case 0:
        _b.trys.push([0, 7,, 9]);

        return [4
        /*yield*/
        , put(cardActions.setDefaultCardInitialState())];

      case 1:
        _b.sent();

        return [4
        /*yield*/
        , put(cardActions.setDefaultCardLoading())];

      case 2:
        _b.sent();

        return [4
        /*yield*/
        , call(cardApi.setDefaultCard, card.id)];

      case 3:
        setDefaultCardResponse = _b.sent();
        return [4
        /*yield*/
        , put(cardActions.setDefaultCardFulfilled(setDefaultCardResponse))];

      case 4:
        _b.sent();

        return [4
        /*yield*/
        , put(notificationActions.displaySnackbarMessage('Card set as default!', 2000))];

      case 5:
        _b.sent();

        query = {
          account_ids: card.account_id,
          order_by: 'is_default',
          direction: 'desc'
        };
        return [4
        /*yield*/
        , call(getCards, {
          query: query
        })];

      case 6:
        _b.sent();

        return [3
        /*break*/
        , 9];

      case 7:
        error_3 = _b.sent();
        return [4
        /*yield*/
        , put(cardActions.setDefaultCardRejected(error_3))];

      case 8:
        _b.sent();

        return [3
        /*break*/
        , 9];

      case 9:
        return [2
        /*return*/
        ];
    }
  });
}

function deleteCard(_a) {
  var deleteCardResponse, query, error_4;
  var card = _a.card,
      successCb = _a.successCb,
      errorCb = _a.errorCb;
  return __generator(this, function (_b) {
    switch (_b.label) {
      case 0:
        _b.trys.push([0, 7,, 9]);

        return [4
        /*yield*/
        , put(cardActions.deleteCardInitialState())];

      case 1:
        _b.sent();

        return [4
        /*yield*/
        , put(cardActions.deleteCardLoading())];

      case 2:
        _b.sent();

        return [4
        /*yield*/
        , call(cardApi.deleteCard, card.id)];

      case 3:
        deleteCardResponse = _b.sent();
        return [4
        /*yield*/
        , put(cardActions.deleteCardFulfilled(deleteCardResponse))];

      case 4:
        _b.sent();

        successCb && successCb();
        return [4
        /*yield*/
        , put(notificationActions.displaySnackbarMessage('Card deleted!', 2000))];

      case 5:
        _b.sent();

        query = {
          account_ids: card.account_id,
          order_by: 'is_default',
          direction: 'desc'
        };
        return [4
        /*yield*/
        , call(getCards, {
          query: query
        })];

      case 6:
        _b.sent();

        return [3
        /*break*/
        , 9];

      case 7:
        error_4 = _b.sent();
        return [4
        /*yield*/
        , put(cardActions.deleteCardRejected(error_4))];

      case 8:
        _b.sent();

        errorCb && errorCb();
        return [3
        /*break*/
        , 9];

      case 9:
        return [2
        /*return*/
        ];
    }
  });
}

function updateCard(_a) {
  var updateCardResponse, query, error_5;
  var id = _a.id,
      card = _a.card,
      successCb = _a.successCb,
      errorCb = _a.errorCb;
  return __generator(this, function (_b) {
    switch (_b.label) {
      case 0:
        _b.trys.push([0, 7,, 9]);

        return [4
        /*yield*/
        , put(cardActions.updateCardInitialState())];

      case 1:
        _b.sent();

        return [4
        /*yield*/
        , put(cardActions.updateCardLoading())];

      case 2:
        _b.sent();

        return [4
        /*yield*/
        , call(cardApi.updateCard, id, card)];

      case 3:
        updateCardResponse = _b.sent();
        return [4
        /*yield*/
        , put(cardActions.updateCardFulfilled(updateCardResponse))];

      case 4:
        _b.sent();

        successCb && successCb();
        return [4
        /*yield*/
        , put(notificationActions.displaySnackbarMessage('Card updated!', 2000))];

      case 5:
        _b.sent();

        query = {
          account_ids: card.account_id,
          order_by: 'is_default',
          direction: 'desc'
        };
        return [4
        /*yield*/
        , call(getCards, {
          query: query
        })];

      case 6:
        _b.sent();

        return [3
        /*break*/
        , 9];

      case 7:
        error_5 = _b.sent();
        return [4
        /*yield*/
        , put(cardActions.updateCardRejected(error_5))];

      case 8:
        _b.sent();

        errorCb && errorCb();
        return [3
        /*break*/
        , 9];

      case 9:
        return [2
        /*return*/
        ];
    }
  });
}

export default function rootSaga() {
  return __generator(this, function (_a) {
    switch (_a.label) {
      case 0:
        return [4
        /*yield*/
        , takeEvery(cardActions.GET_CARDS, getCards)];

      case 1:
        _a.sent();

        return [4
        /*yield*/
        , takeEvery(cardActions.CREATE_CARD, createCard)];

      case 2:
        _a.sent();

        return [4
        /*yield*/
        , takeEvery(cardActions.SET_DEFAULT_CARD, setDefaultCard)];

      case 3:
        _a.sent();

        return [4
        /*yield*/
        , takeEvery(cardActions.DELETE_CARD, deleteCard)];

      case 4:
        _a.sent();

        return [4
        /*yield*/
        , takeEvery(cardActions.UPDATE_CARD, updateCard)];

      case 5:
        _a.sent();

        return [2
        /*return*/
        ];
    }
  });
}