<template>
  <div class="page-wrapp">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item to="/admin/list">Posts</el-breadcrumb-item>

      <el-breadcrumb-item>{{ post.title }}</el-breadcrumb-item>
    </el-breadcrumb>

    <el-form
      :model="controls"
      :rules="rules"
      ref="form"
      @submit.native.prevent="onSubmit"
    >
      <!-- <h2>Login</h2> -->

      <el-form-item label="Text in format .md or .html" prop="text">
        <el-input
          type="textarea"
          v-model.trim="controls.text"
          resize="none"
          :rows="10"
        ></el-input>
      </el-form-item>

      <div class="mb">
        <small>
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{
            new Date(post.date).toLocaleString()
          }}</span>
        </small>

        <small>
          <i class="el-icon-view"></i>
          <span>{{ post.views }}</span>
        </small>
      </div>

      <el-form-item>
        <el-button type="primary" native-type="submit" :loading="loading"
          >Uppdate</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  layout: 'admin',

  middleware: ['admin-auth'],

  head() {
    return {
      title: `Post | ${this.post.title}`
    }
  },

  validate({ params }) {
    return Boolean(params.id)
  },

  async asyncData({ store, params }) {
    const post = await store.dispatch('post/fetchAdminById', params.id)
    return { post }
  },

  data() {
    return {
      loading: false,

      controls: {
        text: ''
      },

      rules: {
        text: [
          {
            required: true,
            message: 'Please input your text',
            trigger: 'blur'
          }
        ]
      }
    }
  },

  methods: {
    onSubmit() {
      this.$refs.form.validate(async valid => {
        if (valid) {
          this.loading = true

          const formData = {
            text: this.controls.text,
            id: this.post._id
          }

          try {
            await this.$store.dispatch('post/update', formData)
            this.$message.success('Post was updated')
            this.loading = false
          } catch (e) {
            this.loading = false
          }
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.page-wrapp {
  width: 600px;
}
</style>
