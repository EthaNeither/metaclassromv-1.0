//將選項的內容整合到 3D 場景中，以及根據用戶的選擇更新場景的狀態
import * as THREE from 'three';
//import SupermarketdialogData from '/src/views/Level2/SupermarketdialogData.js';
//import MRTdialogData from '/src/views/Level2/MRTdialogData.js';
//import RestaurantdialogData from '/src/views/Level2/RestaurantdialogData.js';

const initThreeScene = () => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
  
    // 創建選項框的幾何體和材質
    const optionGeometry1 = new THREE.BoxGeometry(4, 2, -5);
    const optionMaterial1 = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); // 選項框的顏色
    const optionGeometry2 = new THREE.BoxGeometry(4, 2, -5);
    const optionMaterial2 = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); // 選項框的顏色
  

    // 創建選項框的網格並添加到場景中
    const optionBox1 = new THREE.Mesh(optionGeometry1, optionMaterial1);
    optionBox1.position.set(-5, 2, -10); // 調整位置
    scene.add(optionBox1); // 將選項框添加到場景中

    const optionBox2 = new THREE.Mesh(optionGeometry2, optionMaterial2);
    optionBox2.position.set(5, 2, -10); // 調整位置
    this.scene.add(optionBox2); // 將選項框添加到場景中


    //設置點擊事件，切換場景並顯示相應對話
  //   optionBox1.addEventListener('click', () => {
  //     const currentScene = 'Supermarket'; // 假設切換到超市場景
  //     if (currentScene === 'Supermarket') {
  //         dialogContainer1.textContent = SupermarketdialogData[0].text;
  //     }
  // });

  // optionBox2.addEventListener('click', () => {
  //     const currentScene = 'Supermarket'; // 假設切換到超市場景
  //     if (currentScene === 'Supermarket') {
  //         dialogContainer2.textContent = SupermarketdialogData[1].text;
  //     }
  // });

  
    return { scene, camera, renderer, optionBox1, optionBox2 };
  };
  
  export default initThreeScene;