import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import ViewArticleModal from "./ViewArticleModal";
import EditArticleButton from "./EditArticleButton";
import { useUserStore } from "../hooks/user";

export default function ArticleCard({ article, isAdmin = false }) {
  const { user } = useUserStore();
  const [openViewModal, setOpenViewModal] = useState(false);

  const viewArticle = () => {
    return setOpenViewModal(true);
  };

  return (
    <>
      <ViewArticleModal
        article={article}
        open={openViewModal}
        onClose={() => {
          setOpenViewModal(false);
        }}
      />
      <div className="border rounded border-gray-300 hover:ring-1 ring-blue-400 flex flex-col justify-end min-h-[340px] overflow-hidden cursor-pointer">
        <div className="flex-1 min-h-[180px] relative">
          {/* Used placeholder image for demostration purpose only */}
          <img
            onClick={() => {
              viewArticle();
            }}
            src={`https://picsum.photos/320/180?random=${article.id}`}
            alt={`lorem picsum ${article.id}`}
            className="w-full h-full object-cover"
          />
          {isAdmin && article.userId === user.id && (
            <EditArticleButton
              article={article}
              className="absolute top-2 right-2 flex justify-center items-center rounded-full h-8 w-8 bg-gray-300 text-black hover:bg-gray-200 transition duration-500"
            >
              <PencilSquareIcon className="size-5" />
            </EditArticleButton>
          )}
        </div>
        <div
          className="p-3"
          onClick={() => {
            viewArticle();
          }}
        >
          <h4 className="text-xl line-clamp-1 break-all capitalize font-medium">
            {article.title}
          </h4>
          <p className="text-base line-clamp-2">{article.body}</p>
        </div>
      </div>
    </>
  );
}
