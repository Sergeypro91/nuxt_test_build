export const state = () => ({
  token: true
})

export const mutations = {
  setToken(state, token) {
    state.token = token
  },

  clearToken(state) {
    state.token = null
  }
}

export const actions = {
  async login({ commit, dispatch }, formData) {
    try {
      const token = await new Promise((resolve, reject) => {
        setTimeout(() => resolve('moc-token'), 2000)
      })

      dispatch('setToken', token)
    } catch (e) {
      commit('setError', e, { root: true })
      throw e
    }
  },

  async createUser({ commit }, formData) {
    try {
      console.log('Create User!', formData)
    } catch (e) {}
  },

  setToken({ commit }, token) {
    commit('setToken', token)
  },

  logout({ commit }, token) {
    commit('clearToken')
  }
}

export const getters = {
  iasAuthenticated: state => Boolean(state.token)
}
