import axios from "axios";

const request = axios.create({});
// 相应拦截器
request.interceptors.response.use(function (resp) {
  console.log(resp, "运行了拦截器");
  if (resp.code != 0) {
    // 错误吹
    return null;
  }

  return resp;
});

export default request;
