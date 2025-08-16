import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import BookPage from "./components/BookPage";
import Wishlist from "./components/Wishlist";
import SearchResuts from "./components/SearchResuts";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book/:id" element={<BookPage />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/search" element={<SearchResuts />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
