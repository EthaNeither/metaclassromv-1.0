<!--管理選項的內容、使用者互動和顯示。定義選項、監聽使用者的選擇並更新-->
<template>
  <div>
    <h2>{{ 超市對話 }}</h2>
    <!-- 顯示3D選項框 -->
    <div id="three-scene-wrapper"></div>
    <div id="options-container">
      <div class="option-box" :id="currentQuestion.options[0].id" @click="checkAnswer(currentQuestion.options[0])">{{ currentQuestion.options[0].text }}</div>
      <div class="option-box" :id="currentQuestion.options[1].id" @click="checkAnswer(currentQuestion.options[1])">{{ currentQuestion.options[1].text }}</div>
    </div>
    <p>你選擇的是：{{ selectedOption }}</p>
    <!-- 顯示回答語句 -->
    <p v-if="selectedOption">{{ selectedOption.isCorrect ? '正確' : '錯誤' }}</p>
    <button @click="nextQuestion">下一題組</button>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import SupermarketdialogData from '/src/views/Level2/SupermarketdialogData.js';
//import initThreeScene from '/src/views/Level2/ThreeScene.js'; 

const selectedOption = ref('');//使用者選擇的
const currentQuestionIndex = ref(0);//問題索引
//題庫
const questionBanks = ref([
  SupermarketdialogData.questionBank1,
  SupermarketdialogData.questionBank2
]);
//題庫值
const currentQuestionBankIndex = ref(0);
//現在的題庫
const currentQuestionBank = computed(() => {
  return questionBanks.value[currentQuestionBankIndex.value];
});
//獲取當前的問題文本和選項
const currentQuestion = computed(() => {
  return currentQuestionBank.value[currentQuestionIndex.value];
});

const nextQuestion = () => {
  // 更新題目索引，確保不超出範圍
  if (currentQuestionIndex.value < currentQuestionBank.value.length - 1) {
    currentQuestionIndex.value++;
  } else {
    // 如果已經是最後一題，返回主畫面
    router.push({ name: 'lobby' });
  }
};

const changeQuestionBank = () => {
  // 切換到下一個題庫
  currentQuestionBankIndex.value = (currentQuestionBankIndex.value + 1) % questionBanks.value.length;
  // 重置題目索引
  currentQuestionIndex.value = 0;
};
const checkAnswer = (option) => {
  selectedOption.value = option;
};

// onMounted(() => {
//   const { scene, camera, renderer, optionBox1, optionBox2 } = initThreeScene();

//   // 確保將渲染器的 DOM 元素添加到頁面中
//   const sceneContainer = document.querySelector('#three-scene-wrapper');
//   if (sceneContainer) {
//     sceneContainer.appendChild(renderer.domElement);
//   }

//   // 確保將選項框的 DOM 元素添加到頁面中
//   const optionsContainer = document.querySelector('#options-container');
//   if (optionsContainer) {
//     optionsContainer.appendChild(optionBox1);
//     optionsContainer.appendChild(optionBox2);
//   }

//   // 根據用戶選擇，設置selectedOption和answer
//   const optionBoxes = [optionBox1, optionBox2];

//   optionBoxes.forEach((box) => {
//     box.addEventListener('click', () => {
//       const selectedOptionData = currentQuestion.options.find(option => option.id.toString() === box.id);

//       if (selectedOptionData) {
//         selectedOption.value = selectedOptionData.text;
//         answer.value = selectedOptionData.isCorrect ? 'O' : 'X';
//       }
//     });
//   });

//   // 渲染場景
//   function animate() {
//     requestAnimationFrame(animate);
//     renderer.render(scene, camera);
//   }
//   animate();
// });
</script>

<style scoped>
.option-box {
  display: inline-block;
  margin: 5px;
  padding: 10px;
  border: 1px solid #ccc;
  cursor: pointer;
}
</style>