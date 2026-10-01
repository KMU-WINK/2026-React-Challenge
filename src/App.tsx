import bookmarkIcon from "./assets/bookmark.svg";
import colorbookmarkIcon from "./assets/colorbookmark.svg";
function App() {
  return (
    <main className="flex min-h-screen justify-center bg-[#EEF0F3] py-6">
      <div
        className="
          flex
          h-[844px]
          w-[390px]
          flex-col
          overflow-hidden
          rounded-[20px]
          bg-bg
          shadow-[0_12px_40px_0_rgba(20,22,26,0.10)]
        "
      >
        <header className="flex w-full items-center justify-between px-5 pt-6">
          <h1 className="text-[20px] font-bold tracking-[-0.2px] text-text">
            커뮤니티
          </h1>

          <div className="flex items-center gap-2">
            <button className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F1F3F5]">
              ⌕
            </button>

            <button className="rounded-full bg-primary px-[14px] py-2 text-[13px] font-bold text-white">
              글쓰기
            </button>
          </div>
        </header>
        <section className="mt-4 flex w-full gap-2 px-5">
          <button className="rounded-full bg-text px-4 py-2 text-[13px] font-bold text-white">
            전체
          </button>

          <button className="rounded-full bg-[#EEF0F3] px-4 py-2 text-[13px] font-medium text-text-body">
            질문
          </button>

          <button className="rounded-full bg-[#EEF0F3] px-4 py-2 text-[13px] font-medium text-text-body">
            자유
          </button>

          <button className="rounded-full bg-[#EEF0F3] px-4 py-2 text-[13px] font-medium text-text-body">
            정보
          </button>
        </section>
        <div className="mt-4 h-px w-full bg-border" />

        <section className="flex w-full flex-col gap-3 px-5 py-4">
          {/* 카드 1 */}
          <article className="flex w-full flex-col items-start gap-3 rounded-[16px] border border-border bg-white p-[17px]">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-border" />

              <div className="flex flex-col">
                <p className="text-[14px] font-bold text-text">Wink</p>

                <p className="text-[12px] font-normal text-text-secondary">
                  질문 · 12분 전
                </p>
              </div>
            </div>

            <h2 className="w-full text-[14px] font-medium leading-[21px] text-text">
              디자인 시스템 토큰, 어디까지 쪼개는 게 좋을까요?
            </h2>

            <p className="w-full text-[14px] font-normal leading-[23.1px] text-text-body">
              컬러는 primary/secondary 정도로 정리했는데 spacing을 세부적으로
              나눠야 할지 고민 중입니다.
            </p>

            <div className="flex w-full items-center justify-between">
              <div className="flex items-center gap-2">
                {/* 좋아요 */}
                <div className="flex items-center gap-[6px] rounded-full border border-border px-[11px] py-[7px]">
                  <span className="text-[16px]">♡</span>
                  <span className="text-[13px] font-medium text-text-body">
                    24
                  </span>
                </div>
                <div className="flex items-center gap-[6px] rounded-full border border-border px-[11px] py-[7px]">
                  <span className="text-[13px] font-medium text-text-body">
                    댓글 6
                  </span>
                </div>
              </div>
              <div className="flex items-center rounded-full border border-border px-[11px] py-[7px]">
                <img src={bookmarkIcon} alt="북마크" className="h-4 w-4" />
              </div>
            </div>
          </article>
          {/* 카드 2 */}
          <article className="flex w-full flex-col items-start gap-3 rounded-[16px] border border-border bg-white p-[17px]">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-border" />
              <div className="flex flex-col">
                <p className="text-[14px] font-bold text-text">Wink</p>

                <p className="text-[12px] font-normal text-text-secondary">
                  자유 · 1시간 전
                </p>
              </div>
            </div>

            <h2 className="w-full text-[14px] font-medium leading-[21px] text-text">
              오늘 컴포넌트 정리하면서 배운 것
            </h2>

            <p className="w-full text-[14px] font-normal leading-[23.1px] text-text-body">
              Variant를 상태 기준으로만 나누니 훨씬 관리가 쉬워졌어요.
              Liked=true / false 두 개만 두고 나머지는 인스턴스
            </p>

            <div className="flex w-full items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-[6px] rounded-full border border-border px-[11px] py-[7px]">
                  <span className="text-[16px]">♡</span>
                  <span className="text-[13px] font-medium text-text-body">
                    41
                  </span>
                </div>
                <div className="flex items-center gap-[6px] rounded-full border border-border px-[11px] py-[7px]">
                  <span className="text-[13px] font-medium text-text-body">
                    댓글 12
                  </span>
                </div>
              </div>
              <div className="flex items-center rounded-full border border-border px-[11px] py-[7px]">
                <img src={bookmarkIcon} alt="북마크" className="h-4 w-4" />
              </div>
            </div>
          </article>
          {/* 카드 3 */}
          <article className="flex w-full flex-col items-start gap-3 rounded-[16px] border border-border bg-white p-[17px]">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-border" />

              <div className="flex flex-col">
                <p className="text-[14px] font-bold text-text">Wink</p>

                <p className="text-[12px] font-normal text-text-secondary">
                  정보 · 3시간 전
                </p>
              </div>
            </div>

            <h2 className="w-full text-[14px] font-medium leading-[21px] text-text">
              Dev Mode 핸드오프 체크리스트 공유
            </h2>

            <p className="w-full text-[14px] font-normal leading-[23.1px] text-text-body">
              색상은 hex, 간격은 4px 배수, 텍스트 스타일은 이름으로 관리. 이 세
              가지만 지켜도 개발자와 커뮤니케이션 시간이
            </p>

            <div className="flex w-full items-center justify-between">
              <div className="flex items-center gap-2">
                {/* 좋아요 */}
                <div className="flex items-center gap-[6px] rounded-full border border-border px-[11px] py-[7px]">
                  <span className="text-[16px]">♡</span>
                  <span className="text-[13px] font-medium text-text-body">
                    87
                  </span>
                </div>
                <div className="flex items-center gap-[6px] rounded-full border border-border px-[11px] py-[7px]">
                  <span className="text-[13px] font-medium text-text-body">
                    댓글 19
                  </span>
                </div>
              </div>
              <div className="flex items-center rounded-full border border-[#C9D4FC] bg-[#EEF1FF] px-[11px] py-[7px]">
                <img src={colorbookmarkIcon} alt="북마크" className="h-4 w-4" />
              </div>
            </div>
          </article>
        </section>
      </div>
    </main>
  );
}

export default App;
