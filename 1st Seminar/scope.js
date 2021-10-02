// 함수가 없을 때
// 블록 안에 있는 var (함수가 없을 때)
if (true) {
    var x = "var";
}
console.log(`var: ${x}`);

// 이거랑 같음
var x = "var";
if (true) {
    
}
console.log(`var: ${x}`);

// 에러가 남 -> let, const는 블록을 벗어나지 못하기 때문에
if (true) {
    let y = "let";
    const z = "const";
}
console.log(`let: ${y}  const: ${z}`); // y is not defined

// function scope
// var은 함수 밖에서 접근이 불가능해진다.
function colorFunction() {
    if (true) {
        var color = "blue";
        console.log(color);
    }
    console.log(color)
}
console.log(color) // color is not defined