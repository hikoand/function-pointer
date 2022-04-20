// class : 다양한 object를 만들기 위한 청사진

// Counter 라는 class 생성
// Counter에는 자체적으로 counter 라는 변수가 있다.
// Counter는 object를 만드는 순간 0 으로 초기화된다.

class Counter {
  constructor(runEveryFiveTimes) {
    this.counter = 0;
    this.callback = runEveryFiveTimes;
  }

  increase(run5Times) {
    this.counter++;
    console.log(this.counter);
    if (this.counter % 5 === 0) {
      // console.log('5가 증가했습니다.');
      // run5Times(this.counter);
      this.callback(this.counter);
    }
  }
}

//new 키워드를 이용하여 class를 생성
// constructor()가 실행됨
// this.counter 0 으로 초기화

// increase() 를 호출
// class 안에 있는 counter 라는 데이터를 하나씩 증가시킴

function printSomething(num) {
  console.log(`yo! ${num}`);
}
function alertSomething(num) {
  alert(`yo! ${num}`);
}

const coolCounter = new Counter(printSomething);

// coolCounter.increase(printSomething);
// coolCounter.increase(printSomething);
// coolCounter.increase(printSomething);
// coolCounter.increase(printSomething);
// coolCounter.increase(printSomething);

// coolCounter.increase(printSomething);
// coolCounter.increase(printSomething);
// coolCounter.increase(printSomething);
// coolCounter.increase(printSomething);

coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();

// counter 가 숫자 5가 될 때 마다 알고 싶다면?
// 1. increase 자체에 조건문을 건다. but coolCounter 내부에서 제어할 수 없음
// but coolCounter 사용자가 제어할 수 없음 (yo 말고 다른걸 보여주고싶다면?)

// 2. 콜백함수로 전달
// 원하는 기능 제어가능 (function printSomething(num), function alertSomething(num))
// but 매번 (printSomething); 을 전달 해야햐서 불편함

//3. cunstructor에서 콜백함수를 받음
// runEveryFiveTimes 인자를 callback 이라는 변수에 할당
// 생성자에 원하는 콜백함수를 전달 (printSomething)
