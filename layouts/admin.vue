<template>
  <div class="admin-layout-wrapp">
    <el-container>
      <el-aside width="250px">
        <AppAside />
      </el-aside>
      <el-main>
        <nuxt />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import AppAside from '@/components/admin/Aside'

export default {
  components: { AppAside }
}
</script>

<style lang="scss" scoped>
.admin-layout-wrapp {
  width: 100%;
}

aside {
  height: 100vh;
}
</style>
