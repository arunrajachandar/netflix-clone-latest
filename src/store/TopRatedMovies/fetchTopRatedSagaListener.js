import { takeEvery } from "redux-saga/effects";
import { fetchTopRatedSaga } from "./fetchTopRatedSaga";
import * as actionTypes from "./fetchTopRatedActions";

export function* fetchTopRatedSagaListener() {
  yield takeEvery(actionTypes.FETCH_TOP_RATED_INIT, fetchTopRatedSaga);
}
