"use client";
import { apiClient } from "@/app/client";
import { PostCard } from "@/app/components/PostCard";
import { PostType } from "@/app/types/feed.types";
import { useEffect, useState } from "react";

export const Feed = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const response = await apiClient.get("/posts");
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-3 mt-6">Feed</h1>
      {loading ? (
        <p>Loading posts...</p>
      ) : (
        posts.map((post: PostType, idx: number) => (
          <PostCard key={idx} post={post} />
        ))
      )}
    </div>
  );
};
