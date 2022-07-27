import { defineStore } from 'pinia'

export default defineStore('User Store', {
  // Data
  state: () => ({
    name: 'Benjamin',
    wallet: '500'
  }),

  // Computed
  // (state) 對應上方 Data
  getters: {
    getUserNmae: (state) => `我的名字叫${state.name}`
  },

  // Methods
  actions: {
    // 可以使用 this
    updateName() {
      this.name = 'Tiffany'
    }
  }
})
