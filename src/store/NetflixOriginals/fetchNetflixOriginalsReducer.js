import * as actionTypes from "./fetchNetflixOriginalsActions";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const fetchNetflixOriginalsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REQUEST_INIT:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case actionTypes.REQUEST_FAILED:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};
