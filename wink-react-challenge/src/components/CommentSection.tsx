import { useState } from "react";
import type { Comment } from "../types";
import { getClientId } from "../api/clientId";



interface CommentSectionProps {
  comments: Comment[];
  onSubmit: (text: string) => void;
}

function CommentSection({ comments, onSubmit }: CommentSectionProps) {
  const [value, setValue] = useState(""); // 입력창 값만 여기 남는다

  const handleSubmit = () => {
    if (!value.trim()) return;
    onSubmit(value);
    setValue("");
  };

  

  return (
    <>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.nativeEvent.isComposing) {
            handleSubmit();
          }
        }}
      />

      <button onClick={handleSubmit}>등록</button>

      {comments.map((comment) => {
        const displayName =
          comment.clientId === getClientId()
            ? "나"
            : comment.author;

        return (
          <div key={comment.id}>
            {displayName}: {comment.body}
          </div>
        );
      })}
    </>
  );
}


export default CommentSection;