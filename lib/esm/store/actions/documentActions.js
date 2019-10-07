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
  GET_DOCUMENTS: '[documents] GET_DOCUMENTS',
  GET_DOCUMENTS_INITIAL_STATE: '[documents] GET_DOCUMENTS_INITIAL_STATE',
  GET_DOCUMENTS_LOADING: '[documents] GET_DOCUMENTS_LOADING',
  GET_DOCUMENTS_FULFILLED: '[documents] GET_DOCUMENTS_FULFILLED',
  GET_DOCUMENTS_REJECTED: '[documents] GET_DOCUMENTS_REJECTED',
  DOWNLOAD_DOCUMENT: '[documents] DOWNLOAD_DOCUMENT',
  DOWNLOAD_DOCUMENT_INITIAL_STATE: '[documents] DOWNLOAD_DOCUMENT_INITIAL_STATE',
  DOWNLOAD_DOCUMENT_LOADING: '[documents] DOWNLOAD_DOCUMENT_LOADING',
  DOWNLOAD_DOCUMENT_FULFILLED: '[documents] DOWNLOAD_DOCUMENT_FULFILLED',
  DOWNLOAD_DOCUMENT_REJECTED: '[documents] DOWNLOAD_DOCUMENT_REJECTED'
};
export var documentActions = __assign(__assign({}, types), {
  getDocuments: function (query) {
    if (query === void 0) {
      query = {};
    }

    return {
      type: types.GET_DOCUMENTS,
      payload: null,
      query: query
    };
  },
  getDocumentsInitialState: function () {
    return {
      type: types.GET_DOCUMENTS_INITIAL_STATE,
      payload: null
    };
  },
  getDocumentsLoading: function () {
    return {
      type: types.GET_DOCUMENTS_LOADING,
      payload: null
    };
  },
  getDocumentsFulfilled: function (response) {
    return {
      type: types.GET_DOCUMENTS_FULFILLED,
      payload: response
    };
  },
  getDocumentsRejected: function (response) {
    return {
      type: types.GET_DOCUMENTS_REJECTED,
      payload: response
    };
  },
  downloadDocument: function (document, preview) {
    if (preview === void 0) {
      preview = false;
    }

    return {
      type: types.DOWNLOAD_DOCUMENT,
      payload: null,
      document: document,
      preview: preview
    };
  },
  downloadDocumentInitialState: function () {
    return {
      type: types.DOWNLOAD_DOCUMENT_INITIAL_STATE,
      payload: null
    };
  },
  downloadDocumentLoading: function () {
    return {
      type: types.DOWNLOAD_DOCUMENT_LOADING,
      payload: null
    };
  },
  downloadDocumentFulfilled: function (response) {
    return {
      type: types.DOWNLOAD_DOCUMENT_FULFILLED,
      payload: response
    };
  },
  downloadDocumentRejected: function (response) {
    return {
      type: types.DOWNLOAD_DOCUMENT_REJECTED,
      payload: response
    };
  }
});