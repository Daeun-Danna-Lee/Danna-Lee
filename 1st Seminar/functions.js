// 함수 선언식
function add(x, y) {
    return x + y;
}
console.log(add(2, 3));

// 함수 표현식
const addStr = function (x, y) {
    return x + y;
};
console.log(addStr("안녕", "하세요"));

// 함수 표현식 - 화살표 함수
const add = (x, y) => {
    return x + y;
};

// 변수가 하나면 소괄호 생략 가능
const onlyOne = x => {
    return x;
};

// 매개변수가 없으면 괄호로만 표현
const noParam = () => {
    return 1;
}

// 로직이 한 줄이면 리턴문 생략 가능
const oneLineAdd = (x, y) => x + y;
const oneLineOneParam = x => x * x;

// 객체 리턴, 로직 한 줄
const person = (name, age) => ({ name: name, age: age });

// 위와 동일한 화살표 함수
const person = function (name, age) {
    return {
        name: name,
        age: age,
    };
};



