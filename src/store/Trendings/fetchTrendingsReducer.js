import * as actionTypes from "./fetchTrendingsActions";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const fetchTrendingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REQUEST_TRENDINGS_INIT:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.REQUEST_TRENDINGS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case actionTypes.ISADDED_TRENDINGS:
      const findInx = state.data?.findIndex(
        (movie) => movie?.id === action.movieId
      );
      console.log(findInx);
      const copyObject = state.data;
      copyObject[findInx].isAdded = copyObject[findInx].isAdded
        ? !copyObject[findInx].isAdded
        : true;
      console.log(copyObject);
      return {
        ...state,
        data: [...copyObject],
      };
    case actionTypes.REQUEST_TRENDINGS_FAILED:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};
