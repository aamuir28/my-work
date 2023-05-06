import { fetchPlants } from "../services/apiService";
import { useEffect, useState } from "react";
import Plants from "./Plants.js";

function ShowContent() {
  const [plants, setSpecies] = useState([]);

  useEffect(() => {
    fetchPlants()
      .then(s => {
        // setPlants(p.results);
      const filteredPlants = p.results.filter(s => p.url.includes("/?/"));
      setSpecies(filteredPlants);
      })
      .catch(alert);
  }, []);

  return (
    <div>
      <div>
        {plants && plants.map(s => <Plants key={s.id} plants={s} />)}
      </div>
    </div>
  );
}

export default ShowContent;