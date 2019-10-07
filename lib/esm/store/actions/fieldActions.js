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
  GET_FIELDS: '[fields] GET_FIELDS',
  GET_FIELDS_INITIAL_STATE: '[fields] GET_FIELDS_INITIAL_STATE',
  GET_FIELDS_LOADING: '[fields] GET_FIELDS_LOADING',
  GET_FIELDS_FULFILLED: '[fields] GET_FIELDS_FULFILLED',
  GET_FIELDS_REJECTED: '[fields] GET_FIELDS_REJECTED',
  CREATE_FIELD: '[fields] CREATE_FIELD',
  UPDATE_FIELD: '[fields] UPDATE_FIELD',
  DELETE_FIELD: '[fields] DELETE_FIELD',
  SET_ITEM_LOADING: '[fields] SET_ITEM_LOADING',
  SET_ITEM_FULFILLED: '[fields] SET_ITEM_FULFILLED',
  SET_ITEM_REJECTED: '[fields] SET_ITEM_REJECTED'
};
export var fieldActions = __assign(__assign({}, types), {
  getFields: function (packageId, query, successCb, errorCb) {
    if (query === void 0) {
      query = {};
    }

    return {
      type: types.GET_FIELDS,
      payload: null,
      packageId: packageId,
      query: query,
      successCb: successCb,
      errorCb: errorCb
    };
  },
  getFieldsInitialState: function () {
    return {
      type: types.GET_FIELDS_INITIAL_STATE,
      payload: null
    };
  },
  getFieldsLoading: function () {
    return {
      type: types.GET_FIELDS_LOADING,
      payload: null
    };
  },
  getFieldsFulfilled: function (response) {
    return {
      type: types.GET_FIELDS_FULFILLED,
      payload: response
    };
  },
  getFieldsRejected: function (response) {
    return {
      type: types.GET_FIELDS_REJECTED,
      payload: response
    };
  },
  createField: function (packageId, documentId, data, successCb, errorCb) {
    return {
      type: types.CREATE_FIELD,
      payload: null,
      packageId: packageId,
      documentId: documentId,
      data: data,
      successCb: successCb,
      errorCb: errorCb
    };
  },
  updateField: function (packageId, documentId, fieldId, data, successCb, errorCb) {
    return {
      type: types.UPDATE_FIELD,
      payload: null,
      packageId: packageId,
      documentId: documentId,
      fieldId: fieldId,
      data: data,
      successCb: successCb,
      errorCb: errorCb
    };
  },
  deleteField: function (packageId, documentId, fieldId, successCb, errorCb) {
    return {
      type: types.DELETE_FIELD,
      payload: null,
      packageId: packageId,
      documentId: documentId,
      fieldId: fieldId,
      successCb: successCb,
      errorCb: errorCb
    };
  },
  setItemLoading: function () {
    return {
      type: types.SET_ITEM_LOADING,
      payload: null
    };
  },
  setItemFulfilled: function (response) {
    return {
      type: types.SET_ITEM_FULFILLED,
      payload: response
    };
  },
  setItemRejected: function (response) {
    return {
      type: types.SET_ITEM_REJECTED,
      payload: response
    };
  }
});