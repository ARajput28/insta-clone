import { AUTH, DATA_LIST, SEARCH, ADD_CART } from '../constant';

const initialState = {
  auth: false,
  dataList: [],
  search: '',
  totalData: null,
};

function app(state = initialState, { type, payload }) {
  switch (type) {
    case AUTH:
      return {
        ...state,
        auth: payload,
      };
    case DATA_LIST:
      return {
        ...state,
        dataList: payload,
      };
    case SEARCH:
      return {
        ...state,
        search: payload,
      };
    case ADD_CART:
      return {
        ...state,
        totalData: payload,
      };

    default:
      return state;
  }
}

export default app;
