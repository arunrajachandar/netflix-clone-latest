import { takeEvery } from "redux-saga/effects";
import { fetchActionMoviesSaga } from "./fetchActionMoviesSaga";
import * as actionTypes from "./fetchActionMoviesActions";

export function* fetchActionMoviesSagaListener() {
  yield takeEvery(actionTypes.FETCH_ACTIONS_INIT, fetchActionMoviesSaga);
}
