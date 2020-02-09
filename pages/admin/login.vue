<template>
  <el-card shadow="always" :style="{ width: '500px' }">
    <el-form
      :model="controls"
      :rules="rules"
      ref="form"
      @submit.native.prevent="onSubmit"
    >
      <h2>Login</h2>

      <el-form-item label="User name" prop="login">
        <el-input v-model.trim="controls.login"></el-input>
      </el-form-item>

      <el-form-item label="Password" prop="password">
        <el-input v-model.trim="controls.password" type="password"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" native-type="submit" :loading="loading"
          >Login</el-button
        >
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
export default {
  layout: 'empty',

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

  mounted() {
    const { message } = this.$route.query

    switch (message) {
      case 'login':
        this.$message.error('Pleas Login first!')
        break
      case 'logout':
        this.$message.success('You have bean Logout!')
        break
      case 'session':
        this.$message.warning('Session time is end, please login again!')
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

            await this.$store.dispatch('auth/login', formData)
            this.$router.push('/admin')
          } catch (e) {
            this.loading = false
          }
        }
      })
    }
  }
}
</script>

<style></style>
