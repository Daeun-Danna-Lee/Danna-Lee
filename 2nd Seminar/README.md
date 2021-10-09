## 1. 동기 비동기
동기: 요청해놓고 완료될 때까지 기다리는 방식  
비동기: 요청해놓고 다른 일 하다가 완료되면 다시 처리하는 방식

## 2. JS에서 비동기처리 하기
자바스크립트는 기본적으로 동기적으로 작동  
하지만, 비동기적으로 처리하고 싶을 때는?

### 1) 콜백함수
- 함수 인자로 함수를 받아서 처리
- 콜백 지옥이 생길 수 있음

### 2) Promise
- 3가지 상태를 가짐: Pending, Fulfilled, Rejected
- Pending
  - 최초 상태
  - 성공하면 fulfilled, 실패하면 rejected로 연결 
- Fulfilled (성공)
  - Promise 첫번째 인자가 fullfiled 상태에서 실행됨
  - 첫번째 매개변수 (resolve)를 부르게 되면 그 값이 담겨셔 `.then`에 있는 resolvedData로 옮겨지게 된다.
- Rejected (실패)
  - 에러 반환 -> 에러 핸들링이 가능해짐
  - `.catch`를 통해 reject(여기)에 반환해준 값을 핸들링할 수 있음

- Promise Chaining
  - callback hell의 문제는 계속 코드의 구조가 deep 해진다는 거였는데, 프로미스를 쓰게 되면 간결하게 쓸 수 있다는 장점이 있음
  - 실행 순서 파악, 가독성 등등 편리성이 높아짐

- Require
  - import 같은 것
  - 다른 파일에 있는 어떤 내용을 변수에 저장하는 느낌
  - `module.export` 얘를 모듈처럼 취급하겠다 -> 갖다 써지는 파일
  - `require("모듈")` 이런 식으로 갖다 쓸 수 있음 -> 갖다 쓰는 파일

