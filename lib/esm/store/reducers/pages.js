import { fromJS } from 'immutable';
import { pageActions } from '../actions';
import stateUtility from '../../utilities/stateUtility';
var initialState = fromJS({
  list: stateUtility.getPaginationInitialState()
});
export default (function (state, action) {
  if (state === void 0) {
    state = initialState;
  }

  switch (action.type) {
    //  list
    case pageActions.GET_PAGES_LOADING:
      return state.merge({
        list: stateUtility.getPaginationLoading()
      });

    case pageActions.GET_PAGES_FULFILLED:
      return state.merge({
        list: stateUtility.getPaginationFulfilled(action.payload.data)
      });

    case pageActions.GET_PAGES_REJECTED:
      return state.merge({
        list: stateUtility.getPaginationRejected(action.payload)
      });

    case pageActions.SET_PAGE_IMAGE:
      var pageId_1 = action.pageId,
          image = action.image;
      var pages = state.toJS().list;
      var pageIndex = pages.data.findIndex(function (page) {
        return page.id === pageId_1;
      });
      pages.data[pageIndex].images.push(image.data);
      return state.merge({
        list: pages
      });

    default:
      return state;
  }
});