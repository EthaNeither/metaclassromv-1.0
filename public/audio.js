import * as THREE from 'three'


function playy() {
    const listener = new THREE.AudioListener();
        this.camera.add(this.listener);

        const sound = new THREE.Audio(this.listener);
        const Loader = new THREE.AudioLoader();
        //const backgroundSound = new THREE.Audio( listener );
        Loader.load('./howmuch.mp3', (buffer) => {
            sound.setBuffer(buffer);
            //sound.setLoop(true);
            sound.setVolume(1);
            sound.play();
        });
    }
    export { playy };