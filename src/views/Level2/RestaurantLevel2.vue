<!-- 顯示餐廳對話的內容和選項，顯示單個超市對話的組件 -->

<template>
  <div>
    <h2>{{ 餐廳對話 }}</h2><!-- 顯示餐廳對話的標題 -->
    <label>
      <input type="radio" :value="restaurantOption1.isCorrect" v-model="selectedOption" />
      {{ restaurantOption1.text }}
    </label>
    <label>
      <input type="radio" :value="restaurantOption2.isCorrect" v-model="selectedOption" />
      {{ restaurantOption2.text }}
    </label>
    <!-- 顯示使用者選擇的選項 -->
    <p>你選擇的是：{{ selectedOption }}</p>
    <!-- 顯示回答語句 -->
    <p>回答語句：{{ answer }}</p>
  </div>
</template>


<script setup>
import { reactive } from 'vue';

const { props } = __unplugin_components_0;

let selectedOption = '';
</script>