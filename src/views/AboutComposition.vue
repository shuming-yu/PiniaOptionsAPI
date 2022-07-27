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
  <button
    type="button"
    @click="updateData"
  >
    updateData
  </button>
  <button
    type="button"
    @click="reset"
  >
    reset
  </button>
</template>

<script>
import userStore from "@/stores/user";
import { storeToRefs } from 'pinia';

// Composition API
export default {
  setup() {
    const user = userStore();
    // 方法一 : reactive 格式
    // user.name = '帥哥Ben';

    // 方法二 : ref 形式, 解構形式取出
    const { name, wallet, getUserNmae } = storeToRefs(user); // 載入定義的 store
    console.log(name.value);
    name.value = 'Tommy';

    // 方法三 : action 方式
    // 方法不需要雙向綁定, 可直接從 user 取出
    const { updateName } = user;

    // 方法四 : path, 許多參數需要更新可使用 patch 方法
    function updateData() {
      user.$patch({
        name: 'Nicky',
        wallet: 80,
      })
    }
    // 返回初始值 reset 方法
    function reset() {
      user.$reset();
    }

    return {
      user,
      name,
      wallet,
      getUserNmae,
      updateName,
      updateData,
      reset
    }
  }
}
</script>
