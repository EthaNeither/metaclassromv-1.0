<!-- 顯示捷運對話的內容和選項，顯示單個超市對話的組件 -->

<template>
  <div>
    <h2>{{ 捷運對話 }}</h2>
    <label>
      <!-- 在使用者選擇某個選項後，將相關的程式碼或資料複製 -->
      <input type="radio" :value="option1" v-model="selectedOption" /> {{ option1 }}
    </label>
    <label>
      <input type="radio" :value="option2" v-model="selectedOption" /> {{ option2 }}
    </label>
    <p>你選擇的是：{{ selectedOption }}</p>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

const { props } = __unplugin_components_0;

let selectedOption = '';
</script>
