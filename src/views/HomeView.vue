<template>
  <el-container>
    <el-header>
      <h1>智慧物业管理</h1>
      <!-- HeaderComp组件 -->
    </el-header>
    <el-container>
      <el-aside width="200px">
        <!-- 侧边导航 -->
        <aside-comp />
      </el-aside>
      <el-main>
        <!-- home二级路由  主要显示区域  在home的childre配置 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import AsideComp from "../components/AsideComp.vue";
export default {
  components: { AsideComp },
  methods: {},
};
</script>

<style scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  line-height: 20px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>