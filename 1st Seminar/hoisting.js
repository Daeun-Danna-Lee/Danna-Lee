// 내가 작성한 코드
hoistFunction();

function hoistFunction() {
    console.log(x);
    var x = 'var';
    console.log(x);
}


// JS엔진이 해석한 코드
function hoistFunction() {
    var x;
    console.log(x);
    x = "var";
    console.log(x);
}

hoistFunction()


// 뭐가 됐든 선언부가 항상 위로 끌어올려진다 (hoisting 된다)
// 그래서 함수 선언도, 변수 선언도 위로 끌어올려진다
// 해당 scope (선언이 유효한 범위) 내에서 가장 위로 끌어올려진다
// 언제든 '선언 -> 실행'의 순서를 따르게 됨

// 코드 가독성, 유지보수 위해 hoisting이 일어나지 않도록 최대한 피한다
// 정확히 어디서 hoisting이 일어나는지 모르면 코드가 꼬이기 때문에
// let, const를 사용할 것! (block scope) <-> var (function scope)

// var는 옛날 거다. 쓰지 말자!!
// let: 가변 변수, const: 불변 변수 -> 이렇게만 쓰자~!