<template>
  <div class="home">
    {{ name }}
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { mapState } from 'pinia'
import userStore from '@/stores/user'

export default {
  name: 'HomeView',

  components: {
    HelloWorld
  },
  // 不同元件, 資料都使用 store 方式傳遞
  // 資料都由 store 管理
  computed: {
    ...mapState(userStore, ['name'])
  }
}
</script>
