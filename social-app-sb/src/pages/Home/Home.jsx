import { useEffect } from "react";
import { supabase } from "../../app/supabase";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate("/");

  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getUser();
      if (data.user === null) {
        navigate("/login");
      }
    };

    checkUser();
  }, []);

  return <div>only logged</div>;
};

export default Home;
