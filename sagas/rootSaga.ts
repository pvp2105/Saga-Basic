import { all } from 'redux-saga/effects';
import { watchFetchDataNews } from './newsSaga';

export default function* rootSaga() {
    yield all([
        watchFetchDataNews(),
        // Thêm các saga khác nếu cần thiết
    ]);
}
