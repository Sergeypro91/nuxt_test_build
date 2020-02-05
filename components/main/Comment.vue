<template>
  <el-card class="comment">
    <div class="commetn-header">
      <span class="name">Persone name</span>
      <span>{{ new Date().toLocaleString() }}</span>
    </div>

    <div class="comment-text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, deleniti
      eaque facere est saepe necessitatibus.
    </div>
  </el-card>
</template>

<script>
export default {
  props: ['comment']
}
</script>

<style lang="scss" scoped>
.comment {
  margin-bottom: 1rem;
}

.commetn-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  font-size: 0.8rem;
}

.comment-text {
  word-spacing: pre-line;
}
</style>
