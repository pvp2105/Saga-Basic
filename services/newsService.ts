import axios from "./axiosInstance";
import { AxiosResponse } from "axios";

function fetchDataNews() {
  return axios.get('/TinTucHeThong/GetDanhSachTinTuc?cap_don_vi=4&loai_nguoi_dung=4&ma_so=shn&skip=0&limit=6');
}

function fetchDataDanhMuc() {
  return axios.get('/DanhMucTinTuc/GetDanhSachDanhMucTinTuc?skip=0&limit=5');
}

export interface ApiResponse<T = any> extends AxiosResponse {
  data: T;
  status: number;
  statusCode?: number;
}

export { fetchDataNews, fetchDataDanhMuc };
