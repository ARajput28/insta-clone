import { AUTH, DATA_LIST, SEARCH, ADD_CART } from '../constant';

export const authAction = (auth) => (dispatch) => {
  dispatch({
    type: AUTH,
    payload: auth,
  });
};

export const handleDataAction = (auth) => (dispatch) => {
  dispatch({
    type: DATA_LIST,
    payload: auth,
  });
};

export const handleSearchAction = (auth) => (dispatch) => {
  dispatch({
    type: SEARCH,
    payload: auth,
  });
};

export const addCartAction = (auth) => (dispatch) => {
  dispatch({
    type: ADD_CART,
    payload: auth,
  });
};
