import { useContext } from "react";
import { FormContext } from "../contexts/FormContext";
import { useNavigate } from "react-router-dom";

const FormInput = ({ inputName, step }) => {
  const { updateFormData } = useContext(FormContext);

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    updateFormData({ [inputName]: e.target[inputName].value });
    e.target.reset();
    navigate(`/${step + 1}`);
  };

  return (
    <div>
      <h1>{step}</h1>
      <form
        onSubmit={(e) => {
          onSubmit(e);
        }}
      >
        <label htmlFor={inputName}>{inputName}</label>
        <input type="text" id={inputName} name={inputName} required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormInput;
