import { useContext } from "react";
import { Outlet, useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

const SocialApp = () => {
  const navigate = useNavigate();
  const { user, userLoading } = useContext(AuthContext);

  if (!user && !userLoading) navigate("/login");

  return !userLoading && user ? (
    <div>
      <header>
        <h1>Social Media Application - 128</h1>
        <div style={{ display: "flex", gap: 5 }}>
          <Link to="/app/feed">Feed</Link>
          <Link to="/app/profile">Your Profile</Link>
          <Link to="/app/post">Create Post</Link>
        </div>
      </header>
      <Outlet />
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default SocialApp;
