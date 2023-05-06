import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";
import { findById } from "../services/speciesService";
import { findById as findByPlotId } from "../services/plotService";
// import { updatePlant } from "../services/plantService";

function Plant({ plant }) {
  const [speciesName, setSpeciesName] = useState("");
  const [plotName, setPlotName] = useState("");
  // const [isWatered, setIsWatered] = useState(plant.isWatered);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    findById(plant.speciesId)
      .then((species) => {
        setSpeciesName(species.commonName);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [plant.speciesId]);

  useEffect(() => {
    findByPlotId(plant.plotId)
      .then((plot) => {
        setPlotName(plot.name);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [plant.plotId]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US");
  };

  // const handleWateredClick = () => {
  //   setIsWatered((prevWatered) => !prevWatered);
  //   updatePlant({ ...plant, isWatered: !isWatered });
  // }

  return (
    <section>
      <div className="row mb-2">
        <div className="col">{speciesName}</div>
        <div className="col">{plotName}</div>
        <div className="col">{formatDate(plant.datePlanted)}</div>
        <div className="col">
          {plant.harvestDate ? formatDate(plant.harvestDate) : ""}
        </div>
        <div className="col">{formatDate(plant.dateLastWatered)}</div>
        <div className="col">{plant.watered ? "✓" : "☓"}</div>
        {/* <div className="col">
        {isWatered ? (
          <button onClick={handleWateredClick} className="btn btn-success">
            Watered
          </button>
        ) : (
          <button onClick={handleWateredClick} className="btn btn-danger">
            Has Not Been Watered
          </button>
        )}
      </div> */}
        <div className="col-2 d-flex justify-content-end">
          {user && user.hasAnyAuthority("ADMIN") && (
            <Link
              to={`/Plant/delete/${plant.plantId}`}
              className="btn btn-danger me-1"
            >
              Delete
            </Link>
          )}
          {user && user.hasAnyAuthority("USER", "ADMIN") && (
            <Link to={`/Plant/edit/${plant.plantId}`} className="btn btn-info">
              📝
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

export default Plant;
