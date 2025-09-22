import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../../app/supabase";
import AvatarUsername from "../../components/AvatarUsername/AvatarUsername";
import PostsByUser from "../../components/PostsByUser/PostsByUser";

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
    <>
      <AvatarUsername username={username} />
      <PostsByUser username={username} />
    </>
  ) : (
    <div>User not found</div>
  );
};

export default PublicProfile;
