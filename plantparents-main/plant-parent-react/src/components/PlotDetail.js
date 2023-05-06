import { useEffect, useState, useContext } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import AuthContext from "../contexts/AuthContext";

import { findById } from '../services/plotService';

function PlotDetail() {
  const [plot, setPlot] = useState(null);
  const { user } = useContext(AuthContext);

  const { plotId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    findById(plotId).then(setPlot);
  }, [plotId]);


  return (
    <>
    <section>
      <div class="btn-group btn-block">
        <Link to="/Community" className="btn btn-warning">Return to Your Communities</Link>
        {user && user.hasAnyAuthority("ADMIN")
                    && <Link to={`/Plot/delete/${plotId}`} className="btn btn-danger me-1">Delete Plot</Link>}
      </div>

      <h3>Gardeners</h3>
      {user && user.hasAnyAuthority("ADMIN")
        && <Link to="AddGardener" className="btn btn-success ">Add Gardener</Link>}
      {plot && plot.gardeners ? (
        <div class="table table-responsive">
        <table className="table table-responsive w-100 d-block d-md-table table-success table-striped table-borderless table-hover">
           <thead className="table-success">
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {plot.gardeners.map(g => (
              <tr key={g.gardenerId}>
                <td>{g.firstName}</td>
                <td>{g.lastName}</td>
                <td>
                  {user && user.hasAnyAuthority("ADMIN")
                    && <Link to={`editgardener/${g.gardenerId}`} className="btn btn-primary btn-sm">📝</Link>}
                  {user && user.hasAnyAuthority("ADMIN")
                    && <Link to={`/Gardener/delete/${g.gardenerId}`} className="btn btn-danger me-1">🗑️</Link>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
       </div>
      ) : (
        <p><em>There are no gardeners for this community.</em></p>
      )}

<h3>Plants</h3>
{user && user.hasAnyAuthority("ADMIN") &&
<Link to="/Community/:communityId/viewplot/:plotId/AddPlantForm" className="btn btn-success">Add Plant</Link>}
      {plot && plot.plants ? (
        <div class="table table-responsive">
        <table className="table table-responsive w-100 d-block d-md-table table-success table-striped table-borderless table-hover">
           <thead className="table-success">
            <tr>
              <th>Plant</th>
              <th>Cycle</th>
              <th>Date Planted</th>
              <th>Harvest Date</th>
              <th>Watering Frequency</th>
              <th>Date Last Watered</th>
              {/* <th>Is Watered?</th> */}
            </tr>
          </thead>
          <tbody>
            {plot.plants.map(p => (
              <tr key={p.speciesId}>
                <td>{p.species.commonName}</td>
                <td>{p.species.cycle}</td>
                <td>{new Date(p.datePlanted).toLocaleDateString("en-US", { month: "2-digit", day: "2-digit", year: "numeric", timeZone: "UTC" })}</td>
                {p.harvestDate ? (
                  <td>{new Date(p.harvestDate).toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric', timeZone: "UTC" })}</td>
                ) : ( <td></td> )}
                <td>{p.species.wateringFrequency}</td>
                <td>{new Date(p.dateLastWatered).toLocaleDateString("en-US", { month: "2-digit", day: "2-digit", year: "numeric", timeZone: "UTC" })}</td>
                {/* <td>{p.watered ? "Yes" : "No"}</td> */}
                <td> 
          {user && user.hasAnyAuthority("USER", "ADMIN") && (
            <Link
              to={`/Plant/edit/${p.plantId}`}
              className="btn btn-info"
            >
              📝
            </Link>
          )}
          {user && user.hasAnyAuthority("USER", "ADMIN") && (
            <Link
              to={`/Plant/delete/${p.plantId}`}
              className="btn btn-danger me-1"
            >
              🗑️
            </Link>
          )}
        </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      ) : (
        <p><em>There are no plants for this community.</em></p>
      )}</section>
    </>
  );
}


export default PlotDetail;