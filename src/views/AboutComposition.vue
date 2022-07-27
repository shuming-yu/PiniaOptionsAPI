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
  <br>
  {{ name }},{{ getUserNmae }},{{ wallet }}

  <button
    type="button"
    @click="updateName"
  >
    按我!!
  </button>
</template>

<script>
import userStore from "@/stores/user";
import { storeToRefs } from 'pinia';

// Composition API
export default {
  setup() {
    const user = userStore();
    // reactive
    // user.name = '帥哥Ben';

    // 解構形式取出
    const { name, wallet, getUserNmae } = storeToRefs(user); // 載入定義的 store
    console.log(name.value);
    name.value = 'Tommy';

    // 方法不需要雙向綁定, 可直接從 user 取出
    const { updateName } = user;
    return {
      user,
      name,
      wallet,
      getUserNmae,
      updateName
    }
  }
}
</script>
