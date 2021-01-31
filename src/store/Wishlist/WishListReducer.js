import * as actionTypes from "./WishListActions";

const initialState = {
  data: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PUSH_MOVIES:
      const checkIfExist = state.data.findIndex(
        (movie) => movie.id === action.payload?.id
      );
      if (checkIfExist !== -1) {
        return state;
      }
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case actionTypes.REMOVE_MOVIES:
      return {
        ...state,
        data: state.data.filter((movie) => movie.id !== action.payload?.id),
      };
    default:
      return state;
  }
};

export default reducer;
