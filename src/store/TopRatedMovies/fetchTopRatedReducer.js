import * as actionTypes from "./fetchTopRatedActions";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const fetchTopRatedReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REQUEST_TOP_RATED_INIT:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.REQUEST_TOP_RATED_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case actionTypes.REQUEST_TOP_RATED_FAILED:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};
