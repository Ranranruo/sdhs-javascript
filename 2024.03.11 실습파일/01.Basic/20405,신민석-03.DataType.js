/**
 * Data Type
 * 자바스크립트는 6개의 Primitive Type(원시타입)과 1개의 Object Type(객체타입)을 가진다.
 * - Primitive Type
 * 1. Number
 * 2. String
 * 3. Boolean
 * 4. undefined
 * 5. null
 * 6. symbol(ES6 추가)
 * 
 * - Object Type
 * 1. function
 * 2. Array
 * 3. RegExp ...
 */

const age = 18; // Number Type
// typeof 변수 => 변수의 타입을 알 수 있음
console.log(typeof age);

// 6. Symbol Type
// 유일무이한 값을 생성할 때 사용
// Symbol 함수를 호출해서 사용
// => 객체의 프로퍼티 키를 고유하게 설정함으로써 프로퍼티 키의 충돌을 방지하기 위해 사용
const test1 = "1";
const test2 = "1";
console.log(test1 === test2) // ==(값) vs ===(타입)

const symbol1 = Symbol("1")
const symbol2 = Symbol("2")
console.log(symbol1 === symbol2);

/**
 * Dynamic Typing(동적 타이핑): 변수의 타입을 명시적으로 선언하지 않고 값에 의해 타입을 추론함
 * 타입을 런타임 시 결정
 * - python
 * - javascript
 * - php
 * - ruby
 * Static Typing(정적 타이핑): 변수를 선언할 때 어떤 타입의 변수를 선언할지 명시
 * 타입을 컴파일 당시에 결정
 * - java
 * - c/c++
 */
