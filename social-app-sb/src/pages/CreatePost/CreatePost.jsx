import { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { supabase } from "../../app/supabase";

const CreatePost = () => {
  const { username, usernameLoading } = useContext(AuthContext);

  const [data, setData] = useState({
    title: "",
    description: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();

    const postData = { ...data, username };

    console.log("posting data", postData);

    setIsSubmitting(true);

    const { data: response, error } = await supabase
      .from("posts")
      .insert([postData])
      .select();

    setIsSubmitting(false);
    if (error) return alert("Error while posting");

    alert("Success!");
    setData({ title: "", description: "" });
    console.log(response);
  };

  return (
    <div>
      create post
      <form onSubmit={(e) => submitHandler(e)}>
        <input
          type="text"
          placeholder="Title"
          value={data.title}
          onChange={(e) => setData({ ...data, title: e.target.value })}
        />
        <br />
        <textarea
          placeholder="Description"
          value={data.description}
          onChange={(e) => setData({ ...data, description: e.target.value })}
        />
        <br />
        <button
          disabled={
            data.title === "" ||
            data.description === "" ||
            usernameLoading ||
            isSubmitting
          }
          type="submit"
        >
          Create Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
