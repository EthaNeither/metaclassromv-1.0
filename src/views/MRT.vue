
<template>
    <div id="classWrapper">
        <div id="blocker">
            <div id="instructions">
                <div class="loading-bar">
                    <label id="progress-text" for="progress-bar">Loading...</label>
                    <progress id="progress-bar" value="0" max="100"></progress>
                </div>
                <p>
                    click to start
                </p>
                <button @click="goToLobby" id="lobbyButton">前往主畫面</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive, onMounted } from '@vue/runtime-core';
import test from '../utils/MRT.js';
import { useRouter } from 'vue-router';
import MRTLevel2 from '/src/views/Level2/MRTLevel2.vue';
import MRTdialogData from '/src/views/Level2/MRTdialogData.js';

const router = useRouter();
const goToLobby = () => {
  // 使用路由導航到Lobby頁面
  router.push({ name: 'lobby' });
};

let obj;
let src = reactive({
    url: undefined
});

onMounted(() => {
    obj = reactive(new test());
});

// 不需要 return

</script>

<style>
.loading-bar {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    background-color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
#lobbyButton {
  position: absolute;
  left: 50%;
  bottom: 10%; /* 調整此處值以達到您想要的位置 */
  color: white; /* 改為白色字體，以在深色背景上顯示 */
  font-size: 2rem;
  transform: translateX(-50%); /* 使用translateX調整按鈕位置到中心 */
  background-color: transparent; /* 移除底色 */
  border: none; /* 移除邊框 */
  cursor: pointer;
}

#progress-text {
    color: white;
    font-size: 2rem;
}

#progress-bar {
    width: 30%;
    margin-top: 0.5%;
    height: 2%;
}

#classWrapper {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 100%;
    position: absolute;
}
</style>