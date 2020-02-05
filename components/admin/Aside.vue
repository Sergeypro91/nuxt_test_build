<template>
  <el-menu :style="{ height: '100%' }" :default-active="$route.path" router>
    <el-menu-item index="/admin">
      <i class="el-icon-data-analysis"></i>
      <span>Analitic</span>
    </el-menu-item>

    <el-menu-item index="/admin/create">
      <i class="el-icon-folder-add"></i>
      <span>Create</span>
    </el-menu-item>

    <el-menu-item index="/admin/list">
      <i class="el-icon-tickets"></i>
      <span>Posts</span>
    </el-menu-item>

    <el-menu-item index="/admin/user">
      <i class="el-icon-user"></i>
      <span>Users</span>
    </el-menu-item>

    <el-menu-item index="/admin/logout">
      <i class="el-icon-switch-button"></i>
      <span>Logout</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo {
  height: 100%;
}
</style>
