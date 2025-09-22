import Avatar from "boring-avatars";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  return (
    <div
      style={{
        border: "solid 1px black",
        borderRadius: 12,
        padding: 10,
        marginTop: 10,
      }}
    >
      <h4>{post.title}</h4>{" "}
      <Link
        to={`/@/${post.username}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <div style={{ display: "flex", gap: 5, alignItems: "center" }}>
          <Avatar name={post.username} style={{ height: 40, width: 40 }} />{" "}
          <p>@{post.username}</p>{" "}
        </div>{" "}
      </Link>
      <p>{post.description}</p>{" "}
    </div>
  );
};

export default Post;
