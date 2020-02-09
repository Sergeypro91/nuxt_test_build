<template>
  <el-card shadow="hower" :body-style="{ padding: 0 }" class="post">
    <header slot="header" class="post-header">
      <h3>{{ post.title }}</h3>
      <small>{{ new Date(post.date).toLocaleString() }}</small>
    </header>

    <div class="post-body">
      <img :src="post.imageUrl" alt="post img" class="post-img" />
    </div>

    <footer class="post-footer">
      <el-button round @click="openPoast">Открыть</el-button>
      <span>
        <i class="el-icon-chat-line-square">{{ post.comments.length }}</i>
      </span>
    </footer>
  </el-card>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },

  methods: {
    openPoast() {
      const id = this.post._id
      this.$router.push(`/post/${id}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.post {
  margin-bottom: 1.5rem;
}
.post-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.post-img {
  width: 100%;
}
.post-footer {
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
