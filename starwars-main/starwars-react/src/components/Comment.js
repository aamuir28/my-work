import { Link } from "react-router-dom";

function Comment({ comment }) {
  const handleDelete = () => {
    console.log("Need to delete", comment.commentId);
  };

  return (
    <div>
      <figure>
        {comment.imageUrl && (
          <img
            className="card-img-top"
            src={comment.imageUrl}
            alt={comment.characterType}
          />
        )}
        <figcaption>
          <h4>{comment.characterType}</h4>
          <p>
            <strong>Order:</strong> {comment.order}
          </p>
          <p>{comment.description}</p>
          <p>
            <time dateTime={comment.date}>{comment.date}</time>
          </p>
          <p>
            <strong>Interest:</strong> {comment.interest}
          </p>
        </figcaption>
      </figure>
      <footer>
        <div>
          <Link to="/add">Edit</Link>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </footer>
    </div>
  );
}

export default Comment;
