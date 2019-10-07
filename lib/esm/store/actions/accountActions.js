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
  SHOW_ACCOUNT: '[accounts] SHOW_ACCOUNT',
  SHOW_ACCOUNT_INITIAL_STATE: '[accounts] SHOW_ACCOUNT_INITIAL_STATE',
  SHOW_ACCOUNT_LOADING: '[accounts] SHOW_ACCOUNT_LOADING',
  SHOW_ACCOUNT_FULFILLED: '[accounts] SHOW_ACCOUNT_FULFILLED',
  SHOW_ACCOUNT_REJECTED: '[accounts] SHOW_ACCOUNT_REJECTED',
  UPDATE_ACCOUNT: '[accounts] UPDATE_ACCOUNT',
  UPDATE_ACCOUNT_INITIAL_STATE: '[accounts] UPDATE_ACCOUNT_INITIAL_STATE',
  UPDATE_ACCOUNT_LOADING: '[accounts] UPDATE_ACCOUNT_LOADING',
  UPDATE_ACCOUNT_FULFILLED: '[accounts] UPDATE_ACCOUNT_FULFILLED',
  UPDATE_ACCOUNT_REJECTED: '[accounts] UPDATE_ACCOUNT_REJECTED',
  LOAD_ACCOUNTS: '[accounts] LOAD_ACCOUNTS',
  LOAD_ACCOUNTS_INITIAL_STATE: '[accounts] LOAD_ACCOUNTS_INITIAL_STATE',
  LOAD_ACCOUNTS_LOADING: '[accounts] LOAD_ACCOUNTS_LOADING',
  LOAD_ACCOUNTS_FULFILLED: '[accounts] LOAD_ACCOUNTS_FULFILLED',
  LOAD_ACCOUNTS_REJECTED: '[accounts] LOAD_ACCOUNTS_REJECTED',
  LOAD_ACCOUNT_USERS: '[accounts] LOAD_ACCOUNT_USERS',
  LOAD_ACCOUNT_USERS_INITIAL_STATE: '[accounts] LOAD_ACCOUNT_USERS_INITIAL_STATE',
  LOAD_ACCOUNT_USERS_LOADING: '[accounts] LOAD_ACCOUNT_USERS_LOADING',
  LOAD_ACCOUNT_USERS_FULFILLED: '[accounts] LOAD_ACCOUNT_USERS_FULFILLED',
  LOAD_ACCOUNT_USERS_REJECTED: '[accounts] LOAD_ACCOUNT_USERS_REJECTED',
  LOAD_DEFAULT_ACCOUNT: '[accounts] LOAD_DEFAULT_ACCOUNT',
  LOAD_DEFAULT_ACCOUNT_INITIAL_STATE: '[accounts] LOAD_DEFAULT_ACCOUNT_INITIAL_STATE',
  LOAD_DEFAULT_ACCOUNT_LOADING: '[accounts] LOAD_DEFAULT_ACCOUNT_LOADING',
  LOAD_DEFAULT_ACCOUNT_FULFILLED: '[accounts] LOAD_DEFAULT_ACCOUNT_FULFILLED',
  LOAD_DEFAULT_ACCOUNT_REJECTED: '[accounts] LOAD_DEFAULT_ACCOUNT_REJECTED',
  SET_DEFAULT_ACCOUNT: '[accounts] SET_DEFAULT_ACCOUNT',
  SET_DEFAULT_ACCOUNT_INITIAL_STATE: '[accounts] SET_DEFAULT_ACCOUNT_INITIAL_STATE',
  SET_DEFAULT_ACCOUNT_LOADING: '[accounts] SET_DEFAULT_ACCOUNT_LOADING',
  SET_DEFAULT_ACCOUNT_FULFILLED: '[accounts] SET_DEFAULT_ACCOUNT_FULFILLED',
  SET_DEFAULT_ACCOUNT_REJECTED: '[accounts] SET_DEFAULT_ACCOUNT_REJECTED',
  CREATE_ACCOUNT: '[accounts] CREATE_ACCOUNT',
  CREATE_ACCOUNT_INITIAL_STATE: '[accounts] CREATE_ACCOUNT_INITIAL_STATE',
  CREATE_ACCOUNT_LOADING: '[accounts] CREATE_ACCOUNT_LOADING',
  CREATE_ACCOUNT_FULFILLED: '[accounts] CREATE_ACCOUNT_FULFILLED',
  CREATE_ACCOUNT_REJECTED: '[accounts] CREATE_ACCOUNT_REJECTED',
  DELETE_ACCOUNT_MEMBER: '[accounts] DELETE_ACCOUNT_MEMBER',
  DELETE_ACCOUNT_MEMBER_INITIAL_STATE: '[accounts] DELETE_ACCOUNT_MEMBER_INITIAL_STATE',
  DELETE_ACCOUNT_MEMBER_LOADING: '[accounts] DELETE_ACCOUNT_MEMBER_LOADING',
  DELETE_ACCOUNT_MEMBER_FULFILLED: '[accounts] DELETE_ACCOUNT_MEMBER_FULFILLED',
  DELETE_ACCOUNT_MEMBER_REJECTED: '[accounts] DELETE_ACCOUNT_MEMBER_REJECTED',
  UPDATE_ACCOUNT_MEMBER: '[accounts] UPDATE_ACCOUNT_MEMBER',
  UPDATE_ACCOUNT_MEMBER_INITIAL_STATE: '[accounts] UPDATE_ACCOUNT_MEMBER_INITIAL_STATE',
  UPDATE_ACCOUNT_MEMBER_LOADING: '[accounts] UPDATE_ACCOUNT_MEMBER_LOADING',
  UPDATE_ACCOUNT_MEMBER_FULFILLED: '[accounts] UPDATE_ACCOUNT_MEMBER_FULFILLED',
  UPDATE_ACCOUNT_MEMBER_REJECTED: '[accounts] UPDATE_ACCOUNT_MEMBER_REJECTED',
  UPDATE_ACCOUNT_PHOTO: '[accounts] UPDATE_ACCOUNT_PHOTO',
  UPDATE_ACCOUNT_PHOTO_INITIAL_STATE: '[accounts] UPDATE_ACCOUNT_PHOTO_INITIAL_STATE',
  UPDATE_ACCOUNT_PHOTO_LOADING: '[accounts] UPDATE_ACCOUNT_PHOTO_LOADING',
  UPDATE_ACCOUNT_PHOTO_FULFILLED: '[accounts] UPDATE_ACCOUNT_PHOTO_FULFILLED',
  UPDATE_ACCOUNT_PHOTO_REJECTED: '[accounts] UPDATE_ACCOUNT_PHOTO_REJECTED',
  GET_INVOICES: '[accounts] GET_INVOICES',
  GET_INVOICES_INITIAL_STATE: '[accounts] GET_INVOICES_INITIAL_STATE',
  GET_INVOICES_LOADING: '[accounts] GET_INVOICES_LOADING',
  GET_INVOICES_FULFILLED: '[accounts] GET_INVOICES_FULFILLED',
  GET_INVOICES_REJECTED: '[accounts] GET_INVOICES_REJECTED'
};
export var accountActions = __assign(__assign({}, types), {
  showAccount: function (id) {
    return {
      type: types.SHOW_ACCOUNT,
      payload: null,
      id: id
    };
  },
  showAccountInitialState: function () {
    return {
      type: types.SHOW_ACCOUNT_INITIAL_STATE,
      payload: null
    };
  },
  showAccountLoading: function () {
    return {
      type: types.SHOW_ACCOUNT_LOADING,
      payload: null
    };
  },
  showAccountFulfilled: function (response) {
    return {
      type: types.SHOW_ACCOUNT_FULFILLED,
      payload: response
    };
  },
  showAccountRejected: function (response) {
    return {
      type: types.SHOW_ACCOUNT_REJECTED,
      payload: response
    };
  },
  updateAccount: function (account, data, successCb, errorCb) {
    return {
      type: types.UPDATE_ACCOUNT,
      payload: null,
      account: account,
      data: data,
      successCb: successCb,
      errorCb: errorCb
    };
  },
  updateAccountInitialState: function () {
    return {
      type: types.UPDATE_ACCOUNT_INITIAL_STATE,
      payload: null
    };
  },
  updateAccountLoading: function () {
    return {
      type: types.UPDATE_ACCOUNT_LOADING,
      payload: null
    };
  },
  updateAccountFulfilled: function (response) {
    return {
      type: types.UPDATE_ACCOUNT_FULFILLED,
      payload: response
    };
  },
  updateAccountRejected: function (response) {
    return {
      type: types.UPDATE_ACCOUNT_REJECTED,
      payload: response
    };
  },
  accountUsers: function (id) {
    return {
      type: types.LOAD_ACCOUNT_USERS,
      payload: null,
      id: id
    };
  },
  accountUsersInitialState: function () {
    return {
      type: types.LOAD_ACCOUNT_USERS_INITIAL_STATE,
      payload: null
    };
  },
  accountUsersLoading: function () {
    return {
      type: types.LOAD_ACCOUNT_USERS_LOADING,
      payload: null
    };
  },
  accountUsersFulfilled: function (response) {
    return {
      type: types.LOAD_ACCOUNT_USERS_FULFILLED,
      payload: response
    };
  },
  accountUsersRejected: function (response) {
    return {
      type: types.LOAD_ACCOUNT_USERS_REJECTED,
      payload: response
    };
  },
  accounts: function () {
    return {
      type: types.LOAD_ACCOUNTS,
      payload: null
    };
  },
  accountsInitialState: function () {
    return {
      type: types.LOAD_ACCOUNTS_INITIAL_STATE,
      payload: null
    };
  },
  accountsLoading: function () {
    return {
      type: types.LOAD_ACCOUNTS_LOADING,
      payload: null
    };
  },
  accountsFulfilled: function (response) {
    return {
      type: types.LOAD_ACCOUNTS_FULFILLED,
      payload: response
    };
  },
  accountsRejected: function (response) {
    return {
      type: types.LOAD_ACCOUNTS_REJECTED,
      payload: response
    };
  },
  getDefaultAccount: function () {
    return {
      type: types.LOAD_DEFAULT_ACCOUNT,
      payload: null
    };
  },
  getDefaultAccountInitialState: function () {
    return {
      type: types.LOAD_DEFAULT_ACCOUNT_INITIAL_STATE,
      payload: null
    };
  },
  getDefaultAccountLoading: function () {
    return {
      type: types.LOAD_DEFAULT_ACCOUNT_LOADING,
      payload: null
    };
  },
  getDefaultAccountFulfilled: function (response) {
    return {
      type: types.LOAD_DEFAULT_ACCOUNT_FULFILLED,
      payload: response
    };
  },
  getDefaultAccountRejected: function (response) {
    return {
      type: types.LOAD_DEFAULT_ACCOUNT_REJECTED,
      payload: response
    };
  },
  setDefaultAccount: function (id) {
    return {
      type: types.SET_DEFAULT_ACCOUNT,
      payload: null,
      id: id
    };
  },
  setDefaultAccountInitialState: function () {
    return {
      type: types.SET_DEFAULT_ACCOUNT_INITIAL_STATE,
      payload: null
    };
  },
  setDefaultAccountLoading: function () {
    return {
      type: types.SET_DEFAULT_ACCOUNT_LOADING,
      payload: null
    };
  },
  setDefaultAccountFulfilled: function (response) {
    return {
      type: types.SET_DEFAULT_ACCOUNT_FULFILLED,
      payload: response
    };
  },
  setDefaultAccountRejected: function (response) {
    return {
      type: types.SET_DEFAULT_ACCOUNT_REJECTED,
      payload: response
    };
  },
  createAccount: function (account, successCb, errorCb) {
    return {
      type: types.CREATE_ACCOUNT,
      payload: null,
      account: account,
      successCb: successCb,
      errorCb: errorCb
    };
  },
  createAccountInitialState: function () {
    return {
      type: types.CREATE_ACCOUNT_INITIAL_STATE,
      payload: null
    };
  },
  createAccountLoading: function () {
    return {
      type: types.CREATE_ACCOUNT_LOADING,
      payload: null
    };
  },
  createAccountFulfilled: function (response) {
    return {
      type: types.CREATE_ACCOUNT_FULFILLED,
      payload: response
    };
  },
  createAccountRejected: function (response) {
    return {
      type: types.CREATE_ACCOUNT_REJECTED,
      payload: response
    };
  },
  deleteAccountMember: function (account, member, successCb, errorCb) {
    return {
      type: types.DELETE_ACCOUNT_MEMBER,
      payload: null,
      account: account,
      member: member,
      successCb: successCb,
      errorCb: errorCb
    };
  },
  deleteAccountMemberInitialState: function () {
    return {
      type: types.DELETE_ACCOUNT_MEMBER_INITIAL_STATE,
      payload: null
    };
  },
  deleteAccountMemberLoading: function () {
    return {
      type: types.DELETE_ACCOUNT_MEMBER_LOADING,
      payload: null
    };
  },
  deleteAccountMemberFulfilled: function (response) {
    return {
      type: types.DELETE_ACCOUNT_MEMBER_FULFILLED,
      payload: response
    };
  },
  deleteAccountMemberRejected: function (response) {
    return {
      type: types.DELETE_ACCOUNT_MEMBER_REJECTED,
      payload: response
    };
  },
  updateAccountMember: function (account, member, data, successCb, errorCb) {
    return {
      type: types.UPDATE_ACCOUNT_MEMBER,
      payload: null,
      account: account,
      member: member,
      data: data,
      successCb: successCb,
      errorCb: errorCb
    };
  },
  updateAccountMemberInitialState: function () {
    return {
      type: types.UPDATE_ACCOUNT_MEMBER_INITIAL_STATE,
      payload: null
    };
  },
  updateAccountMemberLoading: function () {
    return {
      type: types.UPDATE_ACCOUNT_MEMBER_LOADING,
      payload: null
    };
  },
  updateAccountMemberFulfilled: function (response) {
    return {
      type: types.UPDATE_ACCOUNT_MEMBER_FULFILLED,
      payload: response
    };
  },
  updateAccountMemberRejected: function (response) {
    return {
      type: types.UPDATE_ACCOUNT_MEMBER_REJECTED,
      payload: response
    };
  },
  updateAccountPhoto: function (id, data, successCb, errorCb) {
    return {
      type: types.UPDATE_ACCOUNT_PHOTO,
      payload: data,
      id: id,
      successCb: successCb,
      errorCb: errorCb
    };
  },
  updateAccountPhotoInitialState: function () {
    return {
      type: types.UPDATE_ACCOUNT_PHOTO_INITIAL_STATE,
      payload: null
    };
  },
  updateAccountPhotoLoading: function () {
    return {
      type: types.UPDATE_ACCOUNT_PHOTO_LOADING,
      payload: null
    };
  },
  updateAccountPhotoFulfilled: function (response) {
    return {
      type: types.UPDATE_ACCOUNT_PHOTO_FULFILLED,
      payload: response
    };
  },
  updateAccountPhotoRejected: function (response) {
    return {
      type: types.UPDATE_ACCOUNT_PHOTO_REJECTED,
      payload: response
    };
  },
  getInvoices: function (account) {
    return {
      type: types.GET_INVOICES,
      payload: null,
      account: account
    };
  },
  getInvoicesInitialState: function () {
    return {
      type: types.GET_INVOICES_INITIAL_STATE,
      payload: null
    };
  },
  getInvoicesLoading: function () {
    return {
      type: types.GET_INVOICES_LOADING,
      payload: null
    };
  },
  getInvoicesFulfilled: function (response) {
    return {
      type: types.GET_INVOICES_FULFILLED,
      payload: response
    };
  },
  getInvoicesRejected: function (response) {
    return {
      type: types.GET_INVOICES_REJECTED,
      payload: response
    };
  }
});