import { fromJS } from 'immutable';
import { accountActions } from '../actions';
import stateUtility from '../../utilities/stateUtility';
var initialState = fromJS({
  list: stateUtility.getPaginationFromLocalStorage('accountList'),
  item: stateUtility.getItemInitialState(),
  users: stateUtility.getPaginationInitialState(),
  defaultAccount: stateUtility.getItemFromLocalStorage('defaultAccount'),
  setDefaultAccount: stateUtility.getObserverInitialState(),
  createAccount: stateUtility.getItemInitialState(),
  deleteAccountMember: stateUtility.getObserverInitialState(),
  updateAccountMember: stateUtility.getObserverInitialState(),
  updateAccount: stateUtility.getObserverInitialState(),
  updatePhoto: stateUtility.getObserverInitialState(),
  invoices: stateUtility.getPaginationInitialState()
});
export default (function (state, action) {
  if (state === void 0) {
    state = initialState;
  }

  switch (action.type) {
    //  item
    case accountActions.SHOW_ACCOUNT_INITIAL_STATE:
      return state.merge({
        item: stateUtility.getItemInitialState()
      });

    case accountActions.SHOW_ACCOUNT_LOADING:
      return state.merge({
        item: stateUtility.getItemLoading()
      });

    case accountActions.SHOW_ACCOUNT_FULFILLED:
      var item = action.payload.data;
      return state.merge({
        item: stateUtility.getItemFulfilled(item)
      });

    case accountActions.SHOW_ACCOUNT_REJECTED:
      return state.merge({
        item: stateUtility.getItemRejected(action.payload)
      });
    //  users

    case accountActions.LOAD_ACCOUNT_USERS_INITIAL_STATE:
      return state.merge({
        users: stateUtility.getPaginationInitialState()
      });

    case accountActions.LOAD_ACCOUNT_USERS_LOADING:
      return state.merge({
        users: stateUtility.getPaginationLoading()
      });

    case accountActions.LOAD_ACCOUNT_USERS_FULFILLED:
      var accountUsers = action.payload.data;
      return state.merge({
        users: stateUtility.getPaginationFulfilled(accountUsers)
      });

    case accountActions.LOAD_ACCOUNT_USERS_REJECTED:
      return state.merge({
        users: stateUtility.getPaginationRejected(action.payload)
      });
    //  accounts

    case accountActions.LOAD_ACCOUNTS_INITIAL_STATE:
      return state.merge({
        list: stateUtility.getPaginationInitialState()
      });

    case accountActions.LOAD_ACCOUNTS_LOADING:
      return state.merge({
        list: stateUtility.getPaginationLoading()
      });

    case accountActions.LOAD_ACCOUNTS_FULFILLED:
      var accountList = action.payload.data;
      window.localStorage.setItem('accountList', JSON.stringify(accountList));
      return state.merge({
        list: stateUtility.getPaginationFulfilled(accountList)
      });

    case accountActions.LOAD_ACCOUNTS_REJECTED:
      return state.merge({
        list: stateUtility.getPaginationRejected(action.payload)
      });
    //  getDefaultAccount

    case accountActions.LOAD_DEFAULT_ACCOUNT_INITIAL_STATE:
      return state.merge({
        defaultAccount: stateUtility.getItemInitialState()
      });

    case accountActions.LOAD_DEFAULT_ACCOUNT_LOADING:
      return state.merge({
        defaultAccount: stateUtility.getItemLoading()
      });

    case accountActions.LOAD_DEFAULT_ACCOUNT_FULFILLED:
      var getDefaultAccountResponse = action.payload.data;
      window.localStorage.setItem('defaultAccount', JSON.stringify(getDefaultAccountResponse));
      return state.merge({
        defaultAccount: stateUtility.getItemFulfilled(getDefaultAccountResponse)
      });

    case accountActions.LOAD_DEFAULT_ACCOUNT_REJECTED:
      return state.merge({
        defaultAccount: stateUtility.getItemRejected(action.payload)
      });
    //  setDefaultAccount

    case accountActions.SET_DEFAULT_ACCOUNT_INITIAL_STATE:
      return state.merge({
        setDefaultAccount: stateUtility.getObserverInitialState()
      });

    case accountActions.SET_DEFAULT_ACCOUNT_LOADING:
      return state.merge({
        setDefaultAccount: stateUtility.getObserverLoading()
      });

    case accountActions.SET_DEFAULT_ACCOUNT_FULFILLED:
      var setDefaultAccountResponse = action.payload.data;
      window.localStorage.setItem('defaultAccount', JSON.stringify(setDefaultAccountResponse));
      return state.merge({
        setDefaultAccount: stateUtility.getObserverFulfilled(),
        defaultAccount: stateUtility.getItemFulfilled(setDefaultAccountResponse)
      });

    case accountActions.SET_DEFAULT_ACCOUNT_REJECTED:
      return state.merge({
        setDefaultAccount: stateUtility.getObserverRejected(action.payload)
      });
    //  createAccount

    case accountActions.CREATE_ACCOUNT_INITIAL_STATE:
      return state.merge({
        createAccount: stateUtility.getItemInitialState()
      });

    case accountActions.CREATE_ACCOUNT_LOADING:
      return state.merge({
        createAccount: stateUtility.getItemLoading()
      });

    case accountActions.CREATE_ACCOUNT_FULFILLED:
      var createAccountResponse = action.payload.data;
      return state.merge({
        createAccount: stateUtility.getItemFulfilled(createAccountResponse)
      });

    case accountActions.CREATE_ACCOUNT_REJECTED:
      return state.merge({
        createAccount: stateUtility.getItemRejected(action.payload)
      });
    //  deleteAccountMember

    case accountActions.DELETE_ACCOUNT_MEMBER_INITIAL_STATE:
      return state.merge({
        deleteAccountMember: stateUtility.getObserverInitialState()
      });

    case accountActions.DELETE_ACCOUNT_MEMBER_LOADING:
      return state.merge({
        deleteAccountMember: stateUtility.getObserverLoading()
      });

    case accountActions.DELETE_ACCOUNT_MEMBER_FULFILLED:
      return state.merge({
        deleteAccountMember: stateUtility.getObserverFulfilled()
      });

    case accountActions.DELETE_ACCOUNT_MEMBER_REJECTED:
      return state.merge({
        deleteAccountMember: stateUtility.getObserverRejected(action.payload)
      });
    //  updateAccountMember

    case accountActions.UPDATE_ACCOUNT_MEMBER_INITIAL_STATE:
      return state.merge({
        updateAccountMember: stateUtility.getObserverInitialState()
      });

    case accountActions.UPDATE_ACCOUNT_MEMBER_LOADING:
      return state.merge({
        updateAccountMember: stateUtility.getObserverLoading()
      });

    case accountActions.UPDATE_ACCOUNT_MEMBER_FULFILLED:
      return state.merge({
        updateAccountMember: stateUtility.getObserverFulfilled()
      });

    case accountActions.UPDATE_ACCOUNT_MEMBER_REJECTED:
      return state.merge({
        updateAccountMember: stateUtility.getObserverRejected(action.payload)
      });
    //  updateAccount

    case accountActions.UPDATE_ACCOUNT_INITIAL_STATE:
      return state.merge({
        updateAccount: stateUtility.getObserverInitialState()
      });

    case accountActions.UPDATE_ACCOUNT_LOADING:
      return state.merge({
        updateAccount: stateUtility.getObserverLoading()
      });

    case accountActions.UPDATE_ACCOUNT_FULFILLED:
      var updateAccountResponse = action.payload.data;
      var returnVal = {
        updateAccount: stateUtility.getObserverFulfilled(),
        item: stateUtility.getItemFulfilled(updateAccountResponse)
      };

      if (updateAccountResponse.id === state.toJS().defaultAccount.data.id) {
        window.localStorage.setItem('defaultAccount', JSON.stringify(updateAccountResponse));
        returnVal.defaultAccount = stateUtility.getItemFulfilled(updateAccountResponse);
      }

      return state.merge(returnVal);

    case accountActions.UPDATE_ACCOUNT_REJECTED:
      return state.merge({
        updateAccount: stateUtility.getObserverRejected(action.payload)
      });
    //  updatePhoto

    case accountActions.UPDATE_ACCOUNT_PHOTO_INITIAL_STATE:
      return state.merge({
        updatePhoto: stateUtility.getObserverInitialState()
      });

    case accountActions.UPDATE_ACCOUNT_PHOTO_LOADING:
      return state.merge({
        updatePhoto: stateUtility.getObserverLoading()
      });

    case accountActions.UPDATE_ACCOUNT_PHOTO_FULFILLED:
      return state.merge({
        updatePhoto: stateUtility.getObserverFulfilled()
      });

    case accountActions.UPDATE_ACCOUNT_PHOTO_REJECTED:
      return state.merge({
        updatePhoto: stateUtility.getObserverRejected(action.payload)
      });
    //  invoices

    case accountActions.GET_INVOICES_INITIAL_STATE:
      return state.merge({
        invoices: stateUtility.getPaginationInitialState()
      });

    case accountActions.GET_INVOICES_LOADING:
      return state.merge({
        invoices: stateUtility.getPaginationLoading()
      });

    case accountActions.GET_INVOICES_FULFILLED:
      return state.merge({
        invoices: stateUtility.getPaginationFulfilled(action.payload.data)
      });

    case accountActions.GET_INVOICES_REJECTED:
      return state.merge({
        invoices: stateUtility.getPaginationRejected(action.payload)
      });

    default:
      return state;
  }
});