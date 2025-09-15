import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { supabase } from "../app/supabase";

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userLoading, setLoading] = useState(true);
  const [username, setUsername] = useState(null);
  const [usernameLoading, setUsernameLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      setLoading(true);
      const { data } = await supabase.auth.getUser();
      setLoading(false);
      setUser(data.user);

      setUsernameLoading(true);
      const { data: usernames } = await supabase
        .from("usernames")
        .select("*")
        .eq("user", data.user?.id)
        .single();

      setUsernameLoading(false);
      setUsername(usernames?.username || null);
    };

    checkUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, userLoading, username, usernameLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
