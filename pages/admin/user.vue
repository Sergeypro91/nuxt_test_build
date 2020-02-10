<template>
  <el-form
    :model="controls"
    :rules="rules"
    ref="form"
    @submit.native.prevent="onSubmit"
  >
    <h2>Create new User</h2>

    <el-form-item label="User name" prop="login">
      <el-input v-model.trim="controls.login"></el-input>
    </el-form-item>

    <el-form-item label="Password" prop="password">
      <el-input v-model.trim="controls.password" type="password"></el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" native-type="submit" :loading="loading"
        >Create</el-button
      >
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  layout: 'admin',

  middleware: ['admin-auth'],

  head() {
    return {
      title: `Users create | ${process.env.appName}`
    }
  },

  data() {
    return {
      loading: false,

      controls: {
        login: '',
        password: ''
      },

      rules: {
        login: [
          {
            required: true,
            message: 'Please input your user name',
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: 'Please input your password',
            trigger: 'blur'
          },
          {
            min: 6,
            message: 'Password nead be no less then six character!',
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

          try {
            const formData = {
              login: this.controls.login,
              password: this.controls.password
            }

            await this.$store.dispatch('auth/createUser', formData)
            this.$message.success('New Users was added!')
            this.controls.login = ''
            this.controls.password = ''
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
form {
  width: 600px;
}
</style>
