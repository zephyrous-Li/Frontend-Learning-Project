/**
 * 公共远程获取数据配置
 * 组件混入
 * 具体组件需要提供一个远程获取数据的方法  fetchData
 */
export default function (defaultDataValue = null) {
  return {
    data() {
      return {
        isLoading: true,
        data: defaultDataValue,
      };
    },
    async created() {
      await this.fetchData();
      this.isLoading = false;
    },
  };
}
