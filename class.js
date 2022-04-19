// class : 다양한 object를 만들기 위한 청사진

// Counter 라는 class 생성
// Counter에는 자체적으로 counter 라는 변수가 있다.
// Counter는 object를 만드는 순간 0 으로 초기화된다.

class Counter {
  constructor() {
    this.counter = 0;
  }

  increase() {
    this.counter++;
    console.log(this.counter);
    if (this.counter % 5 === 0) {
      console.log('5가 증가했습니다.');
    }
  }
}

//new 키워드를 이용하여 class를 생성
// constructor()가 실행됨
// this.counter 0 으로 초기화

// increase() 를 호출
// class 안에 있는 counter 라는 데이터를 하나씩 증가시킴
const coolCounter = new Counter();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();

// counter 가 숫자 5가 될 때 마다 알고 싶다면?
// 1. increase 자체에 조건문을 건다. but coolCounter 내부에서 제어할 수 없음
