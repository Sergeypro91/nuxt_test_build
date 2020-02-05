<template>
  <article class="post">
    <header class="post-header">
      <div class="post-title">
        <h1>Post title</h1>
        <nuxt-link to="/">
          <i class="el-icon-back"></i>
        </nuxt-link>
      </div>

      <div class="post-info">
        <small>{{ new Date().toLocaleString() }}</small>

        <small>
          <i class="el-icon-view">42</i>
        </small>
      </div>

      <div class="post-image">
        <img src="@/assets/img/macdisplay.jpg" alt="post-image" />
      </div>
    </header>

    <main class="post-content">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, ipsa!
        Eaque mollitia, repellat quidem, facilis porro recusandae alias aliquam
        velit unde iusto atque est facere consequatur corrupti voluptates,
        perspiciatis quasi.
      </p>
    </main>

    <footer>
      <AppCommentForm v-if="canAddComment" @created="createCommentHandler" />

      <div class="comments" v-if="true">
        <AppComment v-for="comment in 4" :key="comment" :comment="comment" />
      </div>
      <div class="text-center" v-else>Комментариев нет</div>
    </footer>
  </article>
</template>

<script>
import AppComment from '@/components/main/Comment'
import AppCommentForm from '@/components/main/CommentForm'

export default {
  components: { AppComment, AppCommentForm },

  data() {
    return {
      canAddComment: true
    }
  },

  validate({ params }) {
    return Boolean(params.id)
  },

  methods: {
    createCommentHandler() {
      this.canAddComment = false
    }
  }
}
</script>

<style lang="scss" scoped>
.post {
  max-width: 600px;
  margin: 0 auto;
}

.post-title,
.post-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.post-info {
  margin-bottom: 0.5rem;
}

.post-image img {
  width: 100%;
}

.post-header {
  margin-bottom: 1.5rem;
}

.post-content {
  margin-bottom: 2rem;
}
</style>
