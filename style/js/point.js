export class Point { //point 함수는 y,x값을 가지고 있고, 
    constructor(index, x, y) {
        this.x = x;
        this.y = y;
        this.fixedY = y;
        this.speed = 0.0;
        this.cur = index; //포인트에 인덱스 값을 넘겨줌!(현재 포인트가 몇번째 포인트인지 알기위해)
        this.max = Math.random() * 100 + 150;

    }

    update() {
        this.cur += this.speed; //얼마큼 움직일 것인가에 대한 Max값
        this.y = this. fixedY + (Math.sin(this.cur) * this.max); //현재값을 스피드만큼 증가시켜주고, sine함수로 아래위로 움직일 수 있도록!
    }
}
//sine 함수(곡선) 일정값을 추가/빼면 웨이브가 만들어짐! 