import { useEffect, useState } from "react";
import { supabase } from "../../app/supabase";
import Avatar from "boring-avatars";

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
          <div
            key={i}
            style={{
              border: "solid 1px black",
              borderRadius: 12,
              padding: 10,
              marginTop: 10,
            }}
          >
            <h4>{p.title}</h4>{" "}
            <div style={{ display: "flex", gap: 5, alignItems: "center" }}>
              <Avatar name={p.username} style={{ height: 40, width: 40 }} />{" "}
              <p>@{p.username}</p>{" "}
            </div>{" "}
            <p>{p.description}</p>{" "}
          </div>
        ))}
      </div>
    );
};

export default Feed;
