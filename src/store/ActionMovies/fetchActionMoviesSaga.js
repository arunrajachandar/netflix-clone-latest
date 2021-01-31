import { put } from "redux-saga/effects";
import axios from "../../apis/axios";
import {
  reqActionsFailed,
  reqActionsInit,
  reqActionsSuccess,
} from "./fetchActionMoviesActionCreators";

export function* fetchActionMoviesSaga(action) {
  yield put(reqActionsInit);
  try {
    const res = yield axios.get(action.endPoint);
    yield put(reqActionsSuccess(res.data.results));
  } catch (error) {
    yield put(reqActionsFailed(error));
  }
}
