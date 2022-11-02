<template>
  <div>
    <el-row class="tac">
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-menu-item index="1">
          <i class="el-icon-menu"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">小区管理</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-document"></i>
          <span slot="title">房屋管理</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">住户管理</span>
        </el-menu-item>
        <el-menu-item index="5">
          <i class="el-icon-setting"></i>
          <span slot="title">车位管理</span>
        </el-menu-item>
        <el-menu-item index="6">
          <i class="el-icon-setting"></i>
          <span slot="title">物业服务</span>
        </el-menu-item>
      </el-menu>
    </el-row>
  </div>
</template>

<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>