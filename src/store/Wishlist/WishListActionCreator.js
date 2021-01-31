import * as actionTypes from "./WishListActions";

export const pushMovies = (data) => {
  console.log(data);
  return {
    type: actionTypes.PUSH_MOVIES,
    payload: data,
  };
};

export const removeMovies = (data) => {
  console.log(data);
  return {
    type: actionTypes.REMOVE_MOVIES,
    payload: data,
  };
};
