/**
 * 자바스크립트 배열의 특징: 하나의 배열의 다양한 자료형을 담을 수 있음
 * Array.isArray(): 해당 변수가 배열인지 알고싶을때 사용
 * indexOf(): 배열 안의 요소의 index를 찾음
 * push(): 배열의 마지막 요소를 추가하고 새로운 길이 반환
 * pop(): 배열의 마지막 index 요소 반환하고 해당 요소를 삭제
 * includes(): 요소가 있는지 없는지 확인
 * shift(): 배열의 맨 앞 index 요소를 반환하고 해당 요소를 삭제
 * unshift(): 배열의 맨 앞 요소를 추가하고 새로운 길이 반환
 * slice(): 배열 요소를 잘라내는 역할 (시작점, 개수)
 * - 끝점은 미포함
 * - 인자를 하나만 받을 시 자동으로 두번째 인자는 배열의 길이(index+1)이 들어감
 * splice(): 배열 요소를 잘라내는 역할(시작점, 개수)
 * 잘린 값을 빼서 새 배열을 만들고 싶으면 slice, 기존 배열을 바꿔야 하면 splice
 * concat(): 2개의 배열 합치기 (원본 배열을 건드리지 않고 새로운 배열 반환)
 * join(): 요소 사이에 특정 문자열을 넣어 모든 요소를 합쳐 하나의 문자열로 반환
 */

const fruit = ["banana", "apple", "grape", "mango"];
console.log("fruit은 배열이니?", Array.isArray(fruit));
// => true

const fruit2 = "pineapple";
console.log("fruit은 배열이니?", Array.isArray(fruit2));
// => false

console.log(fruit.indexOf("pineapple"));
// => -1

console.log(fruit.includes("orange"));
// => false

console.log("=== push && pop ===");
console.log(fruit.push("cherry"));
// => 5

console.log(fruit);
// => [ 'banana', 'apple', 'grape', 'mango', 'cherry' ]

console.log(fruit.pop());
// => cherry

console.log(fruit);
// => [ 'banana', 'apple', 'grape', 'mango' ]

console.log("=== shift && unshift ===");
console.log(fruit.shift());
// => 'banana'

console.log(fruit);
// => [ 'apple', 'grape', 'mango' ]

console.log(fruit.unshift("banana"));
// => 4

console.log(fruit);
// => [ 'banana', 'apple', 'grape', 'mango' ]

console.log("== concat ==");
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
let sumArray = arr1.concat(arr2);
console.log(sumArray);
// => [ 1, 2, 3, 4, 5, 6 ]

console.log(arr1, arr2);
// => [ 1, 2, 3 ] [ 4, 5, 6 ]

// Spread Operator(...): 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있도록 하는 표현식(ES6)
console.log(...arr1, ...arr2);
// 1 2 3 4 5 6

console.log([...arr1, ...arr2]);
// [ 1, 2, 3, 4, 5, 6 ]

let makeArray = [...arr1, ...arr2];
console.log(Array.isArray(makeArray));
// true

sumArray = sumArray.join("|");
console.log(sumArray, typeof sumArray, Array.isArray(sumArray));
// => 1|2|3|4|5|6 string false

/**
 * immutable: 메소드를 사용한 상태의 값과 메소드를 사용한 후의 상태가 다르지 않은 메소드
 * - slice, concat
 * 
 * mutable: 메소드를 사용한 상태의 값과 메소드를 사용한 후의 상태가 다른 메소드
 * - push, pop, shift, unshift, splice
 */
