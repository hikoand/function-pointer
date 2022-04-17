// 1. 함수(funtion) :
// why 함수? 반복되는 로직을 재사용하여 효율성을 높임

// 함수의 정의
// 함수의 이름은 짧지만 유의미하게 작성한다.
function add(a, b) {
  // 코드블럭 안에서 a, b라는 임의의 이름을 통해 데이터에 접근한다.
  return a + b;
}
console.log(add(1, 2)); //3

const sum = add(3, 4);
console.log(sum); //7
console.log('----------');

// 함수도 object 이기 때문에, 코드블럭은 어딘가에 저장되어있고,
// reference(주소)를 가진다.
function add(num1, num2) {
  return num1 + num2;
}

// add 와 같은 레퍼런스가 복사되어 할당되어진다.
const doSomething = add;

const result = doSomething(2, 3);
console.log(result); //5
const result2 = add(2, 3);
console.log(result2); //5
console.log('----------');

// 2. 인자 (Parameter)

// 인자를 받지 않는 함수는 input을 받지않는다.
function print() {
  console.log('print');
}

print(8, 33); //console에 안찍힘

// 인자는 함수를 호출하는 사람으로 부터 필요한 데이터를 받아오기 위해 의미있는 이름을 부여한다.

function printInfo(name, age) {
  console.log(`My nmae is ${name}, and ${age} years old.`);
}

printInfo('hiko', 33);
console.log('----------');

function divide(num1, num2) {
  return num1 / num2;
}

// 함수의 이름을 변수에 할당하거나, 다른 함수의 인자로 전달한다는 것은
// 이름이 가리키고 있는 reference를 전달하는 것과 동일하다.
// 그래서 이름을 통해 함수 호출이 가능하다.

// surprise(add); 를 선언하면 add의 ref가 결국 callback에 전달된다.
function surprise(callback) {
  const result = callback(2, 3); //add(2,3)
  console.log(result);
}

// add 라는 reference 가 전달되어 함수를 호출
surprise(add);
// devide 라는 reference 가 전달되어 함수를 호출
surprise(divide); //divide(2,3)
