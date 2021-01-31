import * as actionTypes from "./fetchActionMoviesActions";

export const reqActionsInit = () => {
  return {
    type: actionTypes.REQUEST_ACTIONS_INIT,
  };
};

export const reqActionsSuccess = (data) => {
  return {
    type: actionTypes.REQUEST_ACTIONS_SUCCESS,
    payload: data,
  };
};
export const reqActionsFailed = (error) => {
  return {
    type: actionTypes.REQUEST_ACTIONS_FAILED,
    error: error,
  };
};

export const fetchActionsInit = (path) => {
  return {
    type: actionTypes.FETCH_ACTIONS_INIT,
    endPoint: path,
  };
};
