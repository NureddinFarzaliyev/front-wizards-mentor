import { useEffect, useState } from "react";
import { supabase } from "../../app/supabase";
import Post from "../Post/Post";

const PostsByUser = ({ username }) => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      let { data: posts, error } = await supabase
        .from("posts")
        .select("*")
        .eq("username", username);

      setLoading(false);
      if (error) console.log("error", error);
      else setPosts(posts);
    })();
  }, [username]);

  if (loading) return <h1>Loading Posts...</h1>;

  return (
    <div>
      {posts.length === 0 ? (
        <p>No posts found for this user.</p>
      ) : (
        posts.map((post, index) => <Post post={post} key={index} />)
      )}
    </div>
  );
};

export default PostsByUser;
