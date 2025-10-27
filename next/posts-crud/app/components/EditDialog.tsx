import { apiClient } from "@/app/client";
import { PencilIcon } from "@/app/icons/PencilIcon";
import {
  Button,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useState } from "react";

export default function EditDialog({
  initData,
  postId,
}: {
  initData: { title: string; body: string };
  postId: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState(initData);
  const [isLoading, setIsLoading] = useState(false);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  const onSaveChanges = async () => {
    setIsLoading(true);
    const response = await apiClient.put(`/posts/${postId}`, data);
    if (response.status === 200) {
      alert("Post updated successfully!");
    } else {
      alert("Failed to update post.");
    }
    setIsLoading(false);
    close();
  };

  return (
    <>
      <div
        onClick={open}
        className={`h-4 w-4 cursor-pointer opacity-50 hover:opacity-100 transition-opacity `}
      >
        <PencilIcon />
      </div>

      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
      >
        <DialogBackdrop className="fixed inset-0 bg-black/80" />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
            >
              <DialogTitle
                as="h3"
                className="text-base/7 font-medium text-white"
              >
                Edit Post
              </DialogTitle>
              <p className="mt-2 text-sm/6 flex flex-col gap-3">
                <input
                  type="text"
                  placeholder="Title"
                  className="border border-white/20 p-2 rounded"
                  value={data.title}
                  onChange={(e) => setData({ ...data, title: e.target.value })}
                />
                <textarea
                  placeholder="Body"
                  className="border border-white/20 p-2 rounded"
                  value={data.body}
                  onChange={(e) => setData({ ...data, body: e.target.value })}
                />
              </p>
              <div className="mt-4 flex  gap-2">
                <Button
                  className="inline-flex items-center gap-2 rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-600 data-open:bg-gray-700"
                  disabled={isLoading}
                  onClick={onSaveChanges}
                >
                  {isLoading ? "Saving..." : "Save Changes"}
                </Button>
                <Button
                  className="inline-flex items-center gap-2 rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-600 data-open:bg-gray-700 opacity-70"
                  disabled={isLoading}
                  onClick={close}
                >
                  Cancel
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
