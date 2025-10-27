import { apiClient } from "@/app/client";
import EditDialog from "@/app/components/EditDialog";
import { LoadingIcon } from "@/app/icons/LoadingIcon";
import { TrashIcon } from "@/app/icons/TrashIcon";
import { PostType } from "@/app/types/feed.types";
import { useState } from "react";

export const PostCard = ({ post }: { post: PostType }) => {
  const [deleteLoading, setDeleteLoading] = useState(false);

  const onDelete = async () => {
    if (deleteLoading) return;
    setDeleteLoading(true);
    const response = await apiClient.delete(`/posts/${post.id}`);
    if (response.status === 200) {
      window.alert("Post deleted successfully");
    } else {
      window.alert("Failed to delete post");
    }
    setDeleteLoading(false);
  };

  return (
    <div
      key={post.id}
      className="mb-4 p-4 border border-white/50 rounded-xl shadow-sm"
    >
      <h2 className="text-xl font-bold mb-2">{post.title}</h2>
      <p className="opacity-70 text-sm">{post.body}</p>
      <div className="mt-4 flex gap-4 items-center">
        <div
          onClick={onDelete}
          className={`h-4 w-4 cursor-pointer opacity-50 hover:opacity-100 transition-opacity ${deleteLoading && "animate-spin"}`}
        >
          {deleteLoading ? <LoadingIcon /> : <TrashIcon />}
        </div>
        <EditDialog
          initData={{ title: post.title, body: post.body }}
          postId={post.id}
        />
      </div>
    </div>
  );
};
