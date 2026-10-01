export default function ActionButton() {
  return (
<div className="self-stretch p-5 bg-white rounded-[20px] outline outline-1 outline-offset-[-1px] outline-purple-500 inline-flex flex-col justify-start items-start gap-5">
    <div className="self-stretch h-60 inline-flex flex-col justify-start items-start">
        <div className="self-stretch p-4 rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-200 inline-flex flex-col justify-start items-start gap-2">
            <div className="justify-center text-purple-500 text-xs font-normal font-['IBM_Plex_Mono']">type=Like, Liked=false</div>
            <div className="size- px-2.5 py-1.5 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-gray-200 inline-flex justify-start items-center gap-1.5">
                <div className="size-4 relative overflow-hidden">
                    <div className="w-3 h-2.5 left-[1.76px] top-[3.47px] absolute outline outline-[1.20px] outline-offset-[-0.60px] outline-neutral-400" />
                </div>
                <div className="size- inline-flex flex-col justify-start items-start">
                    <div className="justify-center text-gray-500 text-xs font-medium font-['Noto_Sans_KR']">12</div>
                </div>
            </div>
            <div className="justify-center text-neutral-400 text-xs font-normal font-['IBM_Plex_Mono']">stroke #8A9099 · border #E8EAEE</div>
        </div>
        <div className="self-stretch p-4 rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-200 inline-flex flex-col justify-start items-start gap-2">
            <div className="justify-center text-purple-500 text-xs font-normal font-['IBM_Plex_Mono']">type=Like, Liked=true</div>
            <div className="size- px-2.5 py-1.5 bg-rose-50 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-red-100 inline-flex justify-start items-center gap-1.5">
                <div className="size-4 relative overflow-hidden">
                    <div className="w-3 h-2.5 left-[1.76px] top-[3.47px] absolute bg-rose-500 outline outline-[1.20px] outline-offset-[-0.60px] outline-rose-500" />
                </div>
                <div className="size- inline-flex flex-col justify-start items-start">
                    <div className="justify-center text-rose-500 text-xs font-bold font-['Noto_Sans_KR']">13</div>
                </div>
            </div>
            <div className="justify-center text-neutral-400 text-xs font-normal font-['IBM_Plex_Mono']">fill #F2405D · bg #FFF1F3</div>
        </div>
        <div className="self-stretch p-4 rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-200 inline-flex flex-col justify-start items-start gap-2">
            <div className="justify-center text-purple-500 text-xs font-normal font-['IBM_Plex_Mono']">type=Bookmark, Saved=false</div>
            <div className="size- px-2.5 py-1.5 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-gray-200 inline-flex justify-start items-center">
                <div className="size-4 relative overflow-hidden">
                    <div className="w-2 h-2.5 left-[4.33px] top-[2.67px] absolute outline outline-[1.20px] outline-offset-[-0.60px] outline-neutral-400" />
                </div>
            </div>
            <div className="justify-center text-neutral-400 text-xs font-normal font-['IBM_Plex_Mono']">stroke #8A9099</div>
        </div>
        <div className="self-stretch p-4 rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-200 inline-flex flex-col justify-start items-start gap-2">
            <div className="justify-center text-purple-500 text-xs font-normal font-['IBM_Plex_Mono']">type=Bookmark, Saved=true</div>
            <div className="size- px-2.5 py-1.5 bg-indigo-50 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-indigo-200 inline-flex justify-start items-center">
                <div className="size-4 relative overflow-hidden">
                    <div className="w-2 h-2.5 left-[4.33px] top-[2.67px] absolute bg-indigo-500 outline outline-[1.20px] outline-offset-[-0.60px] outline-indigo-500" />
                </div>
            </div>
            <div className="justify-center text-neutral-400 text-xs font-normal font-['IBM_Plex_Mono']">fill #4C6EF5 · bg #EEF1FF</div>
        </div>
    </div>
    <div className="self-stretch inline-flex justify-start items-start gap-1.5 flex-wrap content-start">
        <div className="self-stretch px-2 py-1 bg-indigo-50 rounded-sm outline outline-1 outline-offset-[-1px] outline-indigo-200 inline-flex flex-col justify-start items-start">
            <div className="justify-center text-indigo-500 text-xs font-normal font-['IBM_Plex_Mono']">AL → · gap 6 · pad 6/10 · r999 · hug×hug</div>
        </div>
        <div className="self-stretch px-2 py-1 bg-violet-50 rounded-sm outline outline-1 outline-offset-[-1px] outline-purple-300 inline-flex flex-col justify-start items-start">
            <div className="justify-center text-purple-500 text-xs font-normal font-['IBM_Plex_Mono']">Variant props: type(Like/Bookmark) × state(false/true)</div>
        </div>
    </div>
</div>  )
}
