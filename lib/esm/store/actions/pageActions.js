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
  GET_PAGES: '[pages] GET_PAGES',
  GET_PAGES_INITIAL_STATE: '[pages] GET_PAGES_INITIAL_STATE',
  GET_PAGES_LOADING: '[pages] GET_PAGES_LOADING',
  GET_PAGES_FULFILLED: '[pages] GET_PAGES_FULFILLED',
  GET_PAGES_REJECTED: '[pages] GET_PAGES_REJECTED',
  GET_PAGE_IMAGE: '[pages] GET_DOCUMENT_PAGE_IMAGE_URL',
  SET_PAGE_IMAGE: '[pages] SET_DOCUMENT_PAGE_IMAGE_URL'
};
export var pageActions = __assign(__assign({}, types), {
  getPages: function (packageId, documentId, successCb, errorCb) {
    if (successCb === void 0) {
      successCb = undefined;
    }

    if (errorCb === void 0) {
      errorCb = undefined;
    }

    return {
      type: types.GET_PAGES,
      payload: null,
      packageId: packageId,
      documentId: documentId,
      successCb: successCb,
      errorCb: errorCb
    };
  },
  getPagesInitialState: function () {
    return {
      type: types.GET_PAGES_INITIAL_STATE,
      payload: null
    };
  },
  getPagesLoading: function () {
    return {
      type: types.GET_PAGES_LOADING,
      payload: null
    };
  },
  getPagesFulfilled: function (response) {
    return {
      type: types.GET_PAGES_FULFILLED,
      payload: response
    };
  },
  getPagesRejected: function (response) {
    return {
      type: types.GET_PAGES_REJECTED,
      payload: response
    };
  },
  getPageImage: function (pageId, image_url, successCb, errorCb) {
    if (successCb === void 0) {
      successCb = undefined;
    }

    if (errorCb === void 0) {
      errorCb = undefined;
    }

    return {
      type: types.GET_PAGE_IMAGE,
      payload: null,
      pageId: pageId,
      image_url: image_url,
      successCb: successCb,
      errorCb: errorCb
    };
  },
  setPageImage: function (pageId, image) {
    return {
      type: types.SET_PAGE_IMAGE,
      payload: null,
      pageId: pageId,
      image: image
    };
  }
});