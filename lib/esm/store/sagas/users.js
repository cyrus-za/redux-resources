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

import { authActions, notificationActions, userActions } from '../actions';
import { put, takeEvery, call } from 'redux-saga/effects';
import { userApi } from '../../api';

function updatePassword(_a) {
  var accountsResponse, error_1;
  var id = _a.id,
      payload = _a.payload,
      successCb = _a.successCb,
      errorCb = _a.errorCb;
  return __generator(this, function (_b) {
    switch (_b.label) {
      case 0:
        _b.trys.push([0, 5,, 7]);

        return [4
        /*yield*/
        , put(userActions.updatePasswordInitialState())];

      case 1:
        _b.sent();

        return [4
        /*yield*/
        , put(userActions.updatePasswordLoading())];

      case 2:
        _b.sent();

        return [4
        /*yield*/
        , call(userApi.updateUserPassword, id, payload)];

      case 3:
        accountsResponse = _b.sent();
        return [4
        /*yield*/
        , put(userActions.updatePasswordFulfilled(accountsResponse))];

      case 4:
        _b.sent();

        successCb && successCb();
        return [3
        /*break*/
        , 7];

      case 5:
        error_1 = _b.sent();
        return [4
        /*yield*/
        , put(userActions.updatePasswordRejected(error_1))];

      case 6:
        _b.sent();

        errorCb && errorCb();
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

function resendEmailConfirmation() {
  var accountsResponse, error_2;
  return __generator(this, function (_a) {
    switch (_a.label) {
      case 0:
        _a.trys.push([0, 6,, 8]);

        return [4
        /*yield*/
        , put(userActions.resendEmailConfirmationInitialState())];

      case 1:
        _a.sent();

        return [4
        /*yield*/
        , put(userActions.resendEmailConfirmationLoading())];

      case 2:
        _a.sent();

        return [4
        /*yield*/
        , call(userApi.resendEmailConfirmation)];

      case 3:
        accountsResponse = _a.sent();
        return [4
        /*yield*/
        , put(userActions.resendEmailConfirmationFulfilled(accountsResponse))];

      case 4:
        _a.sent();

        return [4
        /*yield*/
        , put(notificationActions.displaySnackbarMessage('Confirmation email resent', 2000))];

      case 5:
        _a.sent();

        return [3
        /*break*/
        , 8];

      case 6:
        error_2 = _a.sent();
        return [4
        /*yield*/
        , put(userActions.resendEmailConfirmationRejected(error_2))];

      case 7:
        _a.sent();

        return [3
        /*break*/
        , 8];

      case 8:
        return [2
        /*return*/
        ];
    }
  });
}

function getNotificationPreferences(_a) {
  var notificationPreferences, error_3;
  var id = _a.id;
  return __generator(this, function (_b) {
    switch (_b.label) {
      case 0:
        _b.trys.push([0, 5,, 7]);

        return [4
        /*yield*/
        , put(userActions.getNotificationPreferencesInitialState())];

      case 1:
        _b.sent();

        return [4
        /*yield*/
        , put(userActions.getNotificationPreferencesLoading())];

      case 2:
        _b.sent();

        return [4
        /*yield*/
        , call(userApi.getNotificationPreferences, id)];

      case 3:
        notificationPreferences = _b.sent();
        return [4
        /*yield*/
        , put(userActions.getNotificationPreferencesFulfilled(notificationPreferences))];

      case 4:
        _b.sent();

        return [3
        /*break*/
        , 7];

      case 5:
        error_3 = _b.sent();
        return [4
        /*yield*/
        , put(userActions.getNotificationPreferencesRejected(error_3))];

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

function updateNotificationPreferences(_a) {
  var notificationPreferences, error_4;
  var id = _a.id,
      payload = _a.payload;
  return __generator(this, function (_b) {
    switch (_b.label) {
      case 0:
        _b.trys.push([0, 6,, 8]);

        return [4
        /*yield*/
        , put(userActions.updateNotificationPreferencesInitialState())];

      case 1:
        _b.sent();

        return [4
        /*yield*/
        , put(userActions.updateNotificationPreferencesLoading())];

      case 2:
        _b.sent();

        return [4
        /*yield*/
        , call(userApi.updateNotificationPreferences, id, payload)];

      case 3:
        notificationPreferences = _b.sent();
        return [4
        /*yield*/
        , put(userActions.updateNotificationPreferencesFulfilled(notificationPreferences))];

      case 4:
        _b.sent();

        return [4
        /*yield*/
        , put(notificationActions.displaySnackbarMessage('Notification preferences updated!', 2000))];

      case 5:
        _b.sent();

        return [3
        /*break*/
        , 8];

      case 6:
        error_4 = _b.sent();
        return [4
        /*yield*/
        , put(userActions.updateNotificationPreferencesRejected(error_4))];

      case 7:
        _b.sent();

        return [3
        /*break*/
        , 8];

      case 8:
        return [2
        /*return*/
        ];
    }
  });
}

function confirmEmail(_a) {
  var userMeta, error_5;
  var token = _a.token,
      successCb = _a.successCb,
      errorCb = _a.errorCb;
  return __generator(this, function (_b) {
    switch (_b.label) {
      case 0:
        _b.trys.push([0, 7,, 9]);

        return [4
        /*yield*/
        , put(userActions.confirmEmailInitialState())];

      case 1:
        _b.sent();

        return [4
        /*yield*/
        , put(userActions.confirmEmailLoading())];

      case 2:
        _b.sent();

        return [4
        /*yield*/
        , call(userApi.confirmEmail, token)];

      case 3:
        userMeta = _b.sent();
        return [4
        /*yield*/
        , put(userActions.confirmEmailFulfilled())];

      case 4:
        _b.sent();

        return [4
        /*yield*/
        , put(authActions.authMetaFulfilled(userMeta))];

      case 5:
        _b.sent();

        return [4
        /*yield*/
        , put(notificationActions.displaySnackbarMessage('Email Confirmed!', 2000))];

      case 6:
        _b.sent();

        successCb && successCb();
        return [3
        /*break*/
        , 9];

      case 7:
        error_5 = _b.sent();
        return [4
        /*yield*/
        , put(userActions.confirmEmailRejected(error_5))];

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

export default function updatePasswordSaga() {
  return __generator(this, function (_a) {
    switch (_a.label) {
      case 0:
        return [4
        /*yield*/
        , takeEvery(userActions.UPDATE_PASSWORD, updatePassword)];

      case 1:
        _a.sent();

        return [4
        /*yield*/
        , takeEvery(userActions.RESEND_EMAIL_CONFIRMATION, resendEmailConfirmation)];

      case 2:
        _a.sent();

        return [4
        /*yield*/
        , takeEvery(userActions.GET_NOTIFICATION_PREFERENCES, getNotificationPreferences)];

      case 3:
        _a.sent();

        return [4
        /*yield*/
        , takeEvery(userActions.UPDATE_NOTIFICATION_PREFERENCES, updateNotificationPreferences)];

      case 4:
        _a.sent();

        return [4
        /*yield*/
        , takeEvery(userActions.CONFIRM_EMAIL, confirmEmail)];

      case 5:
        _a.sent();

        return [2
        /*return*/
        ];
    }
  });
}