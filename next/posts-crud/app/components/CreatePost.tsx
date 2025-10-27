"use client";
import { apiClient } from "@/app/client";
import { AxiosResponse } from "axios";
import { FormEvent, useState } from "react";

export const CreatePost = () => {
  const [data, setData] = useState({
    title: "",
    body: "",
    userId: 1,
  });
  const [loading, setLoading] = useState(false);

  const postData = async () => {
    setLoading(true);
    const response: AxiosResponse = await apiClient.post("/posts", data);
    if (response.status === 201) {
      alert("Post created successfully!");
      setData({ title: "", body: "", userId: 1 });
    } else {
      alert("Failed to create post.");
    }
    setLoading(false);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    postData();
  };

  return (
    <div className="px-3 py-5 border border-white/50 rounded-xl mt-5">
      <h1 className="text-2xl font-bold mb-3">Create Post</h1>
      <form className="flex flex-col gap-4" onSubmit={onSubmit}>
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
        <button
          disabled={data.title === "" || data.body === "" || loading}
          type="submit"
          className="bg-gray-500 text-white p-2 rounded disabled:opacity-50"
        >
          {loading ? "Creating..." : "Create Post"}
        </button>
      </form>
    </div>
  );
};
