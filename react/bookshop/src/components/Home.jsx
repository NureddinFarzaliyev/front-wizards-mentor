import RecentBooks from "./RecentBooks";
import SearchField from "./SearchField";

const Home = () => {
  return (
    <div className="home">
      <SearchField />
      <RecentBooks />
    </div>
  );
};

export default Home;
