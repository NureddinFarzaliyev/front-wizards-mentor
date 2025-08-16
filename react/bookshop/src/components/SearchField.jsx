import { useNavigate } from "react-router-dom";

const SearchField = () => {
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.querySelector(".search-field").value;
    if (searchValue) {
      navigate(`/search?query=${searchValue.split(" ").join("+")}`);
    }
  };

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <input
        className="search-field"
        type="text"
        placeholder="Search for books"
      />
    </form>
  );
};

export default SearchField;
