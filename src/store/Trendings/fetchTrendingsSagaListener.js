import { takeEvery } from "redux-saga/effects";
import { fetchTrendingsSaga } from "./fetchTrendingsSaga";
import * as actionTypes from "./fetchTrendingsActions";

export function* fetchTrendingsSagaListener() {
  yield takeEvery(actionTypes.FETCH_TRENDINGS_INIT, fetchTrendingsSaga);
}
