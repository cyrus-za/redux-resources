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

import { notificationActions, subscriptionActions } from '../actions';
import { put, takeEvery, call } from 'redux-saga/effects';
import { subscriptionApi } from '../../api';

function getSubscriptions(_a) {
  var getSubscriptionsResponse, error_1;
  var query = _a.query;
  return __generator(this, function (_b) {
    switch (_b.label) {
      case 0:
        _b.trys.push([0, 4,, 6]);

        return [4
        /*yield*/
        , put(subscriptionActions.setSubscriptionsLoading())];

      case 1:
        _b.sent();

        return [4
        /*yield*/
        , call(subscriptionApi.getSubscriptions, query)];

      case 2:
        getSubscriptionsResponse = _b.sent();
        return [4
        /*yield*/
        , put(subscriptionActions.setSubscriptionsFulfilled(getSubscriptionsResponse))];

      case 3:
        _b.sent();

        return [3
        /*break*/
        , 6];

      case 4:
        error_1 = _b.sent();
        return [4
        /*yield*/
        , put(subscriptionActions.setSubscriptionsRejected(error_1))];

      case 5:
        _b.sent();

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

function createSubscription(_a) {
  var data, response, error_2;
  var account = _a.account,
      plan = _a.plan,
      coupon = _a.coupon,
      successCb = _a.successCb,
      errorCb = _a.errorCb;
  return __generator(this, function (_b) {
    switch (_b.label) {
      case 0:
        data = {
          account_id: account.id,
          plan_id: plan.id,
          coupon: coupon
        };
        _b.label = 1;

      case 1:
        _b.trys.push([1, 6,, 8]);

        return [4
        /*yield*/
        , put(subscriptionActions.setCreateSubscriptionLoading())];

      case 2:
        _b.sent();

        return [4
        /*yield*/
        , call(subscriptionApi.createSubscription, data)];

      case 3:
        response = _b.sent();
        return [4
        /*yield*/
        , put(subscriptionActions.setCreateSubscriptionFulfilled(response))];

      case 4:
        _b.sent();

        return [4
        /*yield*/
        , put(notificationActions.displaySnackbarMessage('Subscription created!', 2000))];

      case 5:
        _b.sent();

        successCb && successCb();
        return [3
        /*break*/
        , 8];

      case 6:
        error_2 = _b.sent();
        return [4
        /*yield*/
        , put(subscriptionActions.setCreateSubscriptionRejected(error_2))];

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

function updateSubscription(_a) {
  var data, response, error_3;
  var subscription = _a.subscription,
      plan = _a.plan,
      _b = _a.coupon,
      coupon = _b === void 0 ? null : _b,
      successCb = _a.successCb,
      errorCb = _a.errorCb;
  return __generator(this, function (_c) {
    switch (_c.label) {
      case 0:
        data = {
          plan_id: plan.id,
          coupon: coupon
        };
        _c.label = 1;

      case 1:
        _c.trys.push([1, 6,, 8]);

        return [4
        /*yield*/
        , put(subscriptionActions.setUpdateSubscriptionLoading())];

      case 2:
        _c.sent();

        return [4
        /*yield*/
        , call(subscriptionApi.updateSubscription, subscription.id, data)];

      case 3:
        response = _c.sent();
        return [4
        /*yield*/
        , put(subscriptionActions.setUpdateSubscriptionFulfilled(response))];

      case 4:
        _c.sent();

        return [4
        /*yield*/
        , put(notificationActions.displaySnackbarMessage('Subscription updated!', 2000))];

      case 5:
        _c.sent();

        successCb && successCb();
        return [3
        /*break*/
        , 8];

      case 6:
        error_3 = _c.sent();
        return [4
        /*yield*/
        , put(subscriptionActions.setUpdateSubscriptionRejected(error_3))];

      case 7:
        _c.sent();

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

function deleteSubscription(_a) {
  var response, error_4;
  var subscription = _a.subscription,
      successCb = _a.successCb,
      errorCb = _a.errorCb;
  return __generator(this, function (_b) {
    switch (_b.label) {
      case 0:
        _b.trys.push([0, 5,, 7]);

        return [4
        /*yield*/
        , put(subscriptionActions.setDeleteSubscriptionLoading())];

      case 1:
        _b.sent();

        return [4
        /*yield*/
        , call(subscriptionApi.deleteSubscription, subscription.id)];

      case 2:
        response = _b.sent();
        return [4
        /*yield*/
        , put(subscriptionActions.setDeleteSubscriptionFulfilled(response))];

      case 3:
        _b.sent();

        return [4
        /*yield*/
        , put(notificationActions.displaySnackbarMessage('Subscription deleted', 2000))];

      case 4:
        _b.sent();

        successCb && successCb();
        return [3
        /*break*/
        , 7];

      case 5:
        error_4 = _b.sent();
        return [4
        /*yield*/
        , put(subscriptionActions.setDeleteSubscriptionRejected(error_4))];

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

export default function rootSaga() {
  return __generator(this, function (_a) {
    switch (_a.label) {
      case 0:
        return [4
        /*yield*/
        , takeEvery(subscriptionActions.GET_SUBSCRIPTIONS, getSubscriptions)];

      case 1:
        _a.sent();

        return [4
        /*yield*/
        , takeEvery(subscriptionActions.CREATE_SUBSCRIPTION, createSubscription)];

      case 2:
        _a.sent();

        return [4
        /*yield*/
        , takeEvery(subscriptionActions.UPDATE_SUBSCRIPTION, updateSubscription)];

      case 3:
        _a.sent();

        return [4
        /*yield*/
        , takeEvery(subscriptionActions.DELETE_SUBSCRIPTION, deleteSubscription)];

      case 4:
        _a.sent();

        return [2
        /*return*/
        ];
    }
  });
}