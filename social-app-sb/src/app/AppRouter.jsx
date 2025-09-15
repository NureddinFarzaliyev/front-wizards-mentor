import { Route, Routes } from "react-router-dom";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import SocialApp from "../pages/SocialApp/SocialApp";
import Profile from "../pages/Profile/Profile";
import PublicProfile from "../pages/PublicProfile/PublicProfile";
import CreatePost from "../pages/CreatePost/CreatePost";
import Feed from "../pages/Feed/Feed";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/@/:username" element={<PublicProfile />} />
      <Route path="/app" element={<SocialApp />}>
        <Route path="/app/profile" element={<Profile />} />
        <Route path="/app/post" element={<CreatePost />} />
        <Route path="/app/feed" element={<Feed />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
