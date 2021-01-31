import * as actionTypes from "./searchResultActions";

const initialState = {
  keyword: "",
};

const searchResultReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CAPTURE_KEYWORD:
      return {
        ...state,
        keyword: action.keyword,
      };
    default:
      return state;
  }
};

export default searchResultReducer;
