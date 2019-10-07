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
  UPDATE_PASSWORD: '[users] UPDATE_PASSWORD',
  UPDATE_PASSWORD_INITIAL_STATE: '[users] UPDATE_PASSWORD_INITIAL_STATE',
  UPDATE_PASSWORD_LOADING: '[users] UPDATE_PASSWORD_LOADING',
  UPDATE_PASSWORD_FULFILLED: '[users] UPDATE_PASSWORD_FULFILLED',
  UPDATE_PASSWORD_REJECTED: '[users] UPDATE_PASSWORD_REJECTED',
  RESEND_EMAIL_CONFIRMATION: '[users] RESEND_EMAIL_CONFIRMATION',
  RESEND_EMAIL_CONFIRMATION_INITIAL_STATE: '[users] RESEND_EMAIL_CONFIRMATION_INITIAL_STATE',
  RESEND_EMAIL_CONFIRMATION_LOADING: '[users] RESEND_EMAIL_CONFIRMATION_LOADING',
  RESEND_EMAIL_CONFIRMATION_FULFILLED: '[users] RESEND_EMAIL_CONFIRMATION_FULFILLED',
  RESEND_EMAIL_CONFIRMATION_REJECTED: '[users] RESEND_EMAIL_CONFIRMATION_REJECTED',
  CONFIRM_EMAIL: '[users] CONFIRM_EMAIL',
  CONFIRM_EMAIL_INITIAL_STATE: '[users] CONFIRM_EMAIL_INITIAL_STATE',
  CONFIRM_EMAIL_LOADING: '[users] CONFIRM_EMAIL_LOADING',
  CONFIRM_EMAIL_FULFILLED: '[users] CONFIRM_EMAIL_FULFILLED',
  CONFIRM_EMAIL_REJECTED: '[users] CONFIRM_EMAIL_REJECTED',
  GET_NOTIFICATION_PREFERENCES: '[users] GET_NOTIFICATION_PREFERENCES',
  GET_NOTIFICATION_PREFERENCES_INITIAL_STATE: '[users] GET_NOTIFICATION_PREFERENCES_INITIAL_STATE',
  GET_NOTIFICATION_PREFERENCES_LOADING: '[users] GET_NOTIFICATION_PREFERENCES_LOADING',
  GET_NOTIFICATION_PREFERENCES_FULFILLED: '[users] GET_NOTIFICATION_PREFERENCES_FULFILLED',
  GET_NOTIFICATION_PREFERENCES_REJECTED: '[users] GET_NOTIFICATION_PREFERENCES_REJECTED',
  UPDATE_NOTIFICATION_PREFERENCES: '[users] UPDATE_NOTIFICATION_PREFERENCES',
  UPDATE_NOTIFICATION_PREFERENCES_INITIAL_STATE: '[users] UPDATE_NOTIFICATION_PREFERENCES_INITIAL_STATE',
  UPDATE_NOTIFICATION_PREFERENCES_LOADING: '[users] UPDATE_NOTIFICATION_PREFERENCES_LOADING',
  UPDATE_NOTIFICATION_PREFERENCES_FULFILLED: '[users] UPDATE_NOTIFICATION_PREFERENCES_FULFILLED',
  UPDATE_NOTIFICATION_PREFERENCES_REJECTED: '[users] UPDATE_NOTIFICATION_PREFERENCES_REJECTED'
};
export var userActions = __assign(__assign({}, types), {
  updatePassword: function (id, payload, successCb, errorCb) {
    if (successCb === void 0) {
      successCb = undefined;
    }

    if (errorCb === void 0) {
      errorCb = undefined;
    }

    return {
      type: types.UPDATE_PASSWORD,
      payload: payload,
      id: id,
      successCb: successCb,
      errorCb: errorCb
    };
  },
  updatePasswordInitialState: function () {
    return {
      type: types.UPDATE_PASSWORD_INITIAL_STATE,
      payload: null
    };
  },
  updatePasswordLoading: function () {
    return {
      type: types.UPDATE_PASSWORD_LOADING,
      payload: null
    };
  },
  updatePasswordFulfilled: function (response) {
    return {
      type: types.UPDATE_PASSWORD_FULFILLED,
      payload: response
    };
  },
  updatePasswordRejected: function (response) {
    return {
      type: types.UPDATE_PASSWORD_REJECTED,
      payload: response
    };
  },
  confirmEmail: function (token, successCb, errorCb) {
    if (successCb === void 0) {
      successCb = undefined;
    }

    if (errorCb === void 0) {
      errorCb = undefined;
    }

    return {
      type: types.CONFIRM_EMAIL,
      payload: null,
      token: token,
      successCb: successCb,
      errorCb: errorCb
    };
  },
  confirmEmailInitialState: function () {
    return {
      type: types.CONFIRM_EMAIL_INITIAL_STATE,
      payload: null
    };
  },
  confirmEmailLoading: function () {
    return {
      type: types.CONFIRM_EMAIL_LOADING,
      payload: null
    };
  },
  confirmEmailFulfilled: function () {
    return {
      type: types.CONFIRM_EMAIL_FULFILLED,
      payload: null
    };
  },
  confirmEmailRejected: function (response) {
    return {
      type: types.CONFIRM_EMAIL_REJECTED,
      payload: response
    };
  },
  resendEmailConfirmation: function (payload) {
    return {
      type: types.RESEND_EMAIL_CONFIRMATION,
      payload: payload
    };
  },
  resendEmailConfirmationInitialState: function () {
    return {
      type: types.RESEND_EMAIL_CONFIRMATION_INITIAL_STATE,
      payload: null
    };
  },
  resendEmailConfirmationLoading: function () {
    return {
      type: types.RESEND_EMAIL_CONFIRMATION_LOADING,
      payload: null
    };
  },
  resendEmailConfirmationFulfilled: function (response) {
    return {
      type: types.RESEND_EMAIL_CONFIRMATION_FULFILLED,
      payload: response
    };
  },
  resendEmailConfirmationRejected: function (response) {
    return {
      type: types.RESEND_EMAIL_CONFIRMATION_REJECTED,
      payload: response
    };
  },
  getNotificationPreferences: function (id, payload) {
    return {
      type: types.GET_NOTIFICATION_PREFERENCES,
      payload: payload,
      id: id
    };
  },
  getNotificationPreferencesInitialState: function () {
    return {
      type: types.GET_NOTIFICATION_PREFERENCES_INITIAL_STATE,
      payload: null
    };
  },
  getNotificationPreferencesLoading: function () {
    return {
      type: types.GET_NOTIFICATION_PREFERENCES_LOADING,
      payload: null
    };
  },
  getNotificationPreferencesFulfilled: function (response) {
    return {
      type: types.GET_NOTIFICATION_PREFERENCES_FULFILLED,
      payload: response
    };
  },
  getNotificationPreferencesRejected: function (response) {
    return {
      type: types.GET_NOTIFICATION_PREFERENCES_REJECTED,
      payload: response
    };
  },
  updateNotificationPreferences: function (id, payload) {
    return {
      type: types.UPDATE_NOTIFICATION_PREFERENCES,
      payload: payload,
      id: id
    };
  },
  updateNotificationPreferencesInitialState: function () {
    return {
      type: types.UPDATE_NOTIFICATION_PREFERENCES_INITIAL_STATE,
      payload: null
    };
  },
  updateNotificationPreferencesLoading: function () {
    return {
      type: types.UPDATE_NOTIFICATION_PREFERENCES_LOADING,
      payload: null
    };
  },
  updateNotificationPreferencesFulfilled: function (response) {
    return {
      type: types.UPDATE_NOTIFICATION_PREFERENCES_FULFILLED,
      payload: response
    };
  },
  updateNotificationPreferencesRejected: function (response) {
    return {
      type: types.UPDATE_NOTIFICATION_PREFERENCES_REJECTED,
      payload: response
    };
  }
});