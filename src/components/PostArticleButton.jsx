import { useState } from "react";
import PostArticleModal from "./PostArticleModal";

export default function PostArticleButton() {
  const [openPostModal, setOpenPostModal] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setOpenPostModal(true);
        }}
        type="button"
        className="inline-block border rounded px-5 py-2 bg-blue-950 text-white hover:bg-white hover:text-black hover:border-black transition duration-300 gap-1"
      >
        Post
      </button>
      <PostArticleModal
        open={openPostModal}
        onClose={() => {
          setOpenPostModal(false);
        }}
      />
    </>
  );
}
