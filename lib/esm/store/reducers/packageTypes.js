import { fromJS } from 'immutable';
import { packageTypeActions } from '../actions';
import stateUtility from '../../utilities/stateUtility';
var initialState = fromJS({
  list: stateUtility.getPaginationInitialState()
});
export default (function (state, action) {
  if (state === void 0) {
    state = initialState;
  } //  list


  switch (action.type) {
    case packageTypeActions.PACKAGE_TYPES_LOADING:
      return state.merge({
        list: stateUtility.getPaginationLoading()
      });

    case packageTypeActions.PACKAGE_TYPES_FULFILLED:
      return state.merge({
        list: stateUtility.getPaginationFulfilled(action.payload.data)
      });

    case packageTypeActions.SET_PACKAGE_TYPES_REJECTED:
      return state.merge({
        list: stateUtility.getPaginationRejected(action.payload)
      });

    default:
      return state;
  }
});