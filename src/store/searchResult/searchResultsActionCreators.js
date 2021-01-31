import * as actionTypes from "./searchResultActions";

export const captureKeyword = (keyword) => {
  return {
    type: actionTypes.CAPTURE_KEYWORD,
    keyword: keyword,
  };
};
