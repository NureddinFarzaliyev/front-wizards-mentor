import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../../app/supabase";

const PublicProfile = () => {
  const { username } = useParams();

  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const { data } = await supabase
        .from("usernames")
        .select("*")
        .eq("username", username)
        .single();
      setProfile(data);
      setLoading(false);
    })();
  }, []);

  return loading ? (
    <div>Loading...</div>
  ) : profile ? (
    <div>Welcome to profile - {profile.username}</div>
  ) : (
    <div>User not found</div>
  );
};

export default PublicProfile;
