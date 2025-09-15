import { useContext, useState } from "react";
import Input from "../../components/Inputs/Input";
import { supabase } from "../../app/supabase";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

const Register = () => {
  const { user, userLoading } = useContext(AuthContext);
  const navigate = useNavigate();

  if (user && !userLoading) {
    navigate("/");
  }

  const [value, setValue] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { data, error } = await supabase.auth.signUp({
      email: value.email,
      password: value.password,
    });

    const { data: usernameData, error: usernameError } = await supabase
      .from("usernames")
      .insert([{ username: value.username, user: data.user.id }])
      .select();

    setLoading(false);

    if (error || usernameError) {
      setError(error ? error.message : usernameError.message);
      return console.log("Error registering user:", error.message);
    }

    console.log("User registered successfully:", data);
    console.log("Username saved successfully:", usernameData);
  };

  if (userLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>Register Page</h1>
      <form>
        <Input
          placeholder="Username"
          value={value.username}
          changeHandle={(val) => {
            setValue((prev) => ({ ...prev, username: val }));
          }}
        />
        <Input
          placeholder="Email"
          value={value.email}
          changeHandle={(val) => {
            setValue((prev) => ({ ...prev, email: val }));
          }}
        />
        <Input
          placeholder="Password"
          value={value.password}
          changeHandle={(val) => {
            setValue((prev) => ({ ...prev, password: val }));
          }}
        />
        <button
          disabled={loading}
          onClick={(e) => {
            handleRegister(e);
          }}
        >
          {loading ? "Loading..." : "Register"}
        </button>
        <p>{error}</p>
      </form>
    </>
  );
};

export default Register;
