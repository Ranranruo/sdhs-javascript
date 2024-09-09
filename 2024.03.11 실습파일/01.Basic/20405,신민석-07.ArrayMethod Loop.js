const fruit = ["banana", "apple", "grape", "mango"];


// Q1. while문으로 fruit의 모든 원소 출력
let i = 0;
while(i < fruit.length){
    console.log(fruit[i]);
    i++;
}

// Q2. for문으로 fruit의 모든 원소 출력
for(let i = 0; i < fruit.length; i++){
    console.log(fruit[i]);
}

// 1.forEach: 오직 Array객체에서만 사용가능한 메서드
// - break, continue, return 구문을 사용해서 함수를 벗어날 수 없음
// - 반환값 x, 단순 for문과 같이 작동

// 배열참조변수명.forEach(function(){})
console.log("=== forEach ===");
fruit.forEach((item, index)=>{
    console.log(`${index}번째: ${item}`);
})

// 2. for of : iterable 속성을 가지고 있는 컬렉션(Array, Map, Set ...) 전용 반복 구문(ES6)
// - iterable: member를 하나씩 차례로 반환 가능한 object

/**
 * for(let 변수명 of 참조배열변수명){
 * }
 */
console.log("=== for of ===")
for(let item of fruit){
    console.log(item);
}

// 3. for in: 객체의 모든 열거 가능한 속성에 대해서 반복
// - 자바스크립트에서 배열도 객체이기 떄문에 객체의 키 값이 출력
for(let el in fruit){
    console.log(el);
}

// for of 반복문과 for in 반복문의 차이점
// for of 반복문: [Sysbol.iterator] 속성을 가지는 컬렉션 전용
// for in 반복문: 객체의 모든 열거 가능한 속성에 대해 반복