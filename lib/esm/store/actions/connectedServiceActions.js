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
  GET_CONNECTED_SERVICES: '[connectedServices] GET_CONNECTED_SERVICES',
  SET_CONNECTED_SERVICES_INITIAL_STATE: '[connectedServices] SET_CONNECTED_SERVICES_INITIAL_STATE',
  SET_CONNECTED_SERVICES_LOADING: '[connectedServices] SET_CONNECTED_SERVICES_LOADING',
  SET_CONNECTED_SERVICES_FULFILLED: '[connectedServices] SET_CONNECTED_SERVICES_FULFILLED',
  SET_CONNECTED_SERVICES_REJECTED: '[connectedServices] SET_CONNECTED_SERVICES_REJECTED',
  CREATE_CONNECTED_SERVICE: '[connectedServices] CREATE_CONNECTED_SERVICE',
  CREATE_CONNECTED_SERVICE_INITIAL_STATE: '[connectedServices] CREATE_CONNECTED_SERVICE_INITIAL_STATE',
  CREATE_CONNECTED_SERVICE_LOADING: '[connectedServices] CREATE_CONNECTED_SERVICE_LOADING',
  CREATE_CONNECTED_SERVICE_FULFILLED: '[connectedServices] CREATE_CONNECTED_SERVICE_FULFILLED',
  CREATE_CONNECTED_SERVICE_REJECTED: '[connectedServices] CREATE_CONNECTED_SERVICE_REJECTED',
  UPDATE_CONNECTED_SERVICE: '[connectedServices] UPDATE_CONNECTED_SERVICE',
  UPDATE_CONNECTED_SERVICE_INITIAL_STATE: '[connectedServices] UPDATE_CONNECTED_SERVICE_INITIAL_STATE',
  UPDATE_CONNECTED_SERVICE_LOADING: '[connectedServices] UPDATE_CONNECTED_SERVICE_LOADING',
  UPDATE_CONNECTED_SERVICE_FULFILLED: '[connectedServices] UPDATE_CONNECTED_SERVICE_FULFILLED',
  UPDATE_CONNECTED_SERVICE_REJECTED: '[connectedServices] UPDATE_CONNECTED_SERVICE_REJECTED',
  DELETE_CONNECTED_SERVICE: '[connectedServices] DELETE_CONNECTED_SERVICE',
  DELETE_CONNECTED_SERVICE_INITIAL_STATE: '[connectedServices] DELETE_CONNECTED_SERVICE_INITIAL_STATE',
  DELETE_CONNECTED_SERVICE_LOADING: '[connectedServices] DELETE_CONNECTED_SERVICE_LOADING',
  DELETE_CONNECTED_SERVICE_FULFILLED: '[connectedServices] DELETE_CONNECTED_SERVICE_FULFILLED',
  DELETE_CONNECTED_SERVICE_REJECTED: '[connectedServices] DELETE_CONNECTED_SERVICE_REJECTED',
  SET_CONNECTED_SERVICES: '[connectedServices] SET_CONNECTED_SERVICES',
  SET_AVAILABLE_SERVICES: '[connectedServices] SET_AVAILABLE_SERVICES'
};
export var connectedServiceActions = __assign(__assign({}, types), {
  getConnectedServices: function (query) {
    if (query === void 0) {
      query = {};
    }

    return {
      type: types.GET_CONNECTED_SERVICES,
      payload: null,
      query: query
    };
  },
  setConnectedServicesInitialState: function () {
    return {
      type: types.SET_CONNECTED_SERVICES_INITIAL_STATE,
      payload: null
    };
  },
  setConnectedServicesLoading: function () {
    return {
      type: types.SET_CONNECTED_SERVICES_LOADING,
      payload: null
    };
  },
  setConnectedServicesFulfilled: function (response) {
    return {
      type: types.SET_CONNECTED_SERVICES_FULFILLED,
      payload: response
    };
  },
  setConnectedServicesRejected: function (response) {
    return {
      type: types.SET_CONNECTED_SERVICES_REJECTED,
      payload: response
    };
  },
  createConnectedService: function (data, successCb, errorCb) {
    if (successCb === void 0) {
      successCb = undefined;
    }

    if (errorCb === void 0) {
      errorCb = undefined;
    }

    return {
      type: types.CREATE_CONNECTED_SERVICE,
      payload: null,
      data: data,
      successCb: successCb,
      errorCb: errorCb
    };
  },
  createConnectedServiceInitialState: function () {
    return {
      type: types.CREATE_CONNECTED_SERVICE_INITIAL_STATE,
      payload: null
    };
  },
  createConnectedServiceLoading: function () {
    return {
      type: types.CREATE_CONNECTED_SERVICE_LOADING,
      payload: null
    };
  },
  createConnectedServiceFulfilled: function (response) {
    return {
      type: types.CREATE_CONNECTED_SERVICE_FULFILLED,
      payload: response
    };
  },
  createConnectedServiceRejected: function (response) {
    return {
      type: types.CREATE_CONNECTED_SERVICE_REJECTED,
      payload: response
    };
  },
  updateConnectedService: function (id, data, successCb, errorCb) {
    if (successCb === void 0) {
      successCb = undefined;
    }

    if (errorCb === void 0) {
      errorCb = undefined;
    }

    return {
      type: types.UPDATE_CONNECTED_SERVICE,
      payload: null,
      id: id,
      data: data,
      successCb: successCb,
      errorCb: errorCb
    };
  },
  updateConnectedServiceInitialState: function () {
    return {
      type: types.UPDATE_CONNECTED_SERVICE_INITIAL_STATE,
      payload: null
    };
  },
  updateConnectedServiceLoading: function () {
    return {
      type: types.UPDATE_CONNECTED_SERVICE_LOADING,
      payload: null
    };
  },
  updateConnectedServiceFulfilled: function (response) {
    return {
      type: types.UPDATE_CONNECTED_SERVICE_FULFILLED,
      payload: response
    };
  },
  updateConnectedServiceRejected: function (response) {
    return {
      type: types.UPDATE_CONNECTED_SERVICE_REJECTED,
      payload: response
    };
  },
  deleteConnectedService: function (id, scopes, successCb, errorCb) {
    if (scopes === void 0) {
      scopes = undefined;
    }

    if (successCb === void 0) {
      successCb = undefined;
    }

    if (errorCb === void 0) {
      errorCb = undefined;
    }

    return {
      type: types.DELETE_CONNECTED_SERVICE,
      payload: null,
      id: id,
      scopes: scopes,
      successCb: successCb,
      errorCb: errorCb
    };
  },
  deleteConnectedServiceInitialState: function () {
    return {
      type: types.DELETE_CONNECTED_SERVICE_INITIAL_STATE,
      payload: null
    };
  },
  deleteConnectedServiceLoading: function () {
    return {
      type: types.DELETE_CONNECTED_SERVICE_LOADING,
      payload: null
    };
  },
  deleteConnectedServiceFulfilled: function (response) {
    return {
      type: types.DELETE_CONNECTED_SERVICE_FULFILLED,
      payload: response
    };
  },
  deleteConnectedServiceRejected: function (response) {
    return {
      type: types.DELETE_CONNECTED_SERVICE_REJECTED,
      payload: response
    };
  },
  setConnectedServices: function (list) {
    return {
      type: types.SET_CONNECTED_SERVICES,
      payload: list
    };
  },
  setAvailableServices: function (list) {
    return {
      type: types.SET_AVAILABLE_SERVICES,
      payload: list
    };
  }
});