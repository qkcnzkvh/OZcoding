# HTML에서 TAG란

### '<p>'
Paragraph
문단을 만들 때 사용

'<p>안녕하세요</p>'

'<hr> 가로 줄 생성 (세로줄 생성은 없음)'
'<br> 줄바꿈 태그'
! + ↳ = HTML 기본 양식 생성

### '<ul>'
Unordered List
순서 없는 목록 (●)로 표시된다

<ul><li>사과</li></ul>

### <ol type="숫자, 로마자 등등">
Ordered List
순서가 있는 목록 (타입에서 정한대로 1, 2, 3 or i, ii, iii 등으로)로 표시된다

<ol><li>사과</li></ol>

### <input>
Input
사용자에게 입력받는 칸 생성

<input type="text">

### <img>
Image
이미지 표시

<img src="cat.jpg" alt="고양이">
src: source (출처, 자료 주소)
alt: alternative text (이미지 오류시 대체 텍스트)
### <head>
Head
화면에 대한 부가 정보로 웹페이지의 설정, 제목, 메타정보 등을 작성

<head><title>내 페이지</title></head>

### <body>
Body
웹페이지에 실제로 표시되는 내용 작성, 실제 정보가 포함되어있음

<body>안녕하세요</body>

태그에 id 값을 줄 수 있음(중복 불가능)
class로 여러 태그를 묶어 줄 수 있다.

## form
<form action="보낼 서버의 주소" 
      method="get or post"(기본값은 get)>
    <label for="어느 input에 대한 라벨인지">
    <input id="label과 같은 이름으로 연결" 
            name="서버에 보낼 때의 데이터 이름" 
            placeholder="어떤것을 적어야 할지 미리 보여줌" 
            type="email, password, text, etc.">
    <button>접속</button>
</form>

division 과 semantic 차이
<body>
    <!-- division -->
    <div></div>
    <div></div>
    <div></div>
    <!-- Semantic -->
    <header></header>
    <main></main>
    <footer></footer>
</body>

## table
<body>
<!-- 1행 : head, 나머지: body -->
    <table>
        <!-- 테이블 헤드 -->
        <thead>
            <!-- tr: '한 줄에 있다'라는 뜻 -->
        <tr>
            <th>ID</th>
            <th>이름</th>
            <th>이메일</th>
        </tr>
        </thead>
        <!-- 테이블 바디 -->
        <tbody>
            <tr>
                <td>1</td>
                <td>Alex</td>
                <td>alex@example.com</td>
            </tr>
        <tr>
            <td>2</td>
            <td>Bob</td>
            <td>bob@example.com</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Chris</td>
            <td>chris@example.com</td>
        </tr>
        </tbody>
    </table>
</body>