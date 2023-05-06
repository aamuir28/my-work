import { fetchSpecies } from "../services/apiService";
import { useEffect, useState } from "react";
import Species from "./Species";

function ShowContent() {
  const [species, setSpecies] = useState([]);

  useEffect(() => {
    fetchSpecies()
      .then(s => {
        // setSpecies(s.results);
      const filteredSpecies = s.results.filter(s => s.url.includes("/6/"));
      setSpecies(filteredSpecies);
      })
      .catch(alert);
  }, []);

  return (
    <div>
      <div>
        {species && species.map(s => <Species key={s.id} species={s} />)}
      </div>
    </div>
  );
}

export default ShowContent;
