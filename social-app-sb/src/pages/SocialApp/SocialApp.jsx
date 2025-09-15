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
        <div>
          <Link to="/app/profile">Your Profile</Link>
        </div>
      </header>
      <Outlet />
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default SocialApp;
