import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import PostsByUser from "../../components/PostsByUser/PostsByUser";
import AvatarUsername from "../../components/AvatarUsername/AvatarUsername";

const Profile = () => {
  const { user, isUserLoading, username, isUsernameLoading } =
    useContext(AuthContext);

  return isUserLoading || isUsernameLoading ? (
    <div>Loading...</div>
  ) : (
    <div>
      <AvatarUsername username={username} />
      <p>{user?.email}</p>
      <PostsByUser username={username} />
    </div>
  );
};

export default Profile;
