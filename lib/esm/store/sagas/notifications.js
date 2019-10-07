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

import { authActions, notificationActions } from '../actions';
import { put, takeEvery, call } from 'redux-saga/effects';
import { notificationApi } from '../../api';

function userConfirmedEmailEvent(_a) {
  var payload = _a.payload;
  return __generator(this, function (_b) {
    switch (_b.label) {
      case 0:
        return [4
        /*yield*/
        , put(authActions.authMetaFulfilled(payload))];

      case 1:
        _b.sent();

        return [4
        /*yield*/
        , put(notificationActions.displaySnackbarMessage('Email confirmed!', 2000))];

      case 2:
        _b.sent();

        return [2
        /*return*/
        ];
    }
  });
}

function userUpdatedEmailEvent(_a) {
  var payload = _a.payload;
  return __generator(this, function (_b) {
    switch (_b.label) {
      case 0:
        return [4
        /*yield*/
        , put(authActions.authMetaFulfilled(payload))];

      case 1:
        _b.sent();

        return [4
        /*yield*/
        , put(notificationActions.displaySnackbarMessage('Please check your inbox and confirm your new email address', 2000))];

      case 2:
        _b.sent();

        return [2
        /*return*/
        ];
    }
  });
}

function notificationReceivedEvent(_a) {
  var payload = _a.payload;
  return __generator(this, function (_b) {
    switch (_b.label) {
      case 0:
        return [4
        /*yield*/
        , put(notificationActions.addNotificationToList(payload))];

      case 1:
        _b.sent();

        return [2
        /*return*/
        ];
    }
  });
}

export function getNotifications(_a) {
  var response, error_1;
  var query = _a.query;
  return __generator(this, function (_b) {
    switch (_b.label) {
      case 0:
        _b.trys.push([0, 5,, 7]);

        return [4
        /*yield*/
        , put(notificationActions.getNotificationsInitialState())];

      case 1:
        _b.sent();

        return [4
        /*yield*/
        , put(notificationActions.getNotificationsLoading())];

      case 2:
        _b.sent();

        return [4
        /*yield*/
        , call(notificationApi.getNotifications, query)];

      case 3:
        response = _b.sent();
        return [4
        /*yield*/
        , put(notificationActions.getNotificationsFulfilled(response))];

      case 4:
        _b.sent();

        return [3
        /*break*/
        , 7];

      case 5:
        error_1 = _b.sent();
        return [4
        /*yield*/
        , put(notificationActions.getNotificationsRejected(error_1))];

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
export function getTotalUnreadNotifications() {
  var query, response, error_2;
  return __generator(this, function (_a) {
    switch (_a.label) {
      case 0:
        _a.trys.push([0, 5,, 7]);

        query = {
          is_read: 0,
          per_page: 1
        };
        return [4
        /*yield*/
        , put(notificationActions.getTotalUnreadNotificationsInitialState())];

      case 1:
        _a.sent();

        return [4
        /*yield*/
        , put(notificationActions.getTotalUnreadNotificationsLoading())];

      case 2:
        _a.sent();

        return [4
        /*yield*/
        , call(notificationApi.getNotifications, query)];

      case 3:
        response = _a.sent();
        return [4
        /*yield*/
        , put(notificationActions.getTotalUnreadNotificationsFulfilled(response))];

      case 4:
        _a.sent();

        return [3
        /*break*/
        , 7];

      case 5:
        error_2 = _a.sent();
        return [4
        /*yield*/
        , put(notificationActions.getTotalUnreadNotificationsRejected(error_2))];

      case 6:
        _a.sent();

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
export function updateNotification(_a) {
  var response, error_3;
  var id = _a.id,
      data = _a.data;
  return __generator(this, function (_b) {
    switch (_b.label) {
      case 0:
        _b.trys.push([0, 5,, 7]);

        return [4
        /*yield*/
        , put(notificationActions.updateNotificationInitialState())];

      case 1:
        _b.sent();

        return [4
        /*yield*/
        , put(notificationActions.updateNotificationLoading())];

      case 2:
        _b.sent();

        return [4
        /*yield*/
        , call(notificationApi.update, id, data)];

      case 3:
        response = _b.sent();
        return [4
        /*yield*/
        , put(notificationActions.updateNotificationFulfilled(response))];

      case 4:
        _b.sent();

        return [3
        /*break*/
        , 7];

      case 5:
        error_3 = _b.sent();
        return [4
        /*yield*/
        , put(notificationActions.updateNotificationRejected(error_3))];

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
export function deleteNotification() {
  var error_4;
  return __generator(this, function (_a) {
    switch (_a.label) {
      case 0:
        _a.trys.push([0, 4,, 6]);

        return [4
        /*yield*/
        , put(notificationActions.deleteNotificationInitialState())];

      case 1:
        _a.sent();

        return [4
        /*yield*/
        , put(notificationActions.deleteNotificationLoading()) // const response = yield call(notificationApi.deleteNotification, notification.id)
        ];

      case 2:
        _a.sent(); // const response = yield call(notificationApi.deleteNotification, notification.id)


        return [4
        /*yield*/
        , put(notificationActions.deleteNotificationFulfilled())];

      case 3:
        // const response = yield call(notificationApi.deleteNotification, notification.id)
        _a.sent();

        return [3
        /*break*/
        , 6];

      case 4:
        error_4 = _a.sent();
        return [4
        /*yield*/
        , put(notificationActions.deleteNotificationRejected(error_4))];

      case 5:
        _a.sent();

        return [3
        /*break*/
        , 6];

      case 6:
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
        , takeEvery(notificationActions.GET_NOTIFICATIONS, getNotifications)];

      case 1:
        _a.sent();

        return [4
        /*yield*/
        , takeEvery(notificationActions.GET_TOTAL_UNREAD_NOTIFICATIONS, getTotalUnreadNotifications)];

      case 2:
        _a.sent();

        return [4
        /*yield*/
        , takeEvery(notificationActions.UPDATE_NOTIFICATION, updateNotification)];

      case 3:
        _a.sent();

        return [4
        /*yield*/
        , takeEvery(notificationActions.DELETE_NOTIFICATION, deleteNotification)];

      case 4:
        _a.sent();

        return [4
        /*yield*/
        , takeEvery(notificationActions.USER_CONFIRMED_EMAIL_EVENT, userConfirmedEmailEvent)];

      case 5:
        _a.sent();

        return [4
        /*yield*/
        , takeEvery(notificationActions.USER_UPDATED_EMAIL_EVENT, userUpdatedEmailEvent)];

      case 6:
        _a.sent();

        return [4
        /*yield*/
        , takeEvery(notificationActions.NOTIFICATION_RECEIVED_EVENT, notificationReceivedEvent)];

      case 7:
        _a.sent();

        return [2
        /*return*/
        ];
    }
  });
}