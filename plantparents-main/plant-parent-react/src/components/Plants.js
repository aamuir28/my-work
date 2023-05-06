import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { findAll } from "../services/plantService";
import Plant from "./Plant";
import AuthContext from "../contexts/AuthContext";

function Plants() {
  const [plant, setPlant] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
      findAll()
          .then(setPlant)
          .catch(alert);
  }, []);
  
    return (
    <>
    <h2>Plants</h2>
    {user && user.hasAnyAuthority("USER", "ADMIN") 
      && <Link to="/Plant/add" className="btn btn-primary">Add Plants</Link>}
      <div className="row mb-2">
        <div className="col">Plant</div>
        <div className="col">Plot Name</div>
        <div className="col">Date Planted</div>
        <div className="col">Harvest Date</div>
        <div className="col">Date Last Watered</div>
        <div className="col">Has Been Watered</div>
      </div>
      {plant.map(p => <Plant key={p.id} plant={p} />)}
      </>
    );
  }
  
  export default Plants;
  