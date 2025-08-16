import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <h1>DevBooks</h1>
      </Link>
      <Link to="/wishlist">
        <div className="wishlist-link">❤️</div>
      </Link>
    </header>
  );
};

export default Header;
