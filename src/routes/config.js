//url路径--->views地址，那个路径对应的那个组件
export default {
  //导出
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("@/views/HomeView"),
      children: [],
    },
  ],
};
