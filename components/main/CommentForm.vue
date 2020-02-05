<template>
  <el-form
    :model="controls"
    :rules="rules"
    ref="form"
    @submit.native.prevent="onSubmit"
  >
    <h1>Leave a Comment!</h1>

    <el-form-item label="Activity name" prop="name">
      <el-input v-model.trim="controls.name"></el-input>
    </el-form-item>

    <el-form-item label="Comment" prop="text">
      <el-input
        v-model.trim="controls.text"
        type="textarea"
        resize="none"
        :rows="2"
      ></el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" native-type="submit" :loading="loading"
        >Add Comment</el-button
      >
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      loading: false,

      controls: {
        name: '',
        text: ''
      },

      rules: {
        name: [
          {
            required: true,
            message: 'Please input Activity name',
            trigger: 'blur'
          }
        ],
        text: [
          {
            required: true,
            message: 'Please input your comment',
            trigger: 'change'
          }
        ]
      }
    }
  },

  methods: {
    onSubmit() {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.loading = true

          const formData = {
            name: this.controls.name,
            text: this.controls.text,
            postId: ''
          }

          try {
            this.$message.success('Comment is added')
            this.$emit('created')
          } catch (e) {
            this.loading = false
          }
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>
