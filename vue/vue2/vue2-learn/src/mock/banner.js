import Mock from "mockjs";

Mock.mock("/api/banner", "get", {
  code: 0,
  msg: "",
  data: "mock模拟数据",
});
Mock.setup({
  timeout: "200-600",
});
