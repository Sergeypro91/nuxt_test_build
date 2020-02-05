<template>
  <el-card shadow="always" :style="{ width: '500px' }">
    <el-form
      :model="controls"
      :rules="rules"
      ref="form"
      @submit.native.prevent="onSubmit"
    >
      <h1>Login</h1>

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

  methods: {
    onSubmit() {
      console.log('Submit!')
    }
  }
}
</script>

<style></style>
