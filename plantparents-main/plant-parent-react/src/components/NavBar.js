import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";

// import { RiUserLine } from "react-icons/ri";


function NavBar() {

  const { user, logout } = useContext(AuthContext);

  return (
    <>
      <nav class="navbar navbar-light">
        <Link to="/" className="text-decoration-none">
          🌱 Home
        </Link>
        <ul class="main-menu">
          <li>
          {user && user.hasAnyAuthority("USER", "ADMIN") 
            && <Link to="/About" className="text-decoration-none">
              About
            </Link>}
          </li>
          <li>
          {user && user.hasAnyAuthority("USER", "ADMIN") 
            && <Link to="/Community" className="text-decoration-none">
              Communities
            </Link>}
          </li>
          <li>
          {user && user.hasAnyAuthority("USER", "ADMIN") 
            && <Link to="/Species" className="text-decoration-none">
              Species
            </Link>}
          </li>
        </ul>
        <ul class="secondary-menu">
          {user ? <Link to="/" onClick={logout} style={{ marginLeft: '10px' }}>Logout</Link>
            : <Link to="/login" style={{ marginLeft: '10px' }}>Login</Link>}
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
