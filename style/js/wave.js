import { //2. point를 생성
    Point
} from './point.js'; //3. 생성된 Point에는 아까 resize 이벤트에서 정의했던 

export class Wave {
    constructor(index, totalPoints, color) {
        this.index = index;
        this.totlalPoints = totalPoints;
        this.color = color;
        this.points = [];
    }

    resize(stageWidth, stageHeight) { //animation은 내가 그리고자 하는 애니메이션 좌표값을 가지고 오는것!
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;

        this.centerX = stageWidth / 2; 
        this.centerY = stageHeight / 2 
        //센터에 그려질 것이고, centerX는 스테이지 넓이의 반, centerY는 높이의 반

        this.pointGap = this.stageWidth / (this.totalPoints - 1);

        this.init();
    }

    init() { //1. resize함수가 일어난 다음, init함수를 실행시켜 
        this.points = [];

        for (let i = 0; i < this.totlalPoints; i++) {
            const point = new Point(
                this.index + i,
                this.pointGap * i,
                this.centerY
            );
            this.points[i] = point;
        }
    
    
    
        //     this.point = new  Point() 
    //         this.centerX
    //         this.centerY //4. centerX/Y를 여기로 넘겨줘서, 화면 중간을 기준으로 그려지도록!
    // }
}

    draw(ctx) { //실제 캔버스에 그리는 함수
        ctx.beginPath();
        ctx.fillStyle = this.color;

        let prevX = this.points[0].x;
        let prevY = this.points[0].y;

        ctx.moveTo(prevX, prevY)

        for (let i = 1; i < this.totalPoints; i++) {
            if (i < this.totalPoints - 1) {
                this.points[i].update();
            }
            const cx = (prevX + this.points[i].x) / 2;
            const cy = (prevY + this.points[i].x) / 2;

            ctx.quadraticCurveTo(prevY, cx, cy);

            prevX = this.points[i].x;
            prevY = this.points[i].y;
        }

        ctx.lineTo(prevX, prevY);
        ctx.lineTo(this.stageWidth, this.stageHeight);
        ctx.lineTo(this.points[0].x, this.stageHegith);
        ctx.fill;
        ctx.closePath();
    }
}