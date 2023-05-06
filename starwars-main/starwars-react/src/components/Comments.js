import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Comment from './Comment';

function Comments() {

  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/comment")
      .then(response => response.json())
      .then(data => setComments(data));
  }, []);

  // return comments.map((comment) => (
  //   <Comment key={comment.commentId} comment={comment} />
  // ));


  return (
    <div id="commentSection">
      <div className="text-center">
        <Link to="/comments/add" className="btn btn-success mt-4">Leave a Comment</Link>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Author</th>
            <th>Comment</th>
          </tr>
        </thead>
        <tbody>
          {comments.map(c => (
            <tr key={c.commentId}>
              <td>{c.author}</td>
              <td>{c.content}</td>
              {/* <td>
                <Link to={`/comments/${c.commentId}`} className="btn btn-primary btn-sm">View</Link>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Comments;