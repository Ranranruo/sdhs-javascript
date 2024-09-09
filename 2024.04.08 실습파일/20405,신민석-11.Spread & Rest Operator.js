/**
 * spread Operator
 * - 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 자바스크립트 표현식(ES6)
 * - 기존 것은 건드리지 않고, 새로운 객체를 만들때 사용
 * 
 * rest Parameter
 * - 정해지지 않은 수 인수를 배열로 나타낼 수 있게 해줌(ES^)
 * - 객체, 배열, 함수의 매개변수에서 사용가능
 * 
 * 정리
 * - 둘의 모양은 같지만 하는 역할을 다르며 문맥, 상황을 통해 파악할 수 있음
 * - 함수 매개변수에 점(...)을 사용하는 경우 => rest Parameter
 * - 함수 호풀에 점(...)을 사용하는 경우 => Spread Operator
 * - rest Parameter는 여러개의 인자를 받고 그것들을 합쳐서 새로운 배열/객체를 만듬
 * - Spread Operator 기존의 변수를 펼쳐서 줌
 */
const test1 = function(){
    console.log(arguments);
}
test1(1, 2, 3, 4);
const test2 = (...rest)=>{
    console.log(rest);
}
test2 (1, 2, 3, 4);
// Arrow Function은 arguments (x), this (x)

const arr1 = ["a","b","c"];
const arr2 = ["d","e","f"];

console.log(arr1.concat(arr2));
console.log("Spread Operator: ",[...arr1, ...arr2]);
