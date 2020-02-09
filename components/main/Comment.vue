<template>
  <el-card class="comment">
    <div class="commetn-header">
      <span class="name">{{ comment.name }}</span>
      <span>{{ new Date(comment.date).toLocaleString() }}</span>
    </div>

    <div class="comment-text">{{ comment.text }}</div>
  </el-card>
</template>

<script>
export default {
  props: {
    comment: {
      type: Object,
      required: true
    }
  }
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
