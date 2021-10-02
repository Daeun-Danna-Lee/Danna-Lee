// 변수 선언법

// var: 재선언 / 재할당 가능
var variableVar = '123';
var variableVar = '321';

console.log('variableVar', variableVar);

// let: 재선언 불가
let variableLet = '123';
let variableLet = '321';

console.log('variableLet', variableLet);

// const: 재선언 불가
const variableConst = '123';
const variableConst = '321';
console.log('variableConst', variableConst);

// 초기화 유무
var someVar;
let someLet; // 에러 남 -> eslint로 잡기
const someConst;

