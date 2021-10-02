const str = 'Just do it';
const str = "Just don't do it"; // 문장 안에 작은 따옴표 포함하고 싶으면 큰 따옴표로 감싸자 아니면 이스케이프 문자 넣어서 (\')

// ` 을 활용한 문자열
const myName = '이다은'
const backtickStr = `안녕하세요 ${myName}입니다`;
const nonBacktickStr = '안녕하세요' + myName + '입니다';