import * as actionTypes from "./fetchTrendingsActions";

export const reqTrendingsInit = () => {
  return {
    type: actionTypes.REQUEST_TRENDINGS_INIT,
  };
};

export const reqTrendingsSuccess = (data) => {
  return {
    type: actionTypes.REQUEST_TRENDINGS_SUCCESS,
    payload: data,
  };
};
export const reqTrendingsFailed = (error) => {
  return {
    type: actionTypes.REQUEST_TRENDINGS_FAILED,
    error: error,
  };
};

export const fetchTrendingsInit = (path) => {
  return {
    type: actionTypes.FETCH_TRENDINGS_INIT,
    endPoint: path,
  };
};

export const isAddedTrendings = (id) => {
  return {
    type: actionTypes.ISADDED_TRENDINGS,
    movieId: id,
  };
};
