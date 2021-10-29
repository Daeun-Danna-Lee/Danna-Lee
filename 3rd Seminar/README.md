## 1. HTTP란
- 서버와 클라이언트는 일련의 규칙에 의해 통신
- -> 그 규칙을 바로 HTTP라고 부름
- HTTP(HyperText Transfer Protocol): 하이퍼미디어 문서를 주고 받을 수 있는 프로토콜(규칙) 
- 무상태 프로토콜
    - 서버가 두 요청 간 어떠한 데이터(상태)도 유지하지 않음
    - 서버가 두 개의 요청을 받았다고 했을 때 두 번째 요청은 첫 번째 요청에 대한 어떠한 정보도 알 수 없다 : 상호 독립적
    - 그래서 상태 유지가 필요한 경우에는 Cookie, Session, Token을 이용

<br/>

### 1) Request의 요소
- request header
- request body
- params
- query

<br/>

### 2) HTTP Method
- 어떤 액션을 수행해야 하는지 가장 먼저 주는 힌트
- Get(조회), Post(생성), Put(수정), Delete(삭제)
- get, delete에는 request body 담을 수 없음

### 3) Response
- 서버에서 이걸 내려주면 클라이언트에서 받아서 쓴다
- status code, message
- data
- status code
    - 2xx: 성공
    - 3xx: 리다이렉션을 알리는 상태
    - 4xx: 요청 오류 - 요청이 잘못됐을 때 (필요한 요소가 안 왔을 때, 서버에 데이터가 없을 때)
    - 5xx: 서버 내부 오류 (서버 터졌을 때)

### 4) Request
1. URL
    - param
    - query
2. header: 부가적인 정보 전송
3. body: 유저 정보 수정하고자 할 때 body에 받아서 정보 갱신

<br/>

## 2. CRUD
- Create, Read, Update, Delete
    - (CRUD) : (HTTP Method)
    - create : post
    - read : get
    - update : put
    - delete : delete
