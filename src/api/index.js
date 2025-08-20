import { createAxios } from '@/api/HttpService';

// 初始化Axios
const http = createAxios({
  baseURL: `${import.meta.env.VITE_API_URL}api`,
});

function successResponse(response) {
  if (response.config.responseType === 'blob') {
    return response;
  } else {
    return response.data;
  }
}

function errorResponse(error) {
  return Promise.reject(error);
}

//加入攔截器，axios response直接回傳data
http.axios.interceptors.response.use(successResponse);

export default http;
