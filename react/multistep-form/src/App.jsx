import { Link, Route, Routes } from "react-router-dom";
import FormResponses from "./components/FormResponses";
import FormStep from "./components/FormStep";

const App = () => {
  const steps = ["Name", "Surname", "Email", "Phone", "Address"];

  return (
    <>
      <FormResponses />
      <Routes>
        {steps.map((step, index) => (
          <Route
            key={index}
            path={`/${index + 1}`}
            element={<FormStep fieldName={step} step={index + 1} />}
          />
        ))}
        <Route
          path="/"
          element={
            <div style={{ marginTop: "20px" }}>
              <Link to="/1">
                <button>Start Form</button>
              </Link>
            </div>
          }
        />
        <Route
          path="*"
          element={
            <div style={{ marginTop: "20px" }}>
              <b>Done!</b>
            </div>
          }
        />
      </Routes>
    </>
  );
};

export default App;
