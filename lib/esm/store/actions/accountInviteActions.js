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
  GET_MY_ACCOUNT_INVITES: '[account_invites] GET_MY_ACCOUNT_INVITES',
  GET_MY_ACCOUNT_INVITES_INITIAL_STATE: '[account_invites] GET_MY_ACCOUNT_INVITES_INITIAL_STATE',
  GET_MY_ACCOUNT_INVITES_LOADING: '[account_invites] GET_MY_ACCOUNT_INVITES_LOADING',
  GET_MY_ACCOUNT_INVITES_FULFILLED: '[account_invites] GET_MY_ACCOUNT_INVITES_FULFILLED',
  GET_MY_ACCOUNT_INVITES_REJECTED: '[account_invites] GET_MY_ACCOUNT_INVITES_REJECTED',
  GET_ACCOUNT_INVITES: '[account_invites] GET_ACCOUNT_INVITES',
  GET_ACCOUNT_INVITES_INITIAL_STATE: '[account_invites] GET_ACCOUNT_INVITES_INITIAL_STATE',
  GET_ACCOUNT_INVITES_LOADING: '[account_invites] GET_ACCOUNT_INVITES_LOADING',
  GET_ACCOUNT_INVITES_FULFILLED: '[account_invites] GET_ACCOUNT_INVITES_FULFILLED',
  GET_ACCOUNT_INVITES_REJECTED: '[account_invites] GET_ACCOUNT_INVITES_REJECTED',
  DELETE_MY_ACCOUNT_INVITE: '[account_invites] DELETE_MY_ACCOUNT_INVITE',
  DELETE_ACCOUNT_INVITE: '[account_invites] DELETE_ACCOUNT_INVITE',
  DELETE_ACCOUNT_INVITE_INITIAL_STATE: '[account_invites] DELETE_ACCOUNT_INVITE_INITIAL_STATE',
  DELETE_ACCOUNT_INVITE_LOADING: '[account_invites] DELETE_ACCOUNT_INVITE_LOADING',
  DELETE_ACCOUNT_INVITE_FULFILLED: '[account_invites] DELETE_ACCOUNT_INVITE_FULFILLED',
  DELETE_ACCOUNT_INVITE_REJECTED: '[account_invites] DELETE_ACCOUNT_INVITE_REJECTED',
  CREATE_ACCOUNT_INVITE: '[account_invites] CREATE_ACCOUNT_INVITE',
  CREATE_ACCOUNT_INVITE_INITIAL_STATE: '[account_invites] CREATE_ACCOUNT_INVITE_INITIAL_STATE',
  CREATE_ACCOUNT_INVITE_LOADING: '[account_invites] CREATE_ACCOUNT_INVITE_LOADING',
  CREATE_ACCOUNT_INVITE_FULFILLED: '[account_invites] CREATE_ACCOUNT_INVITE_FULFILLED',
  CREATE_ACCOUNT_INVITE_REJECTED: '[account_invites] CREATE_ACCOUNT_INVITE_REJECTED',
  ACCEPT_ACCOUNT_INVITE: '[account_invites] ACCEPT_ACCOUNT_INVITE',
  ACCEPT_ACCOUNT_INVITE_INITIAL_STATE: '[account_invites] ACCEPT_ACCOUNT_INVITE_INITIAL_STATE',
  ACCEPT_ACCOUNT_INVITE_LOADING: '[account_invites] ACCEPT_ACCOUNT_INVITE_LOADING',
  ACCEPT_ACCOUNT_INVITE_FULFILLED: '[account_invites] ACCEPT_ACCOUNT_INVITE_FULFILLED',
  ACCEPT_ACCOUNT_INVITE_REJECTED: '[account_invites] ACCEPT_ACCOUNT_INVITE_REJECTED'
};
export var accountInviteActions = __assign(__assign({}, types), {
  getMyAccountInvites: function () {
    return {
      type: types.GET_MY_ACCOUNT_INVITES,
      payload: null
    };
  },
  getMyAccountInvitesInitialState: function () {
    return {
      type: types.GET_MY_ACCOUNT_INVITES_INITIAL_STATE,
      payload: null
    };
  },
  getMyAccountInvitesLoading: function () {
    return {
      type: types.GET_MY_ACCOUNT_INVITES_LOADING,
      payload: null
    };
  },
  getMyAccountInvitesFulfilled: function (response) {
    return {
      type: types.GET_MY_ACCOUNT_INVITES_FULFILLED,
      payload: response
    };
  },
  getMyAccountInvitesRejected: function (response) {
    return {
      type: types.GET_MY_ACCOUNT_INVITES_REJECTED,
      payload: response
    };
  },
  getAccountInvites: function (query) {
    return {
      type: types.GET_ACCOUNT_INVITES,
      payload: null,
      query: query
    };
  },
  accountInvitesInitialState: function () {
    return {
      type: types.GET_ACCOUNT_INVITES_INITIAL_STATE,
      payload: null
    };
  },
  accountInvitesLoading: function () {
    return {
      type: types.GET_ACCOUNT_INVITES_LOADING,
      payload: null
    };
  },
  accountInvitesFulfilled: function (response) {
    return {
      type: types.GET_ACCOUNT_INVITES_FULFILLED,
      payload: response
    };
  },
  accountInvitesRejected: function (response) {
    return {
      type: types.GET_ACCOUNT_INVITES_REJECTED,
      payload: response
    };
  },
  deleteMyAccountInvite: function (invite) {
    return {
      type: types.DELETE_MY_ACCOUNT_INVITE,
      payload: null,
      invite: invite
    };
  },
  deleteAccountInvite: function (invite, successCb, errorCb) {
    if (successCb === void 0) {
      successCb = undefined;
    }

    if (errorCb === void 0) {
      errorCb = undefined;
    }

    return {
      type: types.DELETE_ACCOUNT_INVITE,
      payload: null,
      invite: invite,
      successCb: successCb,
      errorCb: errorCb
    };
  },
  deleteAccountInviteInitialState: function () {
    return {
      type: types.DELETE_ACCOUNT_INVITE_INITIAL_STATE,
      payload: null
    };
  },
  deleteAccountInviteLoading: function () {
    return {
      type: types.DELETE_ACCOUNT_INVITE_LOADING,
      payload: null
    };
  },
  deleteAccountInviteFulfilled: function (response) {
    return {
      type: types.DELETE_ACCOUNT_INVITE_FULFILLED,
      payload: response
    };
  },
  deleteAccountInviteRejected: function (response) {
    return {
      type: types.DELETE_ACCOUNT_INVITE_REJECTED,
      payload: response
    };
  },
  createAccountInvite: function (invite, successCb, errorCb) {
    if (successCb === void 0) {
      successCb = undefined;
    }

    if (errorCb === void 0) {
      errorCb = undefined;
    }

    return {
      type: types.CREATE_ACCOUNT_INVITE,
      payload: null,
      invite: invite,
      successCb: successCb,
      errorCb: errorCb
    };
  },
  createAccountInviteInitialState: function () {
    return {
      type: types.CREATE_ACCOUNT_INVITE_INITIAL_STATE,
      payload: null
    };
  },
  createAccountInviteLoading: function () {
    return {
      type: types.CREATE_ACCOUNT_INVITE_LOADING,
      payload: null
    };
  },
  createAccountInviteFulfilled: function (response) {
    return {
      type: types.CREATE_ACCOUNT_INVITE_FULFILLED,
      payload: response
    };
  },
  createAccountInviteRejected: function (response) {
    return {
      type: types.CREATE_ACCOUNT_INVITE_REJECTED,
      payload: response
    };
  },
  acceptAccountInvite: function (invite) {
    return {
      type: types.ACCEPT_ACCOUNT_INVITE,
      payload: null,
      invite: invite
    };
  },
  acceptAccountInviteInitialState: function () {
    return {
      type: types.ACCEPT_ACCOUNT_INVITE_INITIAL_STATE,
      payload: null
    };
  },
  acceptAccountInviteLoading: function () {
    return {
      type: types.ACCEPT_ACCOUNT_INVITE_LOADING,
      payload: null
    };
  },
  acceptAccountInviteFulfilled: function (response) {
    return {
      type: types.ACCEPT_ACCOUNT_INVITE_FULFILLED,
      payload: response
    };
  },
  acceptAccountInviteRejected: function (response) {
    return {
      type: types.ACCEPT_ACCOUNT_INVITE_REJECTED,
      payload: response
    };
  }
});