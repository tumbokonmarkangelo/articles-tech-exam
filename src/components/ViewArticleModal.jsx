import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function ViewArticleModal({
  article,
  open = false,
  onClose = () => {},
}) {
  return (
    <Dialog open={open} onClose={onClose} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-start justify-center p-4 text-center">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-6xl data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="flex items-start justify-between gap-5">
                <div className="mt-1 sm:mt-0 text-left">
                  <DialogTitle
                    as="h1"
                    className="text-xl font-semibold leading-6 text-gray-900 capitalize"
                  >
                    {article.title}
                  </DialogTitle>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-full bg-gray-300 p-1 hover:bg-gray-100 transition duration-500"
                >
                  <XMarkIcon className="size-6" />
                </button>
              </div>
              <div className="mt-5 flex flex-col gap-5">
                <div>
                  {/* Used placeholder image for demostration purpose only */}
                  <img
                    src={`https://picsum.photos/320/180?random=${article.id}`}
                    alt={`lorem picsum ${article.id}`}
                    className="w-full max-h-[360px] object-cover object-center"
                  />
                </div>
                <div>{article.body}</div>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
