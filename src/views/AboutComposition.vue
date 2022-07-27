<template>
  <div class="about">
    <h2>Composition API 有提供 refs 和 reactive 的響應式物件寫法，因此由 Pinia 取出的資料狀態都可以直接更動並更新至畫面中</h2>
  </div>
  <!-- F12 查看 About View -> Components 選項改為 Pinia, 檢視參數也可修改 -->
  {{ user.name }}
  <br>
  {{ user.getUserNmae }}
  <br>
  {{ user.wallet }}

  <button type="button" @click="user.updateName">按我!!</button>
</template>

<script>
import userStore from "@/stores/user";

// Composition API
export default {
  setup() {
    const user = userStore();
    // reactive
    user.name = '帥哥Ben';
    return {
      user
    }
  }
}
</script>
