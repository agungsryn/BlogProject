/* eslint-disable react/prop-types */
import { format } from "date-fns";
import { Link } from "react-router-dom";
const Post = ({ id, title, summary, cover, created_at, author }) => {
  return (
    <div className="post">
      <div className="image">
        <Link to={`/post/${id}`}>
          <img src={cover} alt=""></img>
        </Link>
      </div>
      <div className="texts">
        <Link to={`/post/${id}`}>
          <h2>{title}</h2>
        </Link>
        <p className="info">
          <a className="author">{author.username}</a>
          <time>{format(new Date(created_at), "MMM d, yyyy HH:mm")}</time>
        </p>
        <p className="summary">{summary}</p>
      </div>
    </div>
  );
};

export default Post;
