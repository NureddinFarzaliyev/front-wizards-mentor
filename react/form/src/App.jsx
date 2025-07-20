import { useState, useEffect } from "react";
import TextInput from "./components/TextInput";
import swalAlert from "./utils/swalAlert";

const App = () => {
  const defaultData = {
    name: "",
    surname: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    address: "",
    city: "",
  };

  const [data, setData] = useState(defaultData);
  const [isBtnClicked, setIsBtnClicked] = useState(false);

  useEffect(() => {
    swalAlert("info", "Welcome! Please fill in the form below.");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsBtnClicked(true);

    if (
      data.name &&
      data.surname &&
      data.email &&
      data.phone &&
      data.password &&
      data.confirmPassword &&
      data.password === data.confirmPassword
    ) {
      swalAlert("success", "Form submitted successfully!");
      setData(defaultData);
      setIsBtnClicked(false);
    } else {
      swalAlert("error", "Please fill in all required fields correctly.");
    }
  };

  return (
    <div>
      <h1>Please fill in the form below</h1>
      <form>
        <TextInput
          onChange={(e) => setData({ ...data, name: e.target.value })}
          name="Name"
          isError={isBtnClicked && !data.name}
          errorMessage="This field is required."
          value={data.name}
        />
        <TextInput
          onChange={(e) => setData({ ...data, surname: e.target.value })}
          name="Surname"
          isError={isBtnClicked && !data.surname}
          errorMessage="This field is required."
          value={data.surname}
        />
        <TextInput
          onChange={(e) => setData({ ...data, email: e.target.value })}
          name="Email"
          isError={isBtnClicked && !data.email}
          type="email"
          errorMessage="This field is required."
          value={data.email}
        />
        <TextInput
          onChange={(e) => setData({ ...data, phone: e.target.value })}
          name="Phone"
          isError={isBtnClicked && !data.phone}
          type="tel"
          errorMessage="This field is required."
          value={data.phone}
        />
        <TextInput
          onChange={(e) => setData({ ...data, password: e.target.value })}
          name="Password"
          isError={isBtnClicked && !data.password}
          type="password"
          errorMessage="This field is required."
          value={data.password}
        />
        <TextInput
          onChange={(e) =>
            setData({ ...data, confirmPassword: e.target.value })
          }
          name="Confirm Password"
          isError={
            (isBtnClicked &&
              data.confirmPassword &&
              data.password !== data.confirmPassword) ||
            (!data.confirmPassword && isBtnClicked)
          }
          type="password"
          errorMessage={
            data.confirmPassword
              ? "Passwords do not match."
              : "This field is required."
          }
          value={data.confirmPassword}
        />
        <TextInput
          onChange={(e) => setData({ ...data, address: e.target.value })}
          name="Address"
          isError={false}
          type="text"
          errorMessage=""
          value={data.address}
        />
        <button
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
