import * as actionTypes from "./fetchNetflixOriginalsActions";
import axios from "../../apis/axios";

export const reqInit = () => {
  return {
    type: actionTypes.REQUEST_INIT,
  };
};

export const reqSuccess = (data) => {
  return {
    type: actionTypes.REQUEST_SUCCESS,
    payload: data,
  };
};
export const reqFailed = (error) => {
  return {
    type: actionTypes.REQUEST_FAILED,
    error: error,
  };
};

export const fetchData = (path) => {
  return (dispatch) => {
    dispatch(reqInit);
    axios
      .get(path)
      .then((res) => dispatch(reqSuccess(res.data.results)))
      .catch((error) => dispatch(reqFailed(error)));
  };
};
