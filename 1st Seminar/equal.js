const numVariable = 1
const strVariable = '1'

// 동등연산자 == -> '값'만 비교 
// 일치연산자 === -> '값', '타입' 같이 비교 

console.log(numVariable == strVariable) // true
console.log(numVariable === strVariable) // false


// JS가 숫자랑 문자열을 비교할 때는 숫자를 문자열로 바꿈 
console.log (numVariable + strVariable) // 11
console.log (typeof (numVariable + strVariable)) // string

console.log(Number(numVariable) + Number(strVariable)) // 2
console.log(typeof (Number(numVariable) + Number(strVariable))) // Number

// 타입캐스팅이 어떻게 이뤄지는지 알아야 DB 관리가 용이해짐

// 동등연산자에서는 한 쪽이 한 쪽으로 타입이 강제 캐스팅 된 상태에서 값을 비교
// 일치연산자에서는 그냥 그 상태로 비교
// 그래서 대부분의 경우에 동등연산자보다 일치연산자를 쓰는 게 안전

// == != === !==