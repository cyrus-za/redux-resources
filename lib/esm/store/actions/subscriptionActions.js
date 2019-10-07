var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var types = {
  GET_SUBSCRIPTIONS: '[subscriptions] GET_SUBSCRIPTIONS',
  SET_SUBSCRIPTIONS_LOADING: '[subscriptions] SET_SUBSCRIPTIONS_LOADING',
  SET_SUBSCRIPTIONS_FULFILLED: '[subscriptions] SET_SUBSCRIPTIONS_FULFILLED',
  SET_SUBSCRIPTIONS_REJECTED: '[subscriptions] SET_SUBSCRIPTIONS_REJECTED',
  CREATE_SUBSCRIPTION: '[subscriptions] CREATE_SUBSCRIPTION',
  SET_CREATE_SUBSCRIPTION_LOADING: '[subscriptions] SET_CREATE_SUBSCRIPTION_LOADING',
  SET_CREATE_SUBSCRIPTION_FULFILLED: '[subscriptions] SET_CREATE_SUBSCRIPTION_FULFILLED',
  SET_CREATE_SUBSCRIPTION_REJECTED: '[subscriptions] SET_CREATE_SUBSCRIPTION_REJECTED',
  UPDATE_SUBSCRIPTION: '[subscriptions] UPDATE_SUBSCRIPTION',
  SET_UPDATE_SUBSCRIPTION_LOADING: '[subscriptions] SET_UPDATE_SUBSCRIPTION_LOADING',
  SET_UPDATE_SUBSCRIPTION_FULFILLED: '[subscriptions] SET_UPDATE_SUBSCRIPTION_FULFILLED',
  SET_UPDATE_SUBSCRIPTION_REJECTED: '[subscriptions] SET_UPDATE_SUBSCRIPTION_REJECTED',
  DELETE_SUBSCRIPTION: '[subscriptions] DELETE_SUBSCRIPTION',
  SET_DELETE_SUBSCRIPTION_LOADING: '[subscriptions] SET_DELETE_SUBSCRIPTION_LOADING',
  SET_DELETE_SUBSCRIPTION_FULFILLED: '[subscriptions] SET_DELETE_SUBSCRIPTION_FULFILLED',
  SET_DELETE_SUBSCRIPTION_REJECTED: '[subscriptions] SET_DELETE_SUBSCRIPTION_REJECTED'
};
export var subscriptionActions = __assign(__assign({}, types), {
  getSubscriptions: function (query) {
    if (query === void 0) {
      query = {};
    }

    return {
      type: types.GET_SUBSCRIPTIONS,
      payload: null,
      query: query
    };
  },
  setSubscriptionsLoading: function () {
    return {
      type: types.SET_SUBSCRIPTIONS_LOADING,
      payload: null
    };
  },
  setSubscriptionsFulfilled: function (response) {
    return {
      type: types.SET_SUBSCRIPTIONS_FULFILLED,
      payload: response
    };
  },
  setSubscriptionsRejected: function (response) {
    return {
      type: types.SET_SUBSCRIPTIONS_REJECTED,
      payload: response
    };
  },
  createSubscription: function (account, plan, coupon, successCb, errorCb) {
    if (coupon === void 0) {
      coupon = null;
    }

    if (successCb === void 0) {
      successCb = undefined;
    }

    if (errorCb === void 0) {
      errorCb = undefined;
    }

    return {
      type: types.CREATE_SUBSCRIPTION,
      payload: null,
      account: account,
      plan: plan,
      coupon: coupon,
      successCb: successCb,
      errorCb: errorCb
    };
  },
  setCreateSubscriptionLoading: function () {
    return {
      type: types.SET_CREATE_SUBSCRIPTION_LOADING,
      payload: null
    };
  },
  setCreateSubscriptionFulfilled: function (response) {
    return {
      type: types.SET_CREATE_SUBSCRIPTION_FULFILLED,
      payload: response
    };
  },
  setCreateSubscriptionRejected: function (response) {
    return {
      type: types.SET_CREATE_SUBSCRIPTION_REJECTED,
      payload: response
    };
  },
  updateSubscription: function (subscription, plan, coupon, successCb, errorCb) {
    if (coupon === void 0) {
      coupon = null;
    }

    if (successCb === void 0) {
      successCb = undefined;
    }

    if (errorCb === void 0) {
      errorCb = undefined;
    }

    return {
      type: types.UPDATE_SUBSCRIPTION,
      payload: null,
      subscription: subscription,
      plan: plan,
      coupon: coupon,
      successCb: successCb,
      errorCb: errorCb
    };
  },
  setUpdateSubscriptionLoading: function () {
    return {
      type: types.SET_UPDATE_SUBSCRIPTION_LOADING,
      payload: null
    };
  },
  setUpdateSubscriptionFulfilled: function (response) {
    return {
      type: types.SET_UPDATE_SUBSCRIPTION_FULFILLED,
      payload: response
    };
  },
  setUpdateSubscriptionRejected: function (response) {
    return {
      type: types.SET_UPDATE_SUBSCRIPTION_REJECTED,
      payload: response
    };
  },
  deleteSubscription: function (subscription, successCb, errorCb) {
    if (successCb === void 0) {
      successCb = undefined;
    }

    if (errorCb === void 0) {
      errorCb = undefined;
    }

    return {
      type: types.DELETE_SUBSCRIPTION,
      payload: null,
      subscription: subscription,
      successCb: successCb,
      errorCb: errorCb
    };
  },
  setDeleteSubscriptionLoading: function () {
    return {
      type: types.SET_DELETE_SUBSCRIPTION_LOADING,
      payload: null
    };
  },
  setDeleteSubscriptionFulfilled: function (response) {
    return {
      type: types.SET_DELETE_SUBSCRIPTION_FULFILLED,
      payload: response
    };
  },
  setDeleteSubscriptionRejected: function (response) {
    return {
      type: types.SET_DELETE_SUBSCRIPTION_REJECTED,
      payload: response
    };
  }
});