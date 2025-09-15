import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const Profile = () => {
  const { user, isUserLoading, username, isUsernameLoading } =
    useContext(AuthContext);

  return isUserLoading || isUsernameLoading ? (
    <div>Loading...</div>
  ) : (
    <div>
      <p>
        <b>Email:</b> {user?.email}
      </p>
      <p>
        <b>Username:</b> @{username}
      </p>
    </div>
  );
};

export default Profile;
