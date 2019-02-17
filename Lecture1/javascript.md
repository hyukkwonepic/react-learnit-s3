# JavaScript 기본

## 로깅

```
console.log('안녕하세요!');
```
`console.log()` 메소드를 호출하여 원하는 string을 로그에 출력할 수 있습니다.

## 변수 let 과 const

```
const name = 'alex';
let age = '26';
let address = 'Seoul';
```

`let`은 선언 후 할당이 가능하고 `const`는 새로운 값을 할당할 수 없습니다.

## 조건문

### if, else if, else
```
const age = 20;

if (age >= 20) {
  console.log('성인 입니다!');
}
```

```
const age = 20;
const gender = 'male';

if (age >= 20 && gender === 'male') {
  console.log('신체검사를 받으셔야 합니다!');
} else if (age >= 20) {
  console.log('성인 입니다!');
} else {
  console.log('미성년자 입니다!');
}
```

`if`, `else if`, `else`를 사용하여 조건 연산을 작성할 수 있습니다.

### 삼항 연산자
```

const age = 20;

const isAdult = age >= 20 ? true : false;
```

삼항연산자 `?`를 활용하여 조건 연산을 작성할 수 있습니다.

### switch, case
```
const gender = 'female';

switch (gender) {
  case 'female': {
    console.log('여성입니다!');
    break;
  }
  case 'male': {
    console.log('남성입니다!');
    break;
  }
  default: {
    console.log('여성도 남성도 아닙니다');
  }
}
```

`switch ... case ..` 를 활용하여 여러 조건의 연산을 쉽게 작성할 수 있습니다.

## 함수

### 함수 작성하기

```
function generateGreetings (name) {
  return 'Hello, ' + name + '!';
}
```

함수는 함수명, 매개변수 그리고 함수의 바디로 이루어져있습니다. 위의 함수는 `generateGreetings`라는 함수명을 가지며 `name`을 매개변수로 전달 받습니다. 또 일정 연산 후 그 결과값을 `return` 키워드 뒤에 작성하여 반환합니다.

### 함수 선언식, 함수 표현식

함수는 여러가지 방법으로 작성할 수 있습니다.

```
// 함수 선언식(function declarations)
function generateGreetings (name) {
  return 'Hello, ' + name + '!';
}

// 함수 표현식(function expressions)
const generateGreetings = function (name) {
  return 'Hello, ' + name + '!';
}
```

함수 선언식은 호이스팅에 영향을 받지만, 함수 표현식은 호이스팅에 영향을 받지 않습니다.

### 화살표 함수

```
// 화살표 함수 1
const generateGreetings = (name) => {
  return 'Hello, ' + name + '!';
}

// 화살표 함수 2
const generateGreetings = (name) => 'Hello, ' + name + '!';
```

화살표 함수를 사용하여 함수를 조금 더 간결하게 표현할 수 있습니다.

### 콜백 함수

```
function greeter(name, callback) {
  callback(name);
}

greeter('Alex', (name) => {
  console.log('Hello ' + name + '!');
});
```
함수의 매개변수에 함수를 작성할 수 있습니다. 이와 같은 함수를 콜백 함수(callback function)이라고 부릅니다.

## 객체

### 객체 작성하기

```
const profile = {
  name: 'alex',
  age: '27',
};
```

위와 같이 작성하여 새로운 객체를 만들어 낼 수 있습니다.

### 속성 추가하기

```
const profile = {
  name: 'alex',
  age: '27',
};

profile.address = 'seoul';
```
위와 같이 작성하여 객체에 새로운 속성을 추가하고 그에 대한 값을 할당할 수 있습니다.

### 전개 연산자

```
const obj = {
  a: '1',
  b: '2', 
  c: '3',
}

const { a, b, c } = obj;

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3

```
객체의 속성명을 변수명으로 선언하고 값을 할당합니다.

### 객체 줄여쓰기

```
const name = 'alex';
const age = '27';
const address = 'seoul';

const profile = {
  name: name,
  age: age,
  address: address
}
```

```
const name = 'alex';
const age = '26';
const address = 'seoul';

const profile = {
  name,
  age,
  address
}
```

객체의 속성과 속성에 지정하는 값의 변수명이 같으면 줄여서 작성할 수 있습니다.

### 객체 루프 돌기

```
const profile = {
  name: 'alex',
  age: '27',
  address: 'seoul'
};


// for... in..
for (let key in profile) {
  console.log(key);
}

// Object.keys()와 forEach()
Object.keys(profile).forEach((key) => {
  console.log(key);
})
```

`for... in..` 과 `Object.keys()`를 활용하여 객체의 속성을 기준으로 반복하는 로직을 작성할 수 있습니다.

## 배열


### 배열 작성하기

```
const twice = [ 'tzuyu', 'nayeon', 'momo', 'sana' ];
```

### forEach

```
const before = [ 1, 2, 3, 4, 5 ];
const after = [];

before.forEach((item) => {
  after.push(item * 2);
});

console.log(after); // [ 2, 4, 6, 8, 10 ];
```
`forEach`는 배열에 대해 반복하며 작업을 수행합니다. 각 요소는 함수의 첫번째 인자 `item`입니다.


### map

```
const before = [ 1, 2, 3, 4, 5 ];

const after = before.map((item) => {
  return item * 2;
});

console.log(after); // [ 2, 4, 6, 8, 10 ];
```
`map`은 배열에 대해 반복하며 작업을 수행하고 새로운 배열을 생성합니다.


### 전개 연산자

```
const numbers = [ 1, 2, 3, 4, 5, 6 ];
const [ a, b, ...rest ] = numbers;

console.log(a); // 1
console.log(b); // 2
console.log(rest); // [ 3, 4, 5, 6 ]
```
배열의 값을 변수에 할당합니다.

## class

### class 작성하기
```
class Animal {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
}

const doggy = new Animal('멍뭉이', 'dog');
console.log(doggy.name) // 멍뭉이
console.log(doggy.type) // dog
```

`class`를 사용하여 클래스를 선언합니다.


### class 상속하기

```
// 클래스 상속

class Bird extends Animal {
  constructor(name) {
    super(name);
    this.type = 'bird';
  }
}

const birdy = new Bird('짹짹이');
console.log(birdy.name); // 짹짹이
console.log(birdy.type); // bird
```

`class ... extends`로 클래스를 상속할 수 있습니다.