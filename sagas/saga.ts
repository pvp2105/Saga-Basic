import { takeLatest, all, call, put } from "redux-saga/effects";
import { myNews, myTitles } from "@/reducers/newsSlice";
import { Post, Title } from "@/models";
import { ApiResponse, fetchDataNews, fetchDataDanhMuc } from "@/services/newsService";
import axios from "axios";

function* fetchNews(action: any) {
    const res: ApiResponse<Post> = yield call(fetchDataNews);
    if (res && res.data) {
        yield put(myNews(res.data));
    }
    console.log(res);
}

function* fetchTitles(action: any) {
    const res: ApiResponse<Title> = yield call(fetchDataDanhMuc);
    if (res && res.data) {
        yield put(myTitles(res.data));
    }
    console.log(res);
}

// Watcher saga để theo dõi action "FETCH_NEWS"
function* watchFetchNews() {
    yield takeLatest("FETCH_NEWS", fetchNews);
}
function* watchFetchTitles() {
    yield takeLatest("FETCH_TITLES", fetchTitles);
}

// Export root saga
export default function* rootSaga() {
    yield all([watchFetchNews(), watchFetchTitles()]);
}