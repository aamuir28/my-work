import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { findAll } from "../services/speciesService";
import AuthContext from "../contexts/AuthContext";

function Speciess() {
  const [species, setSpecies] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    findAll()
      .then(setSpecies)
      .catch(alert);
  }, []);

  return (
    <>
      <section>
        <h2 class="sectionHeader">Species</h2>
        {user && user.hasAnyAuthority("ADMIN")
          && <Link to="/Species/add" className="btn btn-primary">Add Species</Link>}
        <div class="table table-responsive">
          <table className="table table-responsive w-100 d-block d-md-table table-success table-striped">
            <thead className="table-success">
              <tr>
                <th scope="col">Common Name</th>
                <th scope="col">Scientific Name</th>
                <th scope="col">Cycle</th>
                <th scope="col">Watering Frequency</th>
                <th> </th>
              </tr>
            </thead>
            <> <tbody>
              {species.map(s => (
                <tr key={s.id}>
                  <td>{s.commonName}</td>
                  <td>{s.scientificName}</td>
                  <td>{s.cycle}</td>
                  <td>{s.wateringFrequency}</td>
                  <td>
                    {user && user.hasAnyAuthority("ADMIN") && (
                      <Link
                        to={`/Species/edit/${s.speciesId}`}
                        className="btn btn-info"
                      >
                        📝
                      </Link>
                    )}
                    {user && user.hasAnyAuthority("ADMIN") && (
                      <Link
                        to={`/Species/delete/${s.speciesId}`}
                        className="btn btn-danger me-1"
                      >
                        🗑
                      </Link>
                    )}
                  </td>
                </tr>))}
            </tbody></>
          </table>
        </div>
      </section>
    </>
  );
}

export default Speciess;
