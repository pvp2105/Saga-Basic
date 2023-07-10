import axios, { AxiosInstance, AxiosResponse } from "axios";

const instance: AxiosInstance = axios.create({
  baseURL: "http://api-tintuc.enetviet.com",
  timeout: 5000,  //ms
  // headers: {'X-Custom-Header': 'foobar'}

});

// Interceptor yêu cầu
instance.interceptors.request.use(
  (config) => {
    // Thêm tiêu đề xác thực vào yêu cầu
    const token = '3EC79C17-63ED-4166-BD58-04397B94312C'
    config.headers['Authorization'] = `${token}`;

    return config;
  },
  (error) => {
    // Xử lý lỗi
    return Promise.reject(error);
  }
);

// Interceptor phản hồi
instance.interceptors.response.use(
  function (response: AxiosResponse) {
    // Kiểm tra và xử lý phản hồi
    console.log(response.status);
    return response.data ? response.data : { statusCode: response.status };
  },
  function (error) {
    // Xử lý lỗi
    let res: AxiosResponse = {} as AxiosResponse;
    if (error.response) {
      res.data = error.response.data;
      res.status = error.response.status;
      res.headers = error.response.headers;
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log(error.message);
    }
    return res;
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
  }
);

export default instance;

