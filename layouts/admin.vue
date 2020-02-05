<template>
  <div class="admin-layout-wrapp">
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>
        <nuxt />
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.admin-layout-wrapp {
  width: 100%;
}

aside {
  height: 100vh;
}
</style>
