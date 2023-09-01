<template>
    <div id="classWrapper">

        <div id="blocker">
            <div id="instructions">
                <div class="loading-bar">
                    <label id="progress-text" for="progress-bar">Loading...</label>
                    <progress id="progress-bar" value="0" max="100"></progress>
                </div>
                <div class="centered-text top-text">
                    <p>練習使用售票機服務</p>
                </div>
                <div class="mid-button">
                        <button class="instruction-background">悠遊卡加值</button>
                        <button class="instruction-background">購買單程票</button>
                        <button class="instruction-background">購買定期票</button>
                </div>
                <div class="centered-text bottom-text">
                    <p>請選擇服務項目</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { reactive, onMounted } from '@vue/runtime-core'
import test from '@/utils/MRT.js'
export default {
    setup() {
        let obj
        let src = reactive({
            url: undefined
        })
        onMounted(() => {
            obj = reactive(new test())
        })
        return {
            obj, src,
        }
    }
}
</script>
<style>
#app {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

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

.top-text {
    /*進入場景文字*/
    position: absolute;
    bottom: 30%;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    margin-bottom: 10px;
}

.centered-text {
    /*文字*/
    text-align: center;
    font-size: 1.8rem;
    margin-top: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
}

.instruction-background {
    /*操作背景*/
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 5px;
    border-radius: 10px;
    text-align: center;
    margin-top: 20px;
    width: 40%;
    height: 180px;
    position: relative;
    top: -50px;
    font-size: 2rem;
    margin: 20px 20px;
}

.mid-button {
    display: flex;
    width: 60%;
    margin-top: 40px;
    position: relative;
    top: -10px;
}

.bottom-text {
    /*目標*/
    position: absolute;
    top: 18%;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 10px;
    text-align: center;
}</style>