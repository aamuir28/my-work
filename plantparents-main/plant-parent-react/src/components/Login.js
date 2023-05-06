import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authenticate } from "../services/authService";
import AuthContext from "../contexts/AuthContext";

export default function Login() {

  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [hasError, setHasError] = useState(false);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  function handleChange(evt) {
    const next = { ...credentials };
    next[evt.target.name] = evt.target.value;
    setCredentials(next);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    authenticate(credentials)
      .then(user => {
        login(user);
        navigate("/");
      })
      .catch(() => setHasError(true));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div className="mb-3">
        <label className="form-label" htmlFor="username">Username</label>
        <input type="text" className="form-control" id="username" name="username"
          value={credentials.username} onChange={handleChange} />
      </div>
      <div>
        <label className="form-label" htmlFor="username">Password</label>
        <input type="password" className="form-control" id="password" name="password"
          value={credentials.password} onChange={handleChange} />
      </div>
      <div>
        <button type="submit" className="btn btn-primary me-2 mb-2">Login</button>
        <Link to="/" className="btn btn-warning mb-2">Cancel</Link>
      </div>
      <div>
        <Link to="/Register">Don't have an account? Create one here.</Link>
      </div>
      <div>
        
      </div>
      {hasError && <div className="alert alert-danger">
        Bad credentials.
      </div>}
    </form>
  )
}
