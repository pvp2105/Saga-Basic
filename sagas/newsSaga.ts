import { put, takeEvery } from 'redux-saga/effects';
import { fetchDataNews, ApiResponse } from '@/services/newsService';
import { myNews } from '@/reducers/newsSlice';

function* fetchDataNewsSaga() {
    try {
        const response: ApiResponse = yield fetchDataNews();
        if (response && response.data) {
            yield put(myNews(response.data));
        }
    } catch (error) {
        console.log(error);
    }
}

export function* watchFetchDataNews() {
    yield takeEvery('news/fetchDataNews', fetchDataNewsSaga);
}
