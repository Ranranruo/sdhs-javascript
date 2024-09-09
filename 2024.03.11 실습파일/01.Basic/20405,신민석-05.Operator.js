/**
 * 논리 연산자(Logical Operator)
 * - ||(논리합): OR
 * - &&(논리곱): AND
 * - !(논리부정): NOT
 */

console.log(true && false);
console.log("정답은? ", null || 2 || undefined) // 2
// js에서 null은 false, 수자는 0을 제회하고 true, unddefined는 false 간주
// => false || true || false 이므로 2를 출력

console.log(1 && null && 2);
// => true && false && true

console.log(!true);
// => false

console.log(!!true);
// => true

/**
 * 단축 평가(Short circuit evalation)
 * - 표현식을 평가하는 도중에 평가 결과가 확정되면 나머지 평가 과정을 생략
 * - 논리합(||)과 논리곱(&&) 연산자는 논리 연산의 결과를 결정한 피연산자를 타입 변환하지 않고 반환
 * - 항상 boolean형을 반환하는 NOT 연산자와 달리 OR와 AND 연산자는 논리 연산의 결과를 결정하는 피연산자를 형 변환 없이 그래도 변환
 * 
 * && 사용 시 좌측이 true => 우측값을 반환
 * && 사용 시 좌측이 false => 좌측값을 반환
 * || 사용 시 좌측이 true => 좌측값을 반환
 * || 사용 시 좌측이 false => 우측값을 반환
 */

console.log('dount' && false);
// => false

console.log('' === false);
// => false

console.log('' && false);
// => ''

console.log(false && 'coffe');
// => 'coffe'

console.log(0 || false || "JS" || 12);
// => 'JS'

console.log(true || 'anything');
// => true

// => ||, && 연산자는 왼쪽부터 오른쪽으로 평가를 진행하는데 정군에 평가 결과가 나오면 오른쪽 끝까지 가지 않고 평가 결과를 반환

/**
 * 모두 false를 반환하는 경우
 * 1) 아무 글자도 없는 String
 * 2) 값이 없는 경우(null, undefined)
 * 3) 0
 */

/**
 * ES11 옵셔널 체이닝 연산자(Optional Chaning Operator) => ?.
 * - 앞의 평가 대상이 undefined이거나 null이면 평가를 멈추고 undefined를 반환
 * - 존재하지 않을 수 있는 프로퍼티 또는 메서드를 안전하게 호출할 수 있도록 도와줌
 */

console.log("===========");
let element = null;
let result1 = element && element.value;

console.log(result1);
// => null

let result2 = element?.value;
console.log(result2);