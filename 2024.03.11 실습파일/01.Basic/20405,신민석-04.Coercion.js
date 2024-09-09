/**
 * 타입 변환
 * 1) Explicit Coercion(명시적 타입 변환): 개발자가 의도적으로 겂의 타입을 변환하는 것
 * 2) Implicit Coercion(암묵적 타입 변환): 코드 문맥에 부합하도록 js엔진이 값의 타입을 자동으로 변환하는 것
 */

const number = 7;
// .toString(): 임의의 Number형 값을 String(문자열)로 변환하는 자바스크립트 내장메서드
const str = number.toString();
console.log(`number Type: ${typeof number} / str Type: ${typeof str}`);
// => 명시적 타입 변환

// String => number: Integer, parseInt, Number ...

// 1. Number(): 전체 문자를 Number Type 변환
// 2. parseInt(), parseFloat(): 문자를 만나면 해당 문자 전까지 Number Type 변환
const money1 = Number("0원");
const money2 = parseInt("0원");

console.log(`money1: ${typeof money1, money1}`)
console.log(`money2: ${typeof money2, money2}`)

// 암묵적 타입 변환
console.log("=======");
console.log("98" + 2); // 982

// String 에는 *, -가 없기 떄문에 98을 숫자로 타입을 변환하여 결과를 반환
console.log("98" * 2); // 196

let str2 = "";
console.log(typeof str2);

let str3 = null;
console.log(typeof str3);