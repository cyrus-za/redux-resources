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

import { accountActions, accountInviteActions, notificationActions } from '../actions';
import { put, takeEvery, call } from 'redux-saga/effects';
import { accountApi } from '../../api';
export function getAccounts() {
  var response, error_1;
  return __generator(this, function (_a) {
    switch (_a.label) {
      case 0:
        _a.trys.push([0, 4,, 6]); //	yield put(accountActions.accountsInitialState())


        return [4
        /*yield*/
        , put(accountActions.accountsLoading())];

      case 1:
        //	yield put(accountActions.accountsInitialState())
        _a.sent();

        return [4
        /*yield*/
        , call(accountApi.getAccounts)];

      case 2:
        response = _a.sent();
        return [4
        /*yield*/
        , put(accountActions.accountsFulfilled(response))];

      case 3:
        _a.sent();

        return [3
        /*break*/
        , 6];

      case 4:
        error_1 = _a.sent();
        return [4
        /*yield*/
        , put(accountActions.accountsRejected(error_1))];

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
export function getDefaultAccount() {
  var response, error_2;
  return __generator(this, function (_a) {
    switch (_a.label) {
      case 0:
        _a.trys.push([0, 4,, 6]); //	yield put(accountActions.getDefaultAccountInitialState())


        return [4
        /*yield*/
        , put(accountActions.getDefaultAccountLoading())];

      case 1:
        //	yield put(accountActions.getDefaultAccountInitialState())
        _a.sent();

        return [4
        /*yield*/
        , call(accountApi.getDefaultAccount)];

      case 2:
        response = _a.sent();
        return [4
        /*yield*/
        , put(accountActions.getDefaultAccountFulfilled(response))];

      case 3:
        _a.sent();

        return [3
        /*break*/
        , 6];

      case 4:
        error_2 = _a.sent();
        return [4
        /*yield*/
        , put(accountActions.getDefaultAccountRejected(error_2))];

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
export function setDefaultAccount(_a) {
  var response, error_3;
  var id = _a.id;
  return __generator(this, function (_b) {
    switch (_b.label) {
      case 0:
        _b.trys.push([0, 6,, 8]);

        return [4
        /*yield*/
        , put(accountActions.setDefaultAccountInitialState())];

      case 1:
        _b.sent();

        return [4
        /*yield*/
        , put(accountActions.setDefaultAccountLoading())];

      case 2:
        _b.sent();

        return [4
        /*yield*/
        , call(accountApi.setDefaultAccount, id)];

      case 3:
        response = _b.sent();
        return [4
        /*yield*/
        , put(accountActions.setDefaultAccountFulfilled(response))];

      case 4:
        _b.sent();

        return [4
        /*yield*/
        , put(notificationActions.displaySnackbarMessage('Default account updated!', 2000))];

      case 5:
        _b.sent();

        return [3
        /*break*/
        , 8];

      case 6:
        error_3 = _b.sent();
        return [4
        /*yield*/
        , put(accountActions.setDefaultAccountRejected(error_3))];

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
export function showAccount(_a) {
  var response, error_4;
  var id = _a.id;
  return __generator(this, function (_b) {
    switch (_b.label) {
      case 0:
        _b.trys.push([0, 5,, 7]);

        return [4
        /*yield*/
        , put(accountActions.showAccountInitialState())];

      case 1:
        _b.sent();

        return [4
        /*yield*/
        , put(accountActions.showAccountLoading())];

      case 2:
        _b.sent();

        return [4
        /*yield*/
        , call(accountApi.show, id)];

      case 3:
        response = _b.sent();
        return [4
        /*yield*/
        , put(accountActions.showAccountFulfilled(response))];

      case 4:
        _b.sent();

        return [3
        /*break*/
        , 7];

      case 5:
        error_4 = _b.sent();
        return [4
        /*yield*/
        , put(accountActions.showAccountRejected(error_4))];

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
export function getAccountUsers(_a) {
  var response, error_5;
  var id = _a.id;
  return __generator(this, function (_b) {
    switch (_b.label) {
      case 0:
        _b.trys.push([0, 5,, 7]);

        return [4
        /*yield*/
        , put(accountActions.accountUsersInitialState())];

      case 1:
        _b.sent();

        return [4
        /*yield*/
        , put(accountActions.accountUsersLoading())];

      case 2:
        _b.sent();

        return [4
        /*yield*/
        , call(accountApi.getUsers, id)];

      case 3:
        response = _b.sent();
        return [4
        /*yield*/
        , put(accountActions.accountUsersFulfilled(response))];

      case 4:
        _b.sent();

        return [3
        /*break*/
        , 7];

      case 5:
        error_5 = _b.sent();
        return [4
        /*yield*/
        , put(accountActions.accountUsersRejected(error_5))];

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
export function createAccount(_a) {
  var response, error_6;
  var account = _a.account,
      successCb = _a.successCb,
      errorCb = _a.errorCb;
  return __generator(this, function (_b) {
    switch (_b.label) {
      case 0:
        _b.trys.push([0, 7,, 9]);

        return [4
        /*yield*/
        , put(accountActions.createAccountInitialState())];

      case 1:
        _b.sent();

        return [4
        /*yield*/
        , put(accountActions.createAccountLoading())];

      case 2:
        _b.sent();

        return [4
        /*yield*/
        , call(accountApi.create, account)];

      case 3:
        response = _b.sent();
        return [4
        /*yield*/
        , put(accountActions.createAccountFulfilled(response))];

      case 4:
        _b.sent();

        return [4
        /*yield*/
        , put(notificationActions.displaySnackbarMessage('Account created!', 2000))];

      case 5:
        _b.sent();

        return [4
        /*yield*/
        , call(getAccounts)];

      case 6:
        _b.sent();

        successCb && successCb();
        return [3
        /*break*/
        , 9];

      case 7:
        error_6 = _b.sent();
        return [4
        /*yield*/
        , put(accountActions.createAccountRejected(error_6))];

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
export function deleteAccountMember(_a) {
  var response, error_7;
  var account = _a.account,
      member = _a.member,
      successCb = _a.successCb,
      errorCb = _a.errorCb;
  return __generator(this, function (_b) {
    switch (_b.label) {
      case 0:
        _b.trys.push([0, 7,, 9]);

        return [4
        /*yield*/
        , put(accountActions.deleteAccountMemberInitialState())];

      case 1:
        _b.sent();

        return [4
        /*yield*/
        , put(accountActions.deleteAccountMemberLoading())];

      case 2:
        _b.sent();

        return [4
        /*yield*/
        , call(accountApi.deleteAccountMember, account.id, member.id)];

      case 3:
        response = _b.sent();
        return [4
        /*yield*/
        , put(accountActions.deleteAccountMemberFulfilled(response))];

      case 4:
        _b.sent();

        return [4
        /*yield*/
        , put(notificationActions.displaySnackbarMessage('Account member deleted!', 2000))];

      case 5:
        _b.sent();

        return [4
        /*yield*/
        , call(getAccountUsers, {
          id: account.id
        })];

      case 6:
        _b.sent();

        successCb && successCb();
        return [3
        /*break*/
        , 9];

      case 7:
        error_7 = _b.sent();
        return [4
        /*yield*/
        , put(accountActions.deleteAccountMemberRejected(error_7))];

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
export function updateAccountMember(_a) {
  var response, error_8;
  var account = _a.account,
      member = _a.member,
      data = _a.data,
      successCb = _a.successCb,
      errorCb = _a.errorCb;
  return __generator(this, function (_b) {
    switch (_b.label) {
      case 0:
        _b.trys.push([0, 7,, 9]);

        return [4
        /*yield*/
        , put(accountActions.updateAccountMemberInitialState())];

      case 1:
        _b.sent();

        return [4
        /*yield*/
        , put(accountActions.updateAccountMemberLoading())];

      case 2:
        _b.sent();

        return [4
        /*yield*/
        , call(accountApi.updateAccountMember, account.id, member.id, data)];

      case 3:
        response = _b.sent();
        return [4
        /*yield*/
        , put(accountActions.updateAccountMemberFulfilled(response))];

      case 4:
        _b.sent();

        return [4
        /*yield*/
        , put(notificationActions.displaySnackbarMessage('Account member updated!', 2000))];

      case 5:
        _b.sent();

        return [4
        /*yield*/
        , call(getAccountUsers, {
          id: account.id
        })];

      case 6:
        _b.sent();

        successCb && successCb();
        return [3
        /*break*/
        , 9];

      case 7:
        error_8 = _b.sent();
        return [4
        /*yield*/
        , put(accountActions.updateAccountMemberRejected(error_8))];

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
export function updateAccount(_a) {
  var response, error_9;
  var account = _a.account,
      data = _a.data,
      successCb = _a.successCb,
      errorCb = _a.errorCb;
  return __generator(this, function (_b) {
    switch (_b.label) {
      case 0:
        _b.trys.push([0, 6,, 8]);

        return [4
        /*yield*/
        , put(accountActions.updateAccountInitialState())];

      case 1:
        _b.sent();

        return [4
        /*yield*/
        , put(accountActions.updateAccountLoading())];

      case 2:
        _b.sent();

        return [4
        /*yield*/
        , call(accountApi.update, account.id, data)];

      case 3:
        response = _b.sent();
        return [4
        /*yield*/
        , put(accountActions.updateAccountFulfilled(response))];

      case 4:
        _b.sent();

        return [4
        /*yield*/
        , put(notificationActions.displaySnackbarMessage('Account updated!', 2000))];

      case 5:
        _b.sent();

        successCb && successCb();
        return [3
        /*break*/
        , 8];

      case 6:
        error_9 = _b.sent();
        return [4
        /*yield*/
        , put(accountActions.updateAccountRejected(error_9))];

      case 7:
        _b.sent();

        errorCb && errorCb();
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

function updateAccountPhoto(_a) {
  var response, error_10;
  var id = _a.id,
      payload = _a.payload,
      successCb = _a.successCb,
      errorCb = _a.errorCb;
  return __generator(this, function (_b) {
    switch (_b.label) {
      case 0:
        _b.trys.push([0, 6,, 8]);

        return [4
        /*yield*/
        , put(accountActions.updateAccountPhotoInitialState())];

      case 1:
        _b.sent();

        return [4
        /*yield*/
        , put(accountActions.updateAccountPhotoLoading())];

      case 2:
        _b.sent();

        return [4
        /*yield*/
        , call(accountApi.updatePicture, id, payload)];

      case 3:
        response = _b.sent();
        return [4
        /*yield*/
        , put(accountActions.updateAccountPhotoFulfilled(response))];

      case 4:
        _b.sent();

        return [4
        /*yield*/
        , put(notificationActions.displaySnackbarMessage('Account photo updated!', 2000))];

      case 5:
        _b.sent();

        successCb && successCb();
        return [3
        /*break*/
        , 8];

      case 6:
        error_10 = _b.sent();
        return [4
        /*yield*/
        , put(accountActions.updateAccountPhotoRejected(error_10))];

      case 7:
        _b.sent();

        errorCb && errorCb();
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

function getInvoices(_a) {
  var response, error_11;
  var account = _a.account;
  return __generator(this, function (_b) {
    switch (_b.label) {
      case 0:
        _b.trys.push([0, 5,, 7]);

        return [4
        /*yield*/
        , put(accountActions.getInvoicesInitialState())];

      case 1:
        _b.sent();

        return [4
        /*yield*/
        , put(accountActions.getInvoicesLoading())];

      case 2:
        _b.sent();

        return [4
        /*yield*/
        , call(accountApi.getInvoices, account.id)];

      case 3:
        response = _b.sent();
        return [4
        /*yield*/
        , put(accountActions.getInvoicesFulfilled(response))];

      case 4:
        _b.sent();

        return [3
        /*break*/
        , 7];

      case 5:
        error_11 = _b.sent();
        return [4
        /*yield*/
        , put(accountActions.getInvoicesRejected(error_11))];

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

export default function rootSaga() {
  return __generator(this, function (_a) {
    switch (_a.label) {
      case 0:
        return [4
        /*yield*/
        , takeEvery(accountActions.LOAD_ACCOUNTS, getAccounts)];

      case 1:
        _a.sent();

        return [4
        /*yield*/
        , takeEvery(accountInviteActions.ACCEPT_ACCOUNT_INVITE_FULFILLED, getAccounts)];

      case 2:
        _a.sent();

        return [4
        /*yield*/
        , takeEvery(accountActions.LOAD_DEFAULT_ACCOUNT, getDefaultAccount)];

      case 3:
        _a.sent();

        return [4
        /*yield*/
        , takeEvery(accountActions.SET_DEFAULT_ACCOUNT, setDefaultAccount)];

      case 4:
        _a.sent();

        return [4
        /*yield*/
        , takeEvery(accountActions.CREATE_ACCOUNT, createAccount)];

      case 5:
        _a.sent();

        return [4
        /*yield*/
        , takeEvery(accountActions.SHOW_ACCOUNT, showAccount)];

      case 6:
        _a.sent();

        return [4
        /*yield*/
        , takeEvery(accountActions.LOAD_ACCOUNT_USERS, getAccountUsers)];

      case 7:
        _a.sent();

        return [4
        /*yield*/
        , takeEvery(accountActions.DELETE_ACCOUNT_MEMBER, deleteAccountMember)];

      case 8:
        _a.sent();

        return [4
        /*yield*/
        , takeEvery(accountActions.UPDATE_ACCOUNT_MEMBER, updateAccountMember)];

      case 9:
        _a.sent();

        return [4
        /*yield*/
        , takeEvery(accountActions.UPDATE_ACCOUNT, updateAccount)];

      case 10:
        _a.sent();

        return [4
        /*yield*/
        , takeEvery(accountActions.UPDATE_ACCOUNT_PHOTO, updateAccountPhoto)];

      case 11:
        _a.sent();

        return [4
        /*yield*/
        , takeEvery(accountActions.GET_INVOICES, getInvoices)];

      case 12:
        _a.sent();

        return [2
        /*return*/
        ];
    }
  });
}