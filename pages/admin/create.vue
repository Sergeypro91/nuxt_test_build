<template>
  <el-form
    :model="controls"
    :rules="rules"
    ref="form"
    @submit.native.prevent="onSubmit"
  >
    <h1>Create new Post</h1>

    <el-form-item label="Enter Post name" prop="title">
      <el-input v-model.trim="controls.title"></el-input>
    </el-form-item>

    <el-form-item label="Text in format .md or .html" prop="text">
      <el-input
        type="textarea"
        v-model="controls.text"
        resize="none"
        :rows="10"
      ></el-input>
    </el-form-item>

    <el-dialog title="Preview" :visible.sync="previewDialog">
      <div :key="controls.text">
        <vue-markdown>{{ controls.text }}</vue-markdown>
      </div>
    </el-dialog>

    <el-upload
      class="mb"
      drag
      ref="upload"
      action="https://jsonplaceholder.typicode.com/posts/"
      :on-change="handleImageChange"
      :auto-upload="false"
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">
        Drop file here or <em>click to upload</em>
      </div>
      <div class="el-upload__tip" slot="tip">
        jpg/png files with a size less than 500kb
      </div>
    </el-upload>

    <el-button type="success" plain @click="previewDialog = true">
      Preview loock
    </el-button>

    <el-form-item>
      <el-button type="primary" native-type="submit" :loading="loading"
        >Create Post</el-button
      >
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  layout: 'admin',

  middleware: ['admin-auth'],

  data() {
    return {
      image: null,
      previewDialog: false,
      loading: false,

      controls: {
        title: '',
        text: ''
      },

      rules: {
        title: [
          {
            required: true,
            message: 'Name of the Post canot be blanck',
            trigger: 'blur'
          }
        ],

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
        if (valid && this.image) {
          this.loading = true

          const formData = {
            title: this.controls.title,
            text: this.controls.text,
            image: this.image
          }

          try {
            await this.$store.dispatch('post/create', formData)
            this.controls.text = ''
            this.controls.title = ''
            this.image = null
            this.$refs.upload.clearFiles()
            this.$message.success('Post succsesful created')
            this.loading = false
          } catch (e) {
            this.loading = false
          }
        } else {
          this.$message.warning('Form is unvalid')
        }
      })
    },

    handleImageChange(file, fileList) {
      this.image = file.raw
    }
  }
}
</script>

<style lang="scss" scoped>
form {
  width: 600px;
}
</style>
