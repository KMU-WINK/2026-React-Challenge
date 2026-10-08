# 1주차 키워드 정리
## Figma의 Auto Layout은 무엇이고 CSS Flexbox와 어떻게 대응되나요?
Auto Layout은 요소들을 일정한 규칙에 따라 자동으로 배치하는 기능이고, CSS는 요소들을 가로 세로 방향으로 배치하고 간격, 정렬을 조절하는 레이아웃 방식이다. 
Figma에서 Auto Layout으로 만든 구조를 CSS Flexbox로 옮겨 구현할 수 있다.

## Tailwind CSS와 일반 CSS(또는 CSS Modules)의 장단점은 무엇인가요?
Tailwind CSS는 미리 만들어진 utility class를 HTML이나 JSX에 직접 사용한다. 따라서 빠르게 스타일링하고 값을 바로 확인하기 쉽다는 장점이 있지만 클래스가 길어질 수 있다는 단점이 있다.
일반 CSS는 CSS 파일에 직접 스타일을 작성한다. 따라서 스타일을 자유롭게 작성할 수 있고 복잡한 디자인을 표현하기 편하다는 장점이 있지만, 파일을 오가야하고, 같은 스타일을 반복해서 작성할 수 있다는 단점이 있다.

## Tailwind v3의 tailwind.config.js 방식과 v4의 @theme CSS 기반 방식은 무엇이 다른가요?
Tailwind v3는 tailwind.config.js에서 Tailwind 설정하지만, v4 = CSS의 @theme에서 디자인 토큰을 설정한다.




# 아이디어 기획서 ( 내가 챌린지를 통해 만들어보고 싶은 것 )
인스타그램 화면





# 2주차 키워드 정리
## State 끌어올리기(Lifting State Up)란 무엇이고 왜 필요한가요?
State 끌어오기란 여러 컴포넌트가 같은 State를 공유해야 할 때 사용하는 방법으로 부모가 State를 관리하고 자식에게 Props로 전달한다.
따라서 여러 컴포넌트가 하나의 State를 기준으로 같은 상태를 유지할 수 있다.

## React가 Virtual DOM을 사용하는 이유는 무엇인가요?
Virtual DOM은 실제 DOM을 바로 수정하지 않고, 메모리상에서 UI의 변화를 먼저 비교하는 방식이다. State가 변경되면 react가 이전 UI와 새로운 UI를 비교하고 변경이 필요한 부분만 업데이트한다. 따라서 불필요한 DOM 조작을 줄이고 UI 업데이트를 효율적으로 관리할 수 있다는 장점이 있다.

## SPA와 MPA의 차이는 무엇인가요?
SPA는 페이지 하나를 기반으로 필요한 부분만 바꾸고, MPA는 페이지를 이동할 때마다 새로운 페이지를 받아온다.