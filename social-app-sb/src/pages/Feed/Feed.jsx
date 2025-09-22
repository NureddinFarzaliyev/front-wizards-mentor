import { useEffect, useState } from "react";
import { supabase } from "../../app/supabase";
import Post from "../../components/Post/Post";

const Feed = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      let { data: response, error } = await supabase.from("posts").select(`*`);
      if (error) return alert("error");
      setLoading(false);
      console.log(response);
      setPosts(response);
    })();
  }, []);

  if (loading) return <h1>Loading Feed</h1>;
  else
    return (
      <div>
        {[...posts].reverse().map((p, i) => (
          <Post post={p} key={i} />
        ))}
      </div>
    );
};

export default Feed;
