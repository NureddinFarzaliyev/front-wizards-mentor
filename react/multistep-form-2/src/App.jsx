import { Link, Route, Routes } from "react-router-dom";
import DisplayData from "./components/DisplayData";
import FormInput from "./components/FormInput";

const App = () => {
  const formPages = ["Name", "Surname", "Email", "Phone", "Address", "City"];

  return (
    <>
      <DisplayData />
      <Routes>
        <Route
          path="/"
          element={
            <Link to="/1">
              <button>Start Form</button>
            </Link>
          }
        />
        {formPages.map((page, index) => (
          <Route
            key={index}
            path={`/${index + 1}`}
            element={<FormInput inputName={page} step={index + 1} />}
          />
        ))}
        <Route path="*" element={<div>done</div>} />
      </Routes>
      <div>
        {formPages.map((page, index) => (
          <Link key={index} to={`/${index + 1}`}>
            <button>{page}</button>
          </Link>
        ))}
      </div>
    </>
  );
};

export default App;
