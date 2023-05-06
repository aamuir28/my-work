import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";
import { getCommunities } from "../services/communityService";

function Community() {
  const [communities, setCommunities] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    getCommunities().then(setCommunities);
  }, []);

  return (
    <>
      <section id="communities">
        <h1 class="sectionHeader" className="text- mx-auto sectionHeader">
          Communities
        </h1>
        {user && user.hasAnyAuthority("ADMIN") && (
          <Link
            to="/Community/add"
            className="btn btn-success mx-auto"
            class="btn"
          >
            Add Community
          </Link>
        )}
        <div class="table table-responsive">
          <table className="table table-responsive w-100 d-block d-md-table table-success table-striped table-borderless table-hover">
            <thead className="table-success">
              <tr>
                <th>No.</th>
                <th>Name</th>
                <th>Option</th>
              </tr>
            </thead>
            <tbody>
              {communities.map((c) => (
                <tr key={c.communityId}>
                  <td>{c.communityId}</td>
                  <td>{c.name}</td>
                  <td>
                    <Link
                      to={`/Community/${c.communityId}`}
                      className="btn btn-primary btn-sm"
                    >
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

export default Community;
