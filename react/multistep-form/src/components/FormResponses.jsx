import { useContext } from "react";
import { FormContext } from "../contexts/FormContext";

const FormResponses = () => {
  const { formData } = useContext(FormContext);

  return (
    <div>
      {Object.entries(formData).map(([key, value]) => (
        <div key={key} className="form-response">
          <strong>{key}:</strong> {value}
        </div>
      ))}
    </div>
  );
};

export default FormResponses;
