import { put } from "redux-saga/effects";
import axios from "../../apis/axios";
import {
  reqTrendingsFailed,
  reqTrendingsSuccess,
  reqTrendingsInit,
} from "./fetchTrendingsActionCreators";

export function* fetchTrendingsSaga(action) {
  yield put(reqTrendingsInit);
  try {
    const res = yield axios.get(action.endPoint);
    yield put(reqTrendingsSuccess(res.data.results));
  } catch (error) {
    yield put(reqTrendingsFailed(error));
  }
}
