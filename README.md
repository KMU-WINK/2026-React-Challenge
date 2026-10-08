# 2주차 키워드 과제

## 1. State 끌어올리기(Lifting State Up)란 무엇이고 왜 필요한가요?

여러 컴포넌트가 같은 값을 알아야 할 때, 그 값을 자식이 아니라 가장 가까운 공통 부모로 옮기고 Props로 내려주는 방식입니다. State는 자기 컴포넌트 안에서만 보이기 때문에, "좋아요한 게시글 개수"를 피드 상단에 보여주려면 PostCard 안에 State가 있어서는 안 됩니다. 부모(PostList)가 좋아요 목록을 갖고, 각 PostCard에는 값과 변경 함수를 Props로 내려줘야 합니다.
이 프로젝트에서는 카테고리 탭이 그 예입니다. 선택된 탭을 FeedHeader가 기억하면 PostList가 어떤 글을 보여줄지 알 수 없어서, State를 PostList로 올리고 FeedHeader에는 `active`/`onChange`로 내려주었습니다. 상세 화면의 댓글도 같은 이유로 CommentSection이 아닌 PostDetail이 갖고 있어서, "댓글 N" 숫자와 목록이 항상 일치합니다.

## 2. React가 Virtual DOM을 사용하는 이유는 무엇인가요?

실제 DOM을 직접 고치는 것은 느리고(레이아웃 계산, 다시 그리기), 어디를 고쳐야 하는지 개발자가 일일이 추적해야 합니다. React는 화면을 메모리 위의 가벼운 JS 객체(Virtual DOM)로 먼저 그리고, State가 바뀌면 새 Virtual DOM을 만들어 이전 것과 비교(diff)한 뒤 달라진 부분만 실제 DOM에 반영합니다. 덕분에 개발자는 "상태가 이러면 화면은 이렇다"만 선언하면 되고, 불필요한 DOM 조작이 줄어듭니다.

## 3. SPA와 MPA의 차이는 무엇인가요?

- **MPA(Multi Page Application)**: 페이지를 옮길 때마다 서버에서 새 HTML을 받아 전체를 새로고침합니다. 구조가 단순하고 초기 로딩/SEO에 유리하지만 화면 전환이 끊겨 보입니다.
- **SPA(Single Page Application)**: HTML 하나를 한 번만 받고, 이후엔 JS가 필요한 부분만 바꿔 그립니다. 화면 전환이 빠르고 앱처럼 부드럽지만 첫 로딩이 무겁고 SEO에 별도 대응이 필요합니다.

이번 실습에서 `<Link>`로 목록과 상세를 오갈 때 새로고침이 없었던 것이 SPA 동작입니다. `<a href>`였다면 매번 페이지 전체를 다시 받아왔을 것입니다.
