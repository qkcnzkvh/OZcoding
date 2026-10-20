# Web API

## 1. Web API의 정의

Web API(Web Application Programming Interface)란, 웹 브라우저가 제공하는 기능을 JavaScript에서 사용할 수 있도록 해주는 인터페이스

JavaScript를 이용해 HTML 요소를 조작, 이벤트 처리, 데이터 저장, 서버와 통신 가능

## 2. Web API의 종류와 예시

### 2.1 DOM API

DOM(Document Object Model) API  
HTML 문서의 요소에 접근하고 내용을 변경할 수 있도록 해주는 API

주요 기능: HTML 요소 선택, 텍스트 및 속성 변경, HTML 요소 생성 및 추가
  
- `querySelector()` : CSS 선택자를 이용해 HTML 요소를 선택한다.
- `createElement()` : 새로운 HTML 요소를 생성한다.
- `textContent` : 요소의 텍스트를 설정한다.
- `appendChild()` : 선택한 요소 안에 새로운 요소를 추가한다.
  
### 2.2 Event API

Event API  
사용자의 행동이나 브라우저에서 발생하는 이벤트를 감지하고 처리하는 API

주요 이벤트:
- `click` : 마우스 클릭
- `input` : 입력값 변경
- `submit` : 폼 제출
  
예시:
  
```javascript
const button = document.querySelector("#load");

button.addEventListener("click", () => {
    console.log("버튼 클릭");
});
```
  
### 2.3 Timer API

Timer API  
일정 시간이 지난 후 함수를 실행하거나 일정한 시간 간격으로 함수를 반복 실행할 때 사용하는 API

#### setTimeout()

일정 시간이 지난 후 함수를 한 번 실행

```javascript
setTimeout(
    () => console.log("3초 경과"),
    3000 // (3초)
);
```

#### setInterval()

일정 시간마다 함수를 반복 실행

```javascript
setInterval(
    () => console.log("3초 경과"),
    3000
);
```

- 위 코드는 3초 간격으로 메시지를 반복 출력
- 반복 실행을 중지하려면 `clearInterval()`을 사용할 수 있다.

### 2.4 Storage API

Storage API  
브라우저에서 제공하는 클라이언트 측 저장소, 브라우저에 데이터를 저장하고 불러올 수 있다.

#### localStorage

브라우저에 데이터를 저장하며, 페이지를 새로고침해도 데이터가 유지된다.

```javascript
// 데이터 저장
localStorage.setItem("name", "alex");

// 데이터 불러오기
localStorage.getItem("name");
// 결과: 'alex'

// 데이터 삭제
localStorage.removeItem("name");
```

#### sessionStorage

현재 탭의 세션 동안 데이터를 유지, 일반적으로 해당 탭을 닫으면 데이터가 사라진다.

```javascript
// 데이터 저장
sessionStorage.setItem("name", "bob");

// 데이터 불러오기
sessionStorage.getItem("name");
// 결과: 'bob'
```

| 구분 | localStorage | sessionStorage |
|---|---|---|
| 데이터 유지 | 브라우저에 저장된 데이터가 유지됨 | 현재 탭의 세션 동안 유지 |
| 새로고침 | 유지됨 | 유지됨 |
| 탭 종료 | 일반적으로 유지됨 | 일반적으로 삭제됨 |

### 2.5 Fetch API

Fetch API  
서버에 HTTP 요청을 보내고 응답 데이터를 받아올 수 있도록 해주는 API  
주로 서버에서 데이터를 불러오거나 서버에 데이터를 전송할 때 사용

#### 비동기 프로그래밍

비동기 프로그래밍은 작업이 완료될 때까지 기다리는 동안 다른 작업을 진행할 수 있는 방식  

- 동기 방식: 작업이 순서대로 진행되며, 앞선 작업이 끝날 때까지 다음 작업이 기다린다.
- 비동기 방식: 작업 완료를 기다리는 동안 다른 작업을 진행할 수 있다.

Fetch API는 비동기 방식으로 동작한다.

## Web API 핵심 정리

| API | 역할 | 대표 기능 |
|---|---|---|
| DOM API | HTML 요소를 선택하고 수정 | `querySelector()`, `createElement()` |
| Event API | 이벤트 감지 및 처리 | `addEventListener()` |
| Timer API | 일정 시간 후 실행 및 반복 실행 | `setTimeout()`, `setInterval()` |
| Storage API | 브라우저에 데이터 저장 | `localStorage`, `sessionStorage` |
| Fetch API | 서버와 HTTP 통신 | `fetch()` |

**핵심 요약**

- DOM API: 화면의 HTML 요소를 조작한다.
- Event API: 사용자의 행동에 반응한다.
- Timer API: 시간을 기준으로 함수를 실행한다.
- Storage API: 브라우저에 데이터를 저장한다.
- Fetch API: 서버와 데이터를 주고받는다.