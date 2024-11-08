import request from "./request";

export async function getBanner() {
  const e = await request.get("/api/banner");
  console.log(e, "相应结果");
}
getBanner();
// return;
// async function getNews() {
//   // axios.get()
//   // 跨域代理事例
//   const e = await axios.get("/commercial_api/banners_v3/home_up?");
//   console.log(e.data);
// }

// getNews();
