import { handleActions } from 'redux-actions';
import { setIsFetching, setToken, unsetToken, setError } from './actions';
import { setAccountVerified } from '../userAccount/actions';

const initialState = {
  token: '',
  _fetching: false,
  _error: null,
};

const handleToken = (state, action) => {
  return {
    token: action.payload.token,
    _fetching: false,
    _error: null,
  };
};

export const reducer = handleActions({
  [setIsFetching]: (state) => {
    return {
      ...state,
      _fetching: true,
      _error: null,
    };
  },

  [setToken]: handleToken,
  [setAccountVerified]: handleToken,

  [unsetToken]: () => initialState,

  [setError]: (state, action) => {
    return {
      ...state,
      _fetching: false,
      _error: action.payload.response,
    };
  },
}, initialState);

export default reducer;