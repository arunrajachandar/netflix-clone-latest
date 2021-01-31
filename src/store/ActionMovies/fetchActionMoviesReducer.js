import * as actionTypes from "./fetchActionMoviesActions";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const fetchActionMoviesActionReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case actionTypes.REQUEST_ACTIONS_INIT:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.REQUEST_ACTIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case actionTypes.REQUEST_ACTIONS_FAILED:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};
