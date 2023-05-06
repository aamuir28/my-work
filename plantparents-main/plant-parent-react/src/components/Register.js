import { Link } from "react-router-dom";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../services/authService';

function Register() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [error, setError] = useState(null);
    const navigate = useNavigate();


    const handleSubmit = async (evt) => {
        evt.preventDefault();
        setError(null);

        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        if (username.length < 6 || username.length > 26) {
            setError('Username must be between 5 and 25 characters.');
            return;
          }

        const newUser = {
            username: username,
            password: password
        }

        const response = await register(newUser);

        if (response.error) {
            console.log("Something went wrong")
            setError(response.error);
            return;
        } else {
            navigate('/Login');
        }
    };


    return (
        <form onSubmit={handleSubmit}>
            <h2>Create an Account</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            <div className="form-group">
                <label>Username</label>
                <input type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} required />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <p className="form-text text-muted">Must be at least 8 characters and contain a letter, a digit, and special character.</p>
            </div>
            <div className="form-group">
                <label>Confirm Password</label>
                <input type="password" className="form-control" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
            </div>
            <div>
                <button type="submit" className="btn btn-primary">Register</button>
            </div>
            <div>
                <Link to="/Login">Already have an account? Login here.</Link>
            </div>
        </form>
    )
}

export default Register;