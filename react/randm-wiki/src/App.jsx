import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Characters from "./components/characters/Characters";
import Character from "./components/characters/Character";
import Locations from "./components/locations/Locations";
import LocationPage from "./components/locations/LocationPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/characters/:id" element={<Character />} />
        <Route path="/locations/" element={<Locations />} />
        <Route path="/locations/:id" element={<LocationPage />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
