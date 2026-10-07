# 1주차 키워드 과제

## Figma의 Auto Layout은 무엇이고 CSS Flexbox와 어떻게 대응되나요?

- Auto Layout은 방향, 간격, 여백만 정해두면 요소들을 알아서 정렬해주는 Figma 기능임.
- 방향은 `flex-direction`, 간격은 `gap`, 정렬은 `justify-content`/`align-items`로 거의 그대로 옮겨진다.

## Tailwind CSS와 일반 CSS(또는 CSS Modules)의 장단점은 무엇인가요?

- Tailwind는 클래스 이름 고민 없이 바로 스타일을 줄 수 있고 토큰 덕분에 값이 통일됨. 대신 클래스가 길어지면 읽기 힘들다.
- 일반 CSS는 익숙하지만 이름이 겹칠 수 있고, CSS Modules는 그 충돌은 막아주지만 이름 짓고 파일을 왔다 갔다 하는 건 그대로다.

## Tailwind v3의 tailwind.config.js 방식과 v4의 @theme CSS 기반 방식은 무엇이 다른가요?

- v3는 `tailwind.config.js`에서 설정했는데, v4는 CSS 안의 `@theme`에서 바로 설정함.
- `@theme`에 넣은 값은 CSS 변수가 돼서 `var(--color-primary)`처럼 일반 CSS에서도 쓸 수 있다.
