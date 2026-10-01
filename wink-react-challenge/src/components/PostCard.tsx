type PostCardProps = {
  user: string;
  category: string;
  time: string;
  title: string;
  body: string;
  likes: number;
  comments: number;
};


function PostCard({ 
    user, 
    category, 
    time, 
    title, 
    body,  
    likes, 
    comments
}: PostCardProps) {
    return(
        <article className="self-stretch p-4 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col justify-start items-start gap-3">
            <div className="flex items-center gap-2.5">
                <div className="size-9 bg-gray-200 rounded-full" />

                <div className="flex flex-col gap-0.5">
                    <span className="text-body font-bold text-text">
                        {user}
                    </span>

            <span className="text-caption text-text-secondary">
                {category} · {time}
            </span>
        </div>
    </div>

    <h2 className="text-body font-medium leading-5 text-text">
        {title}
    </h2>

    <div className="self-stretch h-12 relative overflow-hidden">
    <div className="w-80 h-12 left-0 top-[-0.95px] absolute text-zinc-600 text-sm font-normal font-['Noto_Sans_KR'] leading-6">
        {body}
    </div>
    </div>

    <div className="self-stretch pt-1 inline-flex justify-between items-center">

        <div className="size- flex justify-start items-center gap-2">

            {/* 하트 */}
            <div className="size- px-2.5 py-1.5 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-gray-200 flex justify-start items-center gap-1.5">
                <div className="size-4 relative overflow-hidden">
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M8.00001 13.6667C8.00001 13.6667 3.20001 10.7333 2.06668 7.93334C1.13334 5.60001 2.46668 3.46667 4.60001 3.46667C5.86668 3.46667 6.73334 4.13334 7.33334 4.80001C7.93334 4.13334 8.80001 3.46667 10.0667 3.46667C12.2 3.46667 13.5333 5.60001 12.6 7.93334C11.4667 10.7333 6.66668 13.6667 6.66668 13.6667H8.00001Z"
                            stroke="#8A9099"
                            strokeWidth="1.2"
                        />
                    </svg>
                </div>

                <div className="size- inline-flex flex-col justify-start items-start">
                    <div className="justify-center text-gray-500 text-xs font-medium font-['Noto_Sans_KR']">
                        {likes}
                    </div>
                </div>
            </div>

            {/* 댓글 */}
            <button className="px-2.5 py-1.5 rounded-full border border-border text-caption font-medium text-text-secondary">
                댓글 {comments}
            </button>

        </div>

        {/* 북마크 */}
        <div className="size- px-2.5 py-1.5 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-gray-200 flex justify-start items-center">
            <div className="size-4 flex justify-center items-center">
                <svg
                    width="9"
                    height="13"
                    viewBox="0 0 9 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M0.600098 0.599976H7.93343V11.4L4.26676 8.73331L0.600098 11.4V0.599976Z"
                        stroke="#8A9099"
                        strokeWidth="1.2"
                    />
                </svg>
            </div>
        </div>

    </div>
        </article>
    )
}



export default PostCard;