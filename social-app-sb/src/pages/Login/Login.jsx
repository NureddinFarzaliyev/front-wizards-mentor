import { useState } from "react";
import Input from "../../components/Inputs/Input";
import { supabase } from "../../app/supabase";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();

    const { data: loginData, error } = await supabase.auth.signInWithPassword({
      email: data.email,
      password: data.password,
    });

    if (error) {
      console.log("Error logging in:", error.message);
    } else {
      console.log("Login successful:", loginData);
    }
  };

  return (
    <>
      <h1>Login</h1>
      <form>
        <Input
          placeholder={"email"}
          changeHandle={(val) => {
            setData((prev) => ({ ...prev, email: val }));
          }}
        />
        <Input
          placeholder={"password"}
          changeHandle={(val) => {
            setData((prev) => ({ ...prev, password: val }));
          }}
        />
        <button type="submit" onClick={(e) => handleLogin(e)}>
          Login
        </button>
      </form>
    </>
  );
};

export default Login;
