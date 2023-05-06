import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { findById, save } from '../services/speciesService';

function SpeciesForm() {

    const [currentSpecies, setCurrentSpecies] = useState({
        commonName: "",
        scientificName: "",
        cycle: "",
        wateringFrequency: ""
    });
    const [errors, setErrors] = useState([]);
    const [wait, setWait] = useState(true);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            findById(id)
                .then(species => {
                    setCurrentSpecies(species);
                    setWait(false);
                })
                .catch(() => navigate("/Species"));

        } else {
            setWait(false);
        }
    }, [id, navigate]);

    function handleChange(evt) {
        const nextSpecies = { ...currentSpecies };
        nextSpecies[evt.target.name] = evt.target.value;
        setCurrentSpecies(nextSpecies);
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        save(currentSpecies)
            .then(() => navigate("/Species"))
            .catch(errs => {
                if (errs) {
                    setErrors(errs);
                } else {
                    navigate("/Species");
                }
            });
    }

    if (wait) {
        return null;
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="commonName" className="form-label">Common Name</label>
                <input type="text" id="commonName" name="commonName" className="form-control"
                    value={currentSpecies.commonName} onChange={handleChange} required />
            </div>
            <div>
                <label htmlFor="scientificName" className="form-label">Scientific Name</label>
                <input type="text" id="scientificName" name="scientificName" className="form-control"
                    value={currentSpecies.scientificName} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="cycle" className="form-label">Cycle</label>
                <select id="cycle" name="cycle" className="form-control" value={currentSpecies.cycle} onChange={handleChange}>
                    <option value="">-- Select --</option>
                    <option value="Annual">Annual</option>
                    <option value="Biennial">Biennial</option>
                    <option value="Perennial">Perennial</option>
                </select>
            </div>

            <div>
                <label htmlFor="wateringFrequency" className="form-label">Watering Frequency</label>
                <input type="text" id="wateringFrequency" name="wateringFrequency" className="form-control"
                    value={currentSpecies.wateringFrequency} onChange={handleChange} required />
            </div>
            <div className="mt-2">
                <button type="submit" className="btn btn-primary me-2">Save</button>
                <Link to="/Species" className="btn btn-warning">Cancel</Link>
            </div>
            {errors.length > 0 && <div className="alert alert-danger">
                <ul>
                    {errors.map(err => <li key={err}>{err}</li>)}
                </ul>
            </div>}
        </form>
    );
}

export default SpeciesForm;