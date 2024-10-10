import { useState } from "react";
import PostArticleModal from "./PostArticleModal";

export default function EditArticleButton({
  article,
  className = undefined,
  children = undefined,
}) {
  const [openEditModal, setOpenEditModal] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setOpenEditModal(true);
        }}
        type="button"
        className={className}
      >
        {children}
      </button>
      <PostArticleModal
        article={article}
        open={openEditModal}
        onClose={() => {
          setOpenEditModal(false);
        }}
      />
    </>
  );
}
