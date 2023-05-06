import { Link } from "react-router-dom";
import './Nav.css'
// import Search from './Search.js'

function NavBar() {
  return (
    <>
      {/* <Search /> */}
      <div className="navbar nav mt-5 mb-5 d-flex justify-content-center justify-content-md-between px-3">
        <div className="">
          <Link to="/" className="text-decoration-none">Home</Link>
        </div>
        <div className="">
          <Link to="/mandalorian" className="text-decoration-none">Mandalorian</Link>
        </div>
        <div className="">
          <Link to="/grogu" className="text-decoration-none">Grogu</Link>
        </div>
        <div className="">
          <Link to="/comments" className="text-decoration-none">Comments</Link>
        </div>
        <div className="">
          <Link to="/shop" className="text-decoration-none">Shop</Link>
        </div>
        <div className="">
          <Link to="/contact" className="text-decoration-none">Contact</Link>
        </div>
      </div>
    </>
  );
}

export default NavBar;