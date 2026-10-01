import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="w-96 h-[844px] bg-gray-50 rounded-[20px] shadow-[0px_12px_40px_0px_rgba(20,22,26,0.10)] inline-flex flex-col justify-start items-start overflow-hidden">
        <div className="self-stretch px-5 pt-5 pb-3 bg-white border-b border-gray-200 flex flex-col justify-start items-start gap-4">
            <div className="self-stretch inline-flex justify-between items-center">
                <div className="size- inline-flex flex-col justify-start items-start">
                    <div className="justify-center text-neutral-900 text-xl font-bold font-['Noto_Sans_KR']">커뮤니티</div>
                </div>
                <div className="size- flex justify-start items-center gap-2">
                    <div className="size-9 bg-gray-100 rounded-[999px] flex justify-center items-center">
                        <div className="text-center justify-center text-gray-500 text-base font-normal font-['Noto_Sans_KR']">⌕</div>
                    </div>
                    <div className="size- px-3.5 py-2 bg-indigo-500 rounded-[999px] inline-flex flex-col justify-start items-start">
                        <div className="justify-center text-white text-xs font-bold font-['Noto_Sans_KR']">글쓰기</div>
                    </div>
                </div>
            </div>
            <div className="self-stretch inline-flex justify-start items-start gap-2">
                <div className="self-stretch px-3.5 py-1.5 bg-neutral-900 rounded-[999px] inline-flex flex-col justify-start items-start">
                    <div className="justify-center text-white text-xs font-medium font-['Noto_Sans_KR']">전체</div>
                </div>
                <div className="self-stretch px-3.5 py-1.5 bg-gray-100 rounded-[999px] inline-flex flex-col justify-start items-start">
                    <div className="justify-center text-gray-500 text-xs font-medium font-['Noto_Sans_KR']">질문</div>
                </div>
                <div className="self-stretch px-3.5 py-1.5 bg-gray-100 rounded-[999px] inline-flex flex-col justify-start items-start">
                    <div className="justify-center text-gray-500 text-xs font-medium font-['Noto_Sans_KR']">자유</div>
                </div>
                <div className="self-stretch px-3.5 py-1.5 bg-gray-100 rounded-[999px] inline-flex flex-col justify-start items-start">
                    <div className="justify-center text-gray-500 text-xs font-medium font-['Noto_Sans_KR']">정보</div>
                </div>
            </div>
        </div>
        <div className="self-stretch px-4 pt-4 pb-6 flex flex-col justify-start items-start gap-3 overflow-hidden">
            <div className="self-stretch p-4 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col justify-start items-start gap-3">
                <div className="self-stretch inline-flex justify-start items-center gap-2.5">
                    <div className="size-9 bg-gray-200 rounded-[999px]" />
                    <div className="size- inline-flex flex-col justify-start items-start gap-0.5">
                        <div className="self-stretch flex flex-col justify-start items-start">
                            <div className="justify-center text-neutral-900 text-sm font-bold font-['Noto_Sans_KR']">이서준</div>
                        </div>
                        <div className="self-stretch flex flex-col justify-start items-start">
                            <div className="justify-center text-neutral-400 text-xs font-normal font-['Noto_Sans_KR']">질문 · 12분 전</div>
                        </div>
                    </div>
                </div>
                <div className="self-stretch flex flex-col justify-start items-start">
                    <div className="self-stretch justify-center text-neutral-900 text-sm font-medium font-['Noto_Sans_KR'] leading-5">디자인 시스템 토큰, 어디까지 쪼개는 게 좋을까요?</div>
                </div>
                <div className="self-stretch h-12 relative overflow-hidden">
                    <div className="w-80 h-12 left-0 top-[-0.96px] absolute justify-center text-zinc-600 text-sm font-normal font-['Noto_Sans_KR'] leading-6">컬러는 primary/secondary 정도로 정리했는데<br/>spacing을 4배수로 잡을 때 8과 12를 둘 다 쓰는 게 맞는</div>
                </div>
                <div className="self-stretch pt-1 inline-flex justify-between items-center">
                    <div className="size- flex justify-start items-center gap-2">
                        <div className="size- px-2.5 py-1.5 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-gray-200 flex justify-start items-center gap-1.5">
                            <div className="size-4 relative overflow-hidden">
                                <div className="w-3 h-2.5 left-[1.76px] top-[3.47px] absolute outline outline-[1.20px] outline-offset-[-0.60px] outline-neutral-400" />
                            </div>
                            <div className="size- inline-flex flex-col justify-start items-start">
                                <div className="justify-center text-gray-500 text-xs font-medium font-['Noto_Sans_KR']">24</div>
                            </div>
                        </div>
                        <div className="size- px-2.5 py-1.5 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-gray-200 flex justify-start items-center gap-1.5">
                            <div className="size- inline-flex flex-col justify-start items-start">
                                <div className="justify-center text-gray-500 text-xs font-medium font-['Noto_Sans_KR']">댓글</div>
                            </div>
                            <div className="size- inline-flex flex-col justify-start items-start">
                                <div className="justify-center text-gray-500 text-xs font-medium font-['Noto_Sans_KR']">6</div>
                            </div>
                        </div>
                    </div>
                    <div className="size- px-2.5 py-1.5 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-gray-200 flex justify-start items-center">
                        <div className="size-4 relative overflow-hidden">
                            <div className="w-2 h-2.5 left-[4.33px] top-[2.67px] absolute outline outline-[1.20px] outline-offset-[-0.60px] outline-neutral-400" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="self-stretch p-4 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col justify-start items-start gap-3">
                <div className="self-stretch inline-flex justify-start items-center gap-2.5">
                    <div className="size-9 bg-gray-200 rounded-[999px]" />
                    <div className="size- inline-flex flex-col justify-start items-start gap-0.5">
                        <div className="self-stretch flex flex-col justify-start items-start">
                            <div className="justify-center text-neutral-900 text-sm font-bold font-['Noto_Sans_KR']">이상래</div>
                        </div>
                        <div className="self-stretch flex flex-col justify-start items-start">
                            <div className="justify-center text-neutral-400 text-xs font-normal font-['Noto_Sans_KR']">자유 · 1시간 전</div>
                        </div>
                    </div>
                </div>
                <div className="self-stretch flex flex-col justify-start items-start">
                    <div className="self-stretch justify-center text-neutral-900 text-sm font-medium font-['Noto_Sans_KR'] leading-5">오늘 컴포넌트 정리하면서 배운 것</div>
                </div>
                <div className="self-stretch h-12 relative overflow-hidden">
                    <div className="w-80 h-12 left-0 top-[-0.96px] absolute justify-center text-zinc-600 text-sm font-normal font-['Noto_Sans_KR'] leading-6">Variant를 상태 기준으로만 나누니 훨씬 관리가 쉬워졌어<br/>요. Liked=true / false 두 개만 두고 나머지는 인스턴스</div>
                </div>
                <div className="self-stretch pt-1 inline-flex justify-between items-center">
                    <div className="size- flex justify-start items-center gap-2">
                        <div className="size- px-2.5 py-1.5 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-gray-200 flex justify-start items-center gap-1.5">
                            <div className="size-4 relative overflow-hidden">
                                <div className="w-3 h-2.5 left-[1.76px] top-[3.47px] absolute outline outline-[1.20px] outline-offset-[-0.60px] outline-neutral-400" />
                            </div>
                            <div className="size- inline-flex flex-col justify-start items-start">
                                <div className="justify-center text-gray-500 text-xs font-medium font-['Noto_Sans_KR']">41</div>
                            </div>
                        </div>
                        <div className="size- px-2.5 py-1.5 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-gray-200 flex justify-start items-center gap-1.5">
                            <div className="size- inline-flex flex-col justify-start items-start">
                                <div className="justify-center text-gray-500 text-xs font-medium font-['Noto_Sans_KR']">댓글</div>
                            </div>
                            <div className="size- inline-flex flex-col justify-start items-start">
                                <div className="justify-center text-gray-500 text-xs font-medium font-['Noto_Sans_KR']">12</div>
                            </div>
                        </div>
                    </div>
                    <div className="size- px-2.5 py-1.5 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-gray-200 flex justify-start items-center">
                        <div className="size-4 relative overflow-hidden">
                            <div className="w-2 h-2.5 left-[4.33px] top-[2.67px] absolute outline outline-[1.20px] outline-offset-[-0.60px] outline-neutral-400" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="self-stretch p-4 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col justify-start items-start gap-3">
                <div className="self-stretch inline-flex justify-start items-center gap-2.5">
                    <div className="size-9 bg-gray-200 rounded-[999px]" />
                    <div className="size- inline-flex flex-col justify-start items-start gap-0.5">
                        <div className="self-stretch flex flex-col justify-start items-start">
                            <div className="justify-center text-neutral-900 text-sm font-bold font-['Noto_Sans_KR']">이준혁</div>
                        </div>
                        <div className="self-stretch flex flex-col justify-start items-start">
                            <div className="justify-center text-neutral-400 text-xs font-normal font-['Noto_Sans_KR']">정보 · 3시간 전</div>
                        </div>
                    </div>
                </div>
                <div className="self-stretch flex flex-col justify-start items-start">
                    <div className="self-stretch justify-center text-neutral-900 text-sm font-medium font-['Noto_Sans_KR'] leading-5">Dev Mode 핸드오프 체크리스트 공유</div>
                </div>
                <div className="self-stretch h-12 relative overflow-hidden">
                    <div className="w-80 h-12 left-0 top-[-0.96px] absolute justify-center text-zinc-600 text-sm font-normal font-['Noto_Sans_KR'] leading-6">색상은 hex, 간격은 4px 배수, 텍스트 스타일은 이름으로<br/>관리. 이 세 가지만 지켜도 개발자와 커뮤니케이션 시간이</div>
                </div>
                <div className="self-stretch pt-1 inline-flex justify-between items-center">
                    <div className="size- flex justify-start items-center gap-2">
                        <div className="size- px-2.5 py-1.5 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-gray-200 flex justify-start items-center gap-1.5">
                            <div className="size-4 relative overflow-hidden">
                                <div className="w-3 h-2.5 left-[1.76px] top-[3.47px] absolute outline outline-[1.20px] outline-offset-[-0.60px] outline-neutral-400" />
                            </div>
                            <div className="size- inline-flex flex-col justify-start items-start">
                                <div className="justify-center text-gray-500 text-xs font-medium font-['Noto_Sans_KR']">87</div>
                            </div>
                        </div>
                        <div className="size- px-2.5 py-1.5 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-gray-200 flex justify-start items-center gap-1.5">
                            <div className="size- inline-flex flex-col justify-start items-start">
                                <div className="justify-center text-gray-500 text-xs font-medium font-['Noto_Sans_KR']">댓글</div>
                            </div>
                            <div className="size- inline-flex flex-col justify-start items-start">
                                <div className="justify-center text-gray-500 text-xs font-medium font-['Noto_Sans_KR']">19</div>
                            </div>
                        </div>
                    </div>
                    <div className="size- px-2.5 py-1.5 bg-indigo-50 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-indigo-200 flex justify-start items-center">
                        <div className="size-4 relative overflow-hidden">
                            <div className="w-2 h-2.5 left-[4.33px] top-[2.67px] absolute bg-indigo-500 outline outline-[1.20px] outline-offset-[-0.60px] outline-indigo-500" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default App
