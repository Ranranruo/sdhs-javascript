/**
 * 자바스크립트의 변수 생성 단계
 * 1) Declaration (선언): 자바스크립트 엔진에 변수 객체를 등록하는 단계
 * 2) Initialization (초기화)
 * - 변수 객체에 값을 저장하기 위한 메모리 공간 확보하는 단계
 * - 암묵적으로 undefined를 할당하여 초기화
 * 3) Assignment (할당): undefined로 초기화된 변수에 실제 값을 할당하는 단계;
 * 
 * 변수 선언하기
 * 1. var(ES5) => Function Scope(범위: 함수 내부)
 * 2. let => Block Scope(범위: 블록() 내부)
 * 3. const => Block Scope(범위: 블록() 내부)
 */
// 참조형 변수 list
const list = ["apple", "banana", "cherry", "grape"];

// const fruit = "banana";
// fruit = 'apple';

list.push("pineapple");
// => 배열은 참조형이기 때문에 데이터의 주소를 대입할 수 있어 push가 가능

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
arr1 = arr2; // Error: Assignment to constant variable.

// const를 사용한다고 해서 수정할 수 없음을 의미하는 것은 아님
// const로 선언된 배열이나 오브젝트의 값을 변경하는 것은 가능(배열이나 오브젝트의 참조를 변경X)