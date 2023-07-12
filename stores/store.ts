import { configureStore } from "@reduxjs/toolkit";
import NewsSlice from "@/reducers/newsSlice";
import rootSaga from "@/sagas/saga";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import createSagaMiddleware from "redux-saga";

// Tạo middleware Saga
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    newsReducer: NewsSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

// Chạy saga
sagaMiddleware.run(rootSaga);

export type IAppStateRedux = ReturnType<typeof store.getState>
//IAppStateRedux để đại diện cho kiểu dữ liệu của state trong store. 
//Kiểu này được xác định bằng cách sử dụng hàm ReturnType để lấy kiểu dữ liệu trả về của phương thức store.getState().
export const useAppSelector: TypedUseSelectorHook<IAppStateRedux> = useSelector

export default store