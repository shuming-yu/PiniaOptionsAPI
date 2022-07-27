<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <!-- F12 查看 About View -> Components 選項改為 Pinia, 檢視參數也可修改 -->
  {{ name }}
  <br>
  {{ getUserNmae }}
  <br>
  {{ wallet }}

  <button type="button" @click="updateName">按我!!</button>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import userStore from '@/stores/user'

// Options API
export default {
  computed: {
    // mapState 帶入參數 :
    // 1. Store
    // 2. 要帶入的 State, Getters
    ...mapState(userStore, ['name', 'getUserNmae', 'wallet'])
  },
  methods: {
    ...mapActions(userStore, ['updateName'])
  }
}
</script>
