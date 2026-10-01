export default function PostCard() {
  return (
        <div className="w-96 p-5 bg-white rounded-[20px] outline outline-1 outline-offset-[-1px] outline-purple-500 inline-flex flex-col justify-start items-start gap-4">
            <div className="self-stretch h-52 relative bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-200">
                <div className="w-96 left-[17px] top-[17px] absolute inline-flex justify-start items-center gap-2.5">
                    <div className="size-9 bg-gray-200 rounded-[999px]" />
                    <div className="size- inline-flex flex-col justify-start items-start gap-0.5">
                        <div className="self-stretch flex flex-col justify-start items-start">
                            <div className="justify-center text-neutral-900 text-sm font-bold font-['Noto_Sans_KR']">작성자 이름</div>
                        </div>
                        <div className="self-stretch flex flex-col justify-start items-start">
                            <div className="justify-center text-neutral-400 text-xs font-normal font-['Noto_Sans_KR']">자유 · 방금 전</div>
                        </div>
                    </div>
                </div>
                <div className="w-96 left-[17px] top-[68px] absolute inline-flex flex-col justify-start items-start">
                    <div className="justify-center text-neutral-900 text-sm font-medium font-['Noto_Sans_KR'] leading-5">게시글 제목이 들어갑니다</div>
                </div>
                <div className="w-96 left-[17px] top-[100.05px] absolute inline-flex flex-col justify-start items-start">
                    <div className="justify-center text-zinc-600 text-sm font-normal font-['Noto_Sans_KR'] leading-6">본문 텍스트가 두 줄까지 노출되고 그 이후는 말줄임으로 처리<br/>됩니다. 상세 화면에서 전문을 확인합니다.</div>
                </div>
                <div className="w-96 pt-1 left-[17px] top-[159.19px] absolute inline-flex justify-between items-center">
                    <div className="size- flex justify-start items-center gap-2">
                        <div className="size- px-2.5 py-1.5 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-gray-200 flex justify-start items-center gap-1.5">
                            <div className="size-4 relative overflow-hidden">
                                <div className="w-3 h-2.5 left-[1.76px] top-[3.47px] absolute outline outline-[1.20px] outline-offset-[-0.60px] outline-neutral-400" />
                            </div>
                            <div className="size- inline-flex flex-col justify-start items-start">
                                <div className="justify-center text-gray-500 text-xs font-medium font-['Noto_Sans_KR']">12</div>
                            </div>
                        </div>
                        <div className="size- px-2.5 py-1.5 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-gray-200 flex justify-start items-center gap-1.5">
                            <div className="size- inline-flex flex-col justify-start items-start">
                                <div className="justify-center text-gray-500 text-xs font-medium font-['Noto_Sans_KR']">댓글</div>
                            </div>
                            <div className="size- inline-flex flex-col justify-start items-start">
                                <div className="justify-center text-gray-500 text-xs font-medium font-['Noto_Sans_KR']">4</div>
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
            <div className="self-stretch flex flex-col justify-start items-start gap-1.5">
                <div className="self-stretch flex flex-col justify-start items-start">
                    <div className="self-stretch justify-center text-gray-500 text-xs font-normal font-['IBM_Plex_Mono']">Properties</div>
                </div>
                <div className="self-stretch h-16 relative">
                    <div className="h-5 px-1.5 py-[3px] left-0 top-0 absolute bg-gray-100 rounded-sm inline-flex flex-col justify-start items-start">
                        <div className="justify-center text-zinc-600 text-xs font-normal font-['IBM_Plex_Mono']">author: text</div>
                    </div>
                    <div className="h-5 px-1.5 py-[3px] left-[99.20px] top-0 absolute bg-gray-100 rounded-sm inline-flex flex-col justify-start items-start">
                        <div className="justify-center text-zinc-600 text-xs font-normal font-['IBM_Plex_Mono']">title: text</div>
                    </div>
                    <div className="h-5 px-1.5 py-[3px] left-[191.81px] top-0 absolute bg-gray-100 rounded-sm inline-flex flex-col justify-start items-start">
                        <div className="justify-center text-zinc-600 text-xs font-normal font-['IBM_Plex_Mono']">body: text</div>
                    </div>
                    <div className="h-5 px-1.5 py-[3px] left-0 top-[26px] absolute bg-gray-100 rounded-sm inline-flex flex-col justify-start items-start">
                        <div className="justify-center text-zinc-600 text-xs font-normal font-['IBM_Plex_Mono']">likeCount: text</div>
                    </div>
                    <div className="h-5 px-1.5 py-[3px] left-[119px] top-[26px] absolute bg-gray-100 rounded-sm inline-flex flex-col justify-start items-start">
                        <div className="justify-center text-zinc-600 text-xs font-normal font-['IBM_Plex_Mono']">commentCount: text</div>
                    </div>
                    <div className="h-5 px-1.5 py-[3px] left-0 top-[52px] absolute bg-violet-50 rounded-sm inline-flex flex-col justify-start items-start">
                        <div className="justify-center text-purple-500 text-xs font-normal font-['IBM_Plex_Mono']">Button ×2 (nested instance)</div>
                    </div>
                </div>
                <div className="self-stretch flex flex-col justify-start items-start">
                    <div className="size- pt-1 flex flex-col justify-start items-start">
                        <div className="size- px-2 py-1 bg-indigo-50 rounded-sm outline outline-1 outline-offset-[-1px] outline-indigo-200 flex flex-col justify-start items-start">
                            <div className="justify-center text-indigo-500 text-xs font-normal font-['IBM_Plex_Mono']">AL ↓ · gap 12 · pad 16 · r16 · fill hug · width fill</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
