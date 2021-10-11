## 1. 동기 비동기
동기: 요청해놓고 완료될 때까지 기다리는 방식  
비동기: 요청해놓고 다른 일 하다가 완료되면 다시 처리하는 방식

<br/>

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


### 3) async, await
- async: Promise를 반환
- await: Promise를 기다림 (resolve/reject 되기를)

```javascript
// 함수 선언식
async function 함수명() {
  // logic
  let result = await 실행할함수();
  console.log(result);
}

// 함수 표현식
const 변수이름 = async () => {
  // logic
  let result = await 실행할함수();
  console.log(result);
}
```
- 대부분의 경우에 async, await을 쓰게 될 것
- 콜백 함수는 오래된 라이브러리, 프로미스는 파이어베이스 할 때 다루게 될 수도 있음

<br/>

## 3. 모듈
- `module.exports`로 모듈화하고, `require()`로 불러와준다

<br/>

## 4. 암호화
- 암호화, 복호화
- 비밀번호를 그대로 저장하면 안 되는데 우짜냐
- 만약 비밀번호 그대로 저장해놨다가 DB 탈취 당하면? 범죄지 ...
- 그래서 암호화를 해서 DB에 저장해놔야 합니다

### 1) Hashing
- 복호화 할 수 없는 암호화를 위해 해싱을 사용한다
- `const crypto = require("crypto");`
- `createHash()`: md5, sha256, sha512 등의 알고리즘을 임력받아 해시 값을 반환
- `update()`: 변환할 문자열 매개변수로 넣어주기
- `digest()`: 인코딩 알고리즘 (base64, hex 등)

### 2) Salt
- password + 임의의 문자열(salt)로 해싱
  - 더 복잡해지겠지?
- 유저별로 salt를 다르게 해주고, salt까지 함께 저장해줘야 함 (DB에 pw와 salt가 같이 저장)
- 비밀번호를 받았을 때 pw, salt를 이용해 해싱을 한 값이 원래 저장해뒀던 값과 같으면 아 비밀번호가 맞구나
- 비밀번호 원본을 알 필요 없이 비밀번호 일치 유무만 알 수 있음

### 3) Key stretching
- 해싱을 여러 번 하는 것
  - 더 안전해지겠지?

### 4) pbkdf2
- avalanche 효과 (눈사태 효과) : pw가 조금만 바뀌어도 해시 값은 아예 바뀜
- rainbow attack : 흔한 비밀번호(123456 등)은 비슷한 해시 값이 나오겠지? 리스트가 생성됨 (rainbow list). 그 list를 무작위로 공격하는 것
- rainbow attack 방지 위해 소금(salt)을 친다
- 조금 더 안전하게 만들기 위해 그 과정을 n번 반복한다
- 이걸 **password-based key deriation function(pbkdf)**라고 부름
- `crypto.pbkdf2(비밀번호, salt 값, 반복 횟수, 출력 byte, 해시 알고리즘, callback);`

<br/>

## 5. File System
### 1) 비동기 방식
- callback을 이용해 하면 됨
### 2) 동기 방식
- callback만 빠진 형태

<br/>

## 6. 우리는 crypto와 fs를 쓰지 않는다
- 띠용
- 비밀번호를 직접 암호화하는 것보다 Firebase의 Authentication 서비스를 활용하는 것이 더 간단
- fs로 파일을 읽는 것보단 Firebase의 Firestore 서비스를 이용하는 것이 더 유연하기 때문

<br/>

## 7. Express 파일 구조
- 우리가 서버 구축을 빠르게 할 수 있도록 도와주는 프레임워크, 라이브러리

### 1) app.js
- `app.set` : 설정
- `app.use` : 미들웨어 사용 -> 이 부분을 사용할 것
- set, use 모두 적용 시켜서 `module.exports` -> `www`에서 받아와서 서버 띄움

### 2) package.json
- 디펜던시 관리
- 파이썬에서 가상환경 같은 것
- 디펜던시: 모듈들의 명단 (이 프로젝트에서 사용할 모듈 이름 다 적어놓은 것)
- 실제 모듈들은 `node_modules`라는 파일 안에 있음

### 3) node_modules
- .gitignore 해놔야 함
- 너무 무거워서 들고 다닐 수 없다 -> package.json에 명세서만 보관하는 것
- npm install로 로컬에 설치해줄 수 있음
- package.json에는 6개밖에 없는데 왜 이렇게 많이 깔리냐? -> 모듈들에도 각각의 디펜던시가 있기 때문
- 새로운 모듈 설치는 `npm install 모듈이름`

<br/>

## 8. Express 페이지 라우팅
- 프로젝트가 커지다 보면 파일보다 폴더를 많이 쓰게 될 것
- 큰 차이 없이 routes/index.js에 `router.use("/api", require("./api"));` 이런 식으로 추가만 해주면 됨
- 여기서 require()에 왜 .js 확장자를 명시하지 않는지에 대한 이유가 나오는데, 그 대상이 폴더일 수도 있고 js 파일일 수도 있기 때문 (아래처럼 api 폴더일 수도 있고 blog.js 파일일 수도 있어서)

### 1) 폴더로 라우팅
```javascript
// routes/api/index.js

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
```

### 2) 파일로 라우팅
```javascript
// routes/blog.js

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
```
