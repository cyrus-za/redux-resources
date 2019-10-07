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
  GET_SIGNATURES: '[signatures] GET_SIGNATURES',
  SIGNATURES_LOADING: '[signatures] SIGNATURES_LOADING',
  SIGNATURES_FULFILLED: '[signatures] SIGNATURES_FULFILLED',
  SET_SIGNATURES_REJECTED: '[signatures] SET_SIGNATURES_REJECTED',
  CREATE_SIGNATURE: '[signatures] CREATE_SIGNATURE',
  CREATE_SIGNATURE_LOADING: '[signatures] CREATE_SIGNATURE_LOADING',
  CREATE_SIGNATURE_FULFILLED: '[signatures] CREATE_SIGNATURE_FULFILLED',
  CREATE_SIGNATURE_REJECTED: '[signatures] CREATE_SIGNATURE_REJECTED'
};
export var signatureActions = __assign(__assign({}, types), {
  getSignatures: function () {
    return {
      type: types.GET_SIGNATURES,
      payload: null
    };
  },
  setSignaturesLoading: function () {
    return {
      type: types.SIGNATURES_LOADING,
      payload: null
    };
  },
  setSignaturesFulfilled: function (response) {
    return {
      type: types.SIGNATURES_FULFILLED,
      payload: response
    };
  },
  setSignaturesRejected: function (data) {
    return {
      type: types.SET_SIGNATURES_REJECTED,
      payload: data
    };
  },
  createSignature: function (data) {
    return {
      type: types.CREATE_SIGNATURE,
      payload: null,
      data: data
    };
  },
  setCreateSignatureLoading: function () {
    return {
      type: types.CREATE_SIGNATURE_LOADING,
      payload: null
    };
  },
  setCreateSignatureFulfilled: function (response) {
    return {
      type: types.CREATE_SIGNATURE_FULFILLED,
      payload: response
    };
  },
  setCreateSignatureRejected: function (data) {
    return {
      type: types.CREATE_SIGNATURE_REJECTED,
      payload: data
    };
  }
});