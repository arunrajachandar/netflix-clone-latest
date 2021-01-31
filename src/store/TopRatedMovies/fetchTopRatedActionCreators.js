import * as actionTypes from "./fetchTopRatedActions";

export const reqTopRatedInit = () => {
  return {
    type: actionTypes.REQUEST_TOP_RATED_INIT,
  };
};

export const reqTopRatedSuccess = (data) => {
  return {
    type: actionTypes.REQUEST_TOP_RATED_SUCCESS,
    payload: data,
  };
};
export const reqTopRatedFailed = (error) => {
  return {
    type: actionTypes.REQUEST_TOP_RATED_FAILED,
    error: error,
  };
};

export const fetchTopRatedInit = (path) => {
  return {
    type: actionTypes.FETCH_TOP_RATED_INIT,
    endPoint: path,
  };
};
