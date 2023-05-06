import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";

import Heading from "./Heading";

import { getCommunity, deleteById } from "../services/communityService";
import { deleteByGardenerId } from "../services/gardenerService";

function CommunityDetail() {
  const [community, setCommunity] = useState(null);
  const { user } = useContext(AuthContext);
  const { communityId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getCommunity(communityId).then(setCommunity);
  }, [communityId]);

  // if we don't have agency, then don't attempt to display anything
  if (!community) {
    return null;
  }

  return (
    <>
      <section>
        <Heading>{`${community.name}`}</Heading>

        <div class="btn-group btn-block">
          <Link to="/Community" className="btn btn-warning">
            {" "}
            Return to Communities List
          </Link>
          {/* <Link to="edit" className="btn btn-primary ms-2">Edit</Link> */}
          {user && user.hasAnyAuthority("ADMIN") && (
            <Link
              to={`/Community/delete/${communityId}`}
              className="btn btn-danger"
            >
              Delete Community
            </Link>
          )}
        </div>

        {user && user.hasAnyAuthority("ADMIN") && (
          <Link to="AddPlot" className="btn btn-success">
            Add Plot
          </Link>
        )}
        {community.plots.length > 0 ? (
          <div class="table table-responsive">
            <table className="table table-responsive w-100 d-block d-md-table table-success table-striped table-borderless table-hover">
              <thead className="table-success">
                <tr>
                  <th>Name</th>
                  <th> </th>
                </tr>
              </thead>
              <tbody>
                {community.plots.map((p) => (
                  <tr key={p.plotId}>
                    <td>{p.name}</td>
                    <td>
                      <Link
                        to={`viewplot/${p.plotId}`}
                        className="btn btn-primary btn-sm"
                      >
                        View
                      </Link>
                      {/* {user && user.hasAnyAuthority("ADMIN")
                    && <Link to={`/Plot/delete/${p.plotId}`} className="btn btn-danger me-1">Delete</Link>} */}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p>
            <em>There are no plots assigned to this community.</em>
          </p>
        )}
      </section>
    </>
  );
}

export default CommunityDetail;
