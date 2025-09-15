import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

const Home = () => {
  const { user, userLoading } = useContext(AuthContext);

  if (userLoading || !user) {
    return <div>Loading....</div>;
  } else if (user) {
    return (
      <div>
        {" "}
        Logged in {user?.email} <Link to="/app">Go to app</Link>{" "}
      </div>
    );
  } else {
    return (
      <div>
        Go to <Link to="/login">login </Link>{" "}
      </div>
    );
  }
};

export default Home;
