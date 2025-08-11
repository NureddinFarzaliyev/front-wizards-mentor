import { useContext, useRef } from "react";
import { FormContext } from "../contexts/FormContext";
import { useNavigate } from "react-router-dom";

const FormStep = ({ step, fieldName }) => {
  const { updateFormData } = useContext(FormContext);

  const inputRef = useRef(null);

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    const value = inputRef.current.value;
    updateFormData({ [fieldName]: value });
    inputRef.current.value = "";
    navigate(`/${step + 1}`, { replace: true });
  };

  return (
    <div className="form-step">
      <h2>{step}</h2>
      <form onSubmit={onSubmit}>
        <label htmlFor={fieldName}>{fieldName}:</label>
        <input ref={inputRef} type="text" id={fieldName} name={fieldName} />
        <button type="submit">Next</button>
      </form>
    </div>
  );
};

export default FormStep;
