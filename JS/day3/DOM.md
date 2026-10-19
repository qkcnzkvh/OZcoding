1. DOM(Document Object Model)이란?  
HTML 문서를 JavaScript가 다룰 수 있도록 만든 객체 기반의 트리 구조 모델  

2. Selector(선택자)로 DOM 요소 가져오기
CSS 선택자 문법을 사용해 원하는 HTML 요소를 JavaScript로 가져온다.  
id로 1개 선택 : document.getElementById("id")  
class로 선택 : document.getElementsByClassName("class")  
태그명으로 선택 : document.getElementsByTagName("tag")  

3. Event란?
사용자의 행동이나 브라우저에서 발생하는 사건을 말한다.  
(클릭, 키보드 입력, 마우스 이동, 스크롤, 페이지 로드 등)  

4. EventListener(이벤트 리스너)
특정 요소에서 특정 이벤트가 발생하는지 감지하고, 발생하면 지정한 함수를 실행하는 기능  
메서드: addEventListener()  
이벤트가 발생했을 때 실행되는 함수를 콜백 함수(핸들러) 라고 함

4-2. 사용하는 목적, 이유
사용자와의 상호작용(인터랙션) 을 구현하기 위해 사용(버튼 클릭, 입력, 메뉴 열기 등)  
HTML과 JavaScript를 분리할 수 있어 코드 관리가 쉽다.  

4-3. EventListener 정의하기
요소.addEventListener("이벤트종류", 콜백함수, 옵션);  

예시.
function click() {
  msg.textContent = "버튼이 클릭되었습니다!";
}
btn.addEventListener("click", handleClick);

4-4. EventListener 응용
여러 요소를 한꺼번에 등록하기  
const buttons = document.querySelectorAll(".btn");  

입력값 실시간 확인  
const input = document.querySelector("#userInput");
const output = document.querySelector("#output");

input.addEventListener("input", (e) => {
  output.textContent = e.target.value;
});

5. 마우스 감지
사용자의 마우스 동작(클릭, 이동, 올리기, 벗어나기 등)을 이벤트로 감지  
click : 마우스 버튼을 눌렀다 뗐을 때  
mouseover : 요소 위로 마우스가 올라올 때
wheel : 마우스 휠 스크롤  

5-2. 마우스 감지 사용
마우스 올리거나 벗어나기.
<div id="box"></div>
const box = document.querySelector("#box");

box.addEventListener("mouseenter", () => {
  box.style.background = "orange";
});

box.addEventListener("mouseleave", () => {
  box.style.background = "lightblue";
});

6. 화살표 함수
6-1. 화살표 함수란?
function 키워드 대신 =>(화살표) 를 사용하여 함수를 표기  
(주로 콜백 함수, 짧은 함수에서 많이 사용됨)  

6-2. 화살표 함수 사용
// 일반 함수 (함수 선언식)
function add(a, b) {return a + b;}

// 함수 표현식
const add2 = function (a, b) {return a + b;};

// 화살표 함수
const add3 = (a, b) => {return a + b;};

// 화살표 함수 (축약형: 중괄호와 return 생략)
const add4 = (a, b) => a + b;