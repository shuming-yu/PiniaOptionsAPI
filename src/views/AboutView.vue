<template>
  <div class="about">
    <h3>Options API 一般是將資料狀態儲存在 data()，在畫面中才能以雙向綁定的方式更改資料，改為使用 Pinia 後，要運用其中</h3>
    <h3>資料並呈現在畫面中，就可以使用 computed，這樣當狀態有更動時可以即時更新畫面中的資料</h3>
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
