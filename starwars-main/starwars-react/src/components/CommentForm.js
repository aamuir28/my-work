import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { save } from "../services/commentService";



function CommentForm() {

  const DEFAULT_COMMENT = {
    author: "",
    content: "",
  };

  const [currentComment, setcurrentComment] = useState(DEFAULT_COMMENT);

  const [ setErrors] = useState([]);

  const navigate = useNavigate();


  const handleChange = (event) => {
    const updatedComment = { ...currentComment };
    updatedComment[event.target.name] = event.target.value;
    setcurrentComment(updatedComment);
  };


  function handleSubmit(evt) {
    evt.preventDefault();
    save(currentComment)
      .then(() => navigate("/comments"))
      .catch(errs => {
        if (errs) {
          setErrors(errs);
        } else {
          navigate("/comments");
        }
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-center">{currentComment.commentId ? "Update A Comment" : "Add A Comment"}</h2>

      <div>
        <label htmlFor="author" style={{ fontFamily: "Spectral" }}><b>Author</b></label><br></br>
        <input
          type="textarea"
          id="author"
          size="60"
          required
          value={currentComment.author}
          name="author"
          placeholder="Name"
          onChange={handleChange}
          style={{ width: "100%", fontFamily: "Spectral"  }}
        />
      </div>


      <div>
        <label htmlFor="content" className="mt-2" style={{ fontFamily: "Spectral" }}><b>Content</b></label><br></br>
        <textarea
          id="content"
          size="100"
          required
          value={currentComment.content}
          name="content"
          placeholder="Write Your Comment Here!"
          onChange={handleChange}
          style={{ width: "100%", height: "150px", fontFamily: "Spectral"  }}
        />
      </div>

      <p id="timestamp"></p>
      <script>
        var timeStamp = new DateTime();
        var p = document.getElementById("timestamp");
        p.innerHTML = timeStamp;
      </script>

      <div>
        <button type="submit" className="btn btn-primary me-3">Add Comment</button>
        <Link to="/comments">Cancel</Link>
      </div>
    </form>
  );
}

export default CommentForm;
