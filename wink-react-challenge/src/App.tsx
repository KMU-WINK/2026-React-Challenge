import PostCard from "./components/PostCard";
import Header from "./components/Header";
import './App.css'

function App() {

  return (
    <div className="w-[390px] h-[844px] bg-gray-50 rounded-[20px] shadow-[0px_12px_40px_0px_rgba(20,22,26,0.10)] inline-flex flex-col justify-start items-start overflow-hidden">
      <Header/>

      <main className="self-stretch px-4 pt-4 pb-6 flex flex-col gap-3 overflow-hidden">
        <PostCard 
          user="이서준"
          category="질문"
          time="12분 전"
          title="디자인 시스템 토큰, 어디까지 쪼개는 게 좋을까요?"
          body="컬러는 primary/secondary 정도로 정리했는데 spacing을 4배수로 잡을 때 8과 12를 둘 다 쓰는 게 맞는"
          likes={24}
          comments={6}
        />
        <PostCard
          user="이상래"
          category="자유"
          time="1시간 전"
          title="오늘 컴포넌트 정리하면서 배운 것"
          body="Variant를 상태 기준으로만 나누니 훨씬 관리가 쉬워졌어요. Liked=true / false 두 개만 두고 나머지는 인스턴스"
          likes={41}
          comments={12}
        />
        <PostCard
          user="이준혁"
          category="정보"
          time="3시간 전"
          title="Dev Mode 핸드오프 체크리스트 공유"
          body="색상은 hex, 간격은 4px 배수, 텍스트 스타일은 이름으로 관리. 이 세 가지만 지켜도 개발자와 커뮤니케이션 시간이"
          likes={87}
          comments={19}
        />
      </main>
    </div>
  )
}

export default App
