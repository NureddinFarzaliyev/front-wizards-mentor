import { Route, Routes } from "react-router-dom";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import SocialApp from "../pages/SocialApp/SocialApp";
import Profile from "../pages/Profile/Profile";
import PublicProfile from "../pages/PublicProfile/PublicProfile";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/@/:username" element={<PublicProfile />} />
      <Route path="/app" element={<SocialApp />}>
        <Route path="/app/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
