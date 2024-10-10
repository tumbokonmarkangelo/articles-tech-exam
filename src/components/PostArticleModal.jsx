import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import ArticleForm from "./ArticleForm";
import { useUserStore } from "../hooks/user";
import { ArticleQueries } from "../utilities/queries";
import { toast } from "react-toastify";

export default function PostArticleModal({
  article = undefined,
  open = false,
  onClose = () => {},
}) {
  const { user } = useUserStore();
  const { postMutation, updateMutation } = ArticleQueries();

  const onSubmit = (values) => {
    if (article) {
      updateMutation.mutate(
        { ...values, userId: user.id, id: article.id },
        {
          onSuccess: () => {
            toast.success("Update successful!", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            onClose();
          },
        }
      );
    } else {
      postMutation.mutate(
        { ...values, userId: user.id },
        {
          onSuccess: () => {
            toast.success("Article posted successfully!", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            onClose();
          },
        }
      );
    }
  };

  return (
    <Dialog open={open} onClose={onClose} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 w-full max-w-2xl data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="flex items-start justify-between gap-5">
                <div className="mt-1 sm:mt-0 text-left">
                  <DialogTitle
                    as="h1"
                    className="text-xl font-semibold leading-6 text-gray-900 capitalize line-clamp-1 break-all"
                  >
                    {article ? `Edit: ${article.title}` : "Post New Article"}
                  </DialogTitle>
                </div>
                <button type="button" data-autofocus onClick={onClose}>
                  <XMarkIcon className="size-6" />
                </button>
              </div>
              <div className="mt-5">
                <ArticleForm
                  article={article}
                  onSubmit={onSubmit}
                  onCancel={onClose}
                />
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
