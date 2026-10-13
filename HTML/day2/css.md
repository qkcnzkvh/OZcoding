# CSS 란?
HTML 요소의 모양과 배치를 정하는 언어로
글자 색, 크기, 폰트, 여백, 정렬, 위치, 레이아웃, 등등을 조정할 수 있다

## Internal CSS, Inline CSS, External CSS 각각의 방식에 대해서 정리하기

Inline CSS
태그에 style 속성에 CSS 코드를 직접 입력하여 한 줄로 표현되는 방식

Internal CSS
문서의 head 태그에 style 태그를 열어 그 안에 CSS 코드를 작성하는 방식

External CSS
css 파일을 만들어 HTML 문서에서 link태그로 연결하여 적용시키는 방식

## CSS Selector(선택자)
스타일을 적용시키기 위한 요소를 선택하기 위한 문자열 (id, tag, class 등)

## style 속성
HTML에 CSS 방식으로 직접 스타일을 지정할 때 사용하는 태그 종류

### text 관련 (font-size, font-weight, text-align)
font-size: 글자 크기

font-weight: 글자 두께

text-align: 정렬 방식(오른쪽, 가운데, 왼쪽)

### box model (margin, padding, border, content, width, height, box-sizing)

CSS 박스
Margin (Border (padding (content)))

Margin
border 바깥쪽의 외부 공백

Border
요소의 안쪽과 바깥쪽 경계에 위치한 테두리

Padding
border content사이의 안쪽 여백

Content
글자나 이미지가 표시되는 영역

width: 콘텐츠 너비
height: 콘텐츠 높이
box-sizing:요소의 총 크기