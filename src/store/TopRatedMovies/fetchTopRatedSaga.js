import { put } from "redux-saga/effects";
import axios from "../../apis/axios";
import {
  reqTopRatedFailed,
  reqTopRatedSuccess,
  reqTopRatedInit,
} from "./fetchTopRatedActionCreators";

export function* fetchTopRatedSaga(action) {
  yield put(reqTopRatedInit);
  try {
    const res = yield axios.get(action.endPoint);
    yield put(reqTopRatedSuccess(res.data.results));
  } catch (error) {
    yield put(reqTopRatedFailed(error));
  }
}
