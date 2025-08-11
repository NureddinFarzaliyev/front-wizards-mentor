import { useContext } from "react";
import { FormContext } from "../contexts/FormContext";

const DisplayData = () => {
  const { formData } = useContext(FormContext);

  return (
    <div>
      {Object.entries(formData).map(([key, value]) => (
        <div>
          <b>{key}:</b> {value}
        </div>
      ))}
    </div>
  );
};

export default DisplayData;
