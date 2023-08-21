<template>
    <div id="classWrapper">
        <div id="blocker">
            <div id="instructions">
                <div class="loading-bar">
                    <label id="progress-text" for="progress-bar">Loading...</label>
                    <progress id="progress-bar" value="0" max="100"></progress>
                </div>
                <div class="text-container">
                <div class="top">
        <p>點擊播放，再進入參觀場景。</p>
          </div>
             <div class="note">
        <p>
         暫停、更換播放速度請按esc。
          </p>
          </div>
        <div class="play-audio-section">
         
          <p>買票對話:
          <audio controls id="audioPlayer">
            <source src="src/utils/捷運題庫一.m4a" type="audio/mpeg"> 
          </audio>
        </p>
          <p>加值對話:
          <audio controls id="audioPlayer">
            <source src="src/utils/捷運題庫二.m4a" type="audio/mpeg">
          </audio>
          </p>
            <p>詢問地點:
          <audio controls id="audioPlayer">
            <source src="src/utils/捷運題庫三.m4a" type="audio/mpeg">
          </audio>
          </p>  
        </div>
      </div>
                <button @click="goToLobby" id="lobbyButton">前往主畫面</button>
                <button @click="goToMRTLevel2" id="MRTLevel2Button">前往第二關</button>
            </div>
        </div>
    </div>
</template>
<script>
import { reactive, onMounted } from '@vue/runtime-core'
import test from '../utils/MRT.js'
import { useRouter } from 'vue-router';
export default {
  setup() {
    const router = useRouter();
    let obj;
    const goToLobby = () => {
      // 使用路由導航到Lobby頁面
      router.push({ name: 'lobby' });
    };
    const goToMRTLevel2=()=>{
      // 使用路由導航到level2頁面
      router.push({ name: 'MRTLevel2' });
    }
    onMounted(() => {
      obj = reactive(new test());
    });

    const state = reactive({});

    return {
      obj,
      goToLobby,
      goToMRTLevel2,
    };
  },
};
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
.top{
  font-size: 28px;
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
  white-space: nowrap; /* 不換行 */
}
.note{
    font-size: 20px;
  position: absolute;
  top: 19%;
  left: 50%;
  transform: translate(-50%, -50%);
  white-space: nowrap;
}
#audioPlayer {
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  height: 40px; 
  margin-bottom: 5px;
}
.play-audio-section {
  display: flex;
  justify-content: flex-end; 
  align-items: center;
  flex-direction: column; 
  margin-bottom: 5px;
  margin-right: 0px;
  text-align: center; 
}
.play-audio-section p {
  font-size: 20px; 
  margin: 0; 
  padding-top: 10px; 
}
.text-container {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 100px; 
    background-color: rgba(0, 0, 0, 0.7); 
    border-radius: 5px; 
    backdrop-filter: blur(5px); 
    color: white; 
    text-align: center;
}
#lobbyButton {
  position: absolute;
  left: 40%;
  bottom: 25%; 
  color: white; 
  font-size: 2rem;
  transform: translateX(-50%); 
  background-color: transparent; 
  border: none; 
  cursor: pointer;
}
#MRTLevel2Button {
  position: absolute;
  left: 60%;
  bottom: 25%; 
  color: white; 
  font-size: 2rem;
  transform: translateX(-50%); 
  background-color: transparent; 
  border: none; 
  cursor: pointer;
}

.button-container {
  text-align: center;
}

.prev-button,
.next-button {
  display: inline-block;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  background-color: #2b2a2a;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  box-shadow: none;
}

.prev-button:hover,
.next-button:hover {
  background-color: #868686;
  
}
</style>