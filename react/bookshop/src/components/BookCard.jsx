import { Link } from "react-router-dom";

const BookCard = ({ title, author, id, coverUrl }) => {
  return (
    <Link to={`/book/${id}`}>
      <div className="book-card">
        {coverUrl && <img src={coverUrl} alt={`${title} cover`} />}
        {title && <h3>{title}</h3>}
        {author && <p>{author}</p>}
        {id && <p>ID: {id}</p>}
      </div>
    </Link>
  );
};

export default BookCard;
