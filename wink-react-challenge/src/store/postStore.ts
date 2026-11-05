import { create } from "zustand";
import { toggleBookmark, toggleLike } from "../api/client";
import type { Post } from "../types";

// 목록과 상세 두 페이지가 같은 게시글(좋아요/북마크/댓글 수)을 공유하는 전역 State.
// 상세에서 좋아요를 누르고 뒤로 가면, 목록이 다시 불러오기 전에도 이미 바뀐 값이 보임.
interface PostStore {
  byId: Record<number, Post>;
  save: (posts: Post[]) => void;
  patch: (id: number, changes: Partial<Post>) => void;
  toggleLike: (id: number) => void;
  toggleSave: (id: number) => void;
}

const fail = () => alert("요청에 실패했어요. 잠시 후 다시 시도해주세요.");

export const usePostStore = create<PostStore>((set, get) => ({
  byId: {},
  save: (posts) => set((s) => ({ byId: { ...s.byId, ...Object.fromEntries(posts.map((p) => [p.id, p])) } })),
  patch: (id, changes) => set((s) => ({ byId: { ...s.byId, [id]: { ...s.byId[id], ...changes } } })),
  toggleLike: (id) => {
    toggleLike(id)
      .then((r) => get().patch(id, r))
      .catch(fail);
  },
  toggleSave: (id) => {
    toggleBookmark(id)
      .then((r) => get().patch(id, r))
      .catch(fail);
  },
}));
