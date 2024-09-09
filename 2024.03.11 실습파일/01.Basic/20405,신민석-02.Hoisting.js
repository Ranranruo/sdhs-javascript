/**
 * Hoisting(호이스팅)
 * 변수를 뒤에서 선언하지만, 마치 앞에서 미리 앞에서 선언한 것처럼 인식
 * var, function들을 어느 위치에 호출하던 그 선언들을 맨 위로 끌어올림
 * - let, const도 Hoisting이 됨
 * 
 * 1) Declaration (선언)
 * 2) Initialization (초기화)
 * 3) Assignment (할당)
 */

// 1. var키워드 (선언&초기화 => 할당)
console.log(subject1); //undefined
var subject1 = 'javascript';
// => var키워드로 선언한 변수의 경우 호이스팅 시, undefined로 변수를 초기화

// 2. let, const 키워드(선언 => (TDZ) => 초기화 => 할당) / 블록 스코프
// TDZ(Temporal Dead Zone) 일시적 사각지대: 스코프의 시작점 부터 초기화 시작점까지의 구간
console.log(subject1);
let subject1 = "javascript";

// => let, const 호이스팅 가능하지만, TDZ영역에 갇혀있어 발생하지 않는것 처럼 보임