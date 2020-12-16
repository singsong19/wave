import {
    WaveGroup
} from './wavegroup.js';
    //wave를 resize이벤트와 animate함수에 추가해서 안에 웨이브가 실행되도록

class App {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        document.body.appendChild(this.canvas);

        this.waveGroup = new WaveGroup(); //1. wave.js에서 만들어 준 Wave를 생성

        window.addEventListener('resize', thisresize.bind(this), false);
        this.resize();

        requestAnimationFrame(this.animate.bind(this));
    }

    resize() { //캔버스를 더블사이즈로 지정해서, 디스플레이에서도 보일 수 있도록!
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.canvas.width = this.stageWidth * 2;
        this.canvas.height = this.stageHeight * 2;
        this.ctx.scale(2, 2);

        this.waveGroup.resize(this.stageWidth, this.stageHeight);
    }
    
    animate(t) {
        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

        this.waveGroup.draw(this.ctx);

        requestAnimationFrame(this.animate.bind(this));
    }
}

    window.onload = () => {
        new App();
};